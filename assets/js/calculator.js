(function () {
  'use strict';

  const AUTO_DISCOUNT_THRESHOLD = 20000;
  const AUTO_DISCOUNT_PERCENT = 10;
  const STORAGE_LANG = 'calculatorLang';
  const STORAGE_THEME = 'calculatorTheme';

  let currentLang = 'ru';

  const serviceType = document.getElementById('serviceType');
  const serviceQuantity = document.getElementById('serviceQuantity');
  const serviceQuantityLabel = document.getElementById('serviceQuantityLabel');
  const serviceQuantityHelp = document.getElementById('serviceQuantityHelp');

  const addServiceBtn = document.getElementById('addServiceBtn');
  const selectedServicesContainer = document.getElementById('selectedServicesContainer');

  const complexity = document.getElementById('complexity');
  const urgency = document.getElementById('urgency');

  const extraHours = document.getElementById('extraHours');
  const hourRate = document.getElementById('hourRate');
  const discount = document.getElementById('discount');

  const clientName = document.getElementById('clientName');
  const projectComment = document.getElementById('projectComment');

  const serviceUnitNote = document.getElementById('serviceUnitNote');
  const serviceFromNote = document.getElementById('serviceFromNote');
  const resultNote = document.getElementById('resultNote');

  const totalPrice = document.getElementById('totalPrice');
  const servicesRawTotalLabel = document.getElementById('servicesRawTotalLabel');
  const complexityLabel = document.getElementById('complexityLabel');
  const urgencyLabel = document.getElementById('urgencyLabel');
  const servicesCalculatedTotalLabel = document.getElementById('servicesCalculatedTotalLabel');
  const optionsLabel = document.getElementById('optionsLabel');
  const autoDiscountBaseLabel = document.getElementById('autoDiscountBaseLabel');
  const autoDiscountLabel = document.getElementById('autoDiscountLabel');
  const afterAutoDiscountLabel = document.getElementById('afterAutoDiscountLabel');
  const extraHoursLabel = document.getElementById('extraHoursLabel');
  const discountLabel = document.getElementById('discountLabel');
  const selectedSummaryList = document.getElementById('selectedSummaryList');
  const summaryBox = document.getElementById('summaryBox');

  const optionCheckboxes = document.querySelectorAll('input[type="checkbox"][data-price]');
  const copySummaryBtn = document.getElementById('copySummaryBtn');
  const resetBtn = document.getElementById('resetBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const langToggleBtn = document.getElementById('langToggleBtn');

  let selectedServices = [];
  let serviceIdCounter = 1;

  function dict() {
    return window.CALC_I18N[currentLang] || window.CALC_I18N.ru;
  }

  /** Текст по пути вида landing.title внутри текущего языка */
  function t(path) {
    const parts = path.split('.');
    let node = dict();
    for (let i = 0; i < parts.length; i++) {
      node = node && node[parts[i]];
    }
    return typeof node === 'string' ? node : path;
  }

  function optionPack(optKey) {
    if (!optKey) return null;
    const pack = dict().options && dict().options[optKey];
    return pack || null;
  }

  function unitLabelFor(unitType) {
    const u = dict().units || {};
    return u[unitType] || u.fixed || '';
  }

  function formatPrice(value) {
    const locale = currentLang === 'en' ? 'en-US' : 'ru-RU';
    const suffix = currentLang === 'en' ? ' RUB' : ' ₽';
    return new Intl.NumberFormat(locale).format(Math.round(value)) + suffix;
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-theme', isDark);
    const th = dict().theme;
    themeToggleBtn.textContent = isDark ? th.light : th.dark;
    themeToggleBtn.setAttribute('aria-label', isDark ? th.ariaLight : th.ariaDark);
  }

  function toggleTheme() {
    const nextTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    localStorage.setItem(STORAGE_THEME, nextTheme);
    applyTheme(nextTheme);
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_THEME);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeToUse = savedTheme || (prefersDark ? 'dark' : 'light');
    applyTheme(themeToUse);
  }

  function updateLangToggleUi() {
    if (currentLang === 'ru') {
      langToggleBtn.textContent = window.CALC_I18N.ru.lang.switchToEn;
      langToggleBtn.setAttribute('aria-label', window.CALC_I18N.ru.lang.ariaToEn);
    } else {
      langToggleBtn.textContent = window.CALC_I18N.en.lang.switchToRu;
      langToggleBtn.setAttribute('aria-label', window.CALC_I18N.en.lang.ariaToRu);
    }
  }

  /** Элементы с data-i18n / data-i18n-html / data-i18n-placeholder */
  function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (key) el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(key));
    });
    document.title = dict().pageTitle || document.title;
    document.documentElement.lang = currentLang === 'en' ? 'en' : 'ru';
  }

  function refreshServiceSelect() {
    const groups = dict().groups || {};
    serviceType.querySelectorAll('optgroup[data-group-key]').forEach(function (og) {
      const gk = og.getAttribute('data-group-key');
      if (gk && groups[gk]) og.label = groups[gk];
    });
    serviceType.querySelectorAll('option[data-opt-key]').forEach(function (opt) {
      const ok = opt.getAttribute('data-opt-key');
      const pack = optionPack(ok);
      if (pack) opt.text = pack.title;
    });
  }

  function refreshComplexityUrgencyOptions() {
    complexity.querySelectorAll('option[data-i18n]').forEach(function (opt) {
      const key = opt.getAttribute('data-i18n');
      if (key) opt.textContent = t(key);
    });
    urgency.querySelectorAll('option[data-i18n]').forEach(function (opt) {
      const key = opt.getAttribute('data-i18n');
      if (key) opt.textContent = t(key);
    });
  }

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'ru';
    localStorage.setItem(STORAGE_LANG, currentLang);
    applyStaticI18n();
    refreshServiceSelect();
    refreshComplexityUrgencyOptions();
    updateLangToggleUi();
    applyTheme(document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    updateQuantityUI();
    renderSelectedServices();
    calculatePrice();
  }

  function toggleLanguage() {
    applyLanguage(currentLang === 'ru' ? 'en' : 'ru');
  }

  function initLanguage() {
    const saved = localStorage.getItem(STORAGE_LANG);
    currentLang = saved === 'en' ? 'en' : 'ru';
    applyStaticI18n();
    refreshServiceSelect();
    refreshComplexityUrgencyOptions();
    updateLangToggleUi();
  }

  function getSelectedServiceOption() {
    return serviceType.options[serviceType.selectedIndex];
  }

  function getServiceDataFromOption(option) {
    const optKey = option.dataset.optKey || '';
    const pack = optionPack(optKey);
    const unitType = option.dataset.unitType || 'fixed';
    const title = pack ? pack.title : option.text.trim();
    const unitNote = pack ? pack.unitNote : (option.dataset.unitNote || '');
    const unitLabel = unitLabelFor(unitType);
    return {
      optKey: optKey,
      title: title,
      price: parseFloat(option.value) || 0,
      unitType: unitType,
      unitLabel: unitLabel,
      unitNote: unitNote,
      isFrom: option.dataset.isFrom === 'true',
      packageSize: parseFloat(option.dataset.packageSize || '1') || 1
    };
  }

  function getCurrentServiceData() {
    return getServiceDataFromOption(getSelectedServiceOption());
  }

  function getSelectedComplexityText() {
    return complexity.options[complexity.selectedIndex].text;
  }

  function getSelectedUrgencyText() {
    return urgency.options[urgency.selectedIndex].text;
  }

  function normalizeQuantity(value, unitType) {
    let quantity = parseFloat(value);
    if (isNaN(quantity) || quantity <= 0) quantity = 1;
    if (unitType === 'chars1000') return quantity;
    return Math.max(1, Math.round(quantity));
  }

  function getQuantityLabelByType(service) {
    switch (service.unitType) {
      case 'hour': return t('qty.hour');
      case 'piece': return t('qty.piece');
      case 'chars1000': return t('qty.chars1000');
      case 'story': return t('qty.story');
      case 'photo': return t('qty.photo');
      case 'package': return t('qty.pkg');
      default: return t('qty.def');
    }
  }

  function getQuantityHelpByType(service) {
    switch (service.unitType) {
      case 'hour': return t('qtyHelp.hour');
      case 'piece': return t('qtyHelp.piece');
      case 'chars1000': return t('qtyHelp.chars1000');
      case 'story': return t('qtyHelp.story');
      case 'photo': return t('qtyHelp.photo');
      case 'package': return t('qtyHelp.package').replace('{n}', String(service.packageSize));
      default: return t('qtyHelp.def');
    }
  }

  function displayServiceTitle(s) {
    const pack = s.optKey && optionPack(s.optKey);
    return pack ? pack.title : (s.fallbackTitle || '');
  }

  function displayServiceUnitNote(s) {
    const pack = s.optKey && optionPack(s.optKey);
    return pack ? pack.unitNote : (s.fallbackUnitNote || '');
  }

  function displayServiceUnitLabel(s) {
    return unitLabelFor(s.unitType) || s.fallbackUnitLabel || '';
  }

  function updateQuantityUI() {
    const service = getCurrentServiceData();
    serviceQuantityLabel.textContent = getQuantityLabelByType(service);
    serviceQuantityHelp.textContent = getQuantityHelpByType(service);
    serviceUnitNote.textContent = service.unitNote;
    serviceFromNote.textContent = service.isFrom ? t('tariffFrom') : t('tariffFixed');
  }

  function addServiceToList() {
    const option = getSelectedServiceOption();
    const service = getServiceDataFromOption(option);
    const quantity = normalizeQuantity(serviceQuantity.value, service.unitType);

    selectedServices.push({
      id: serviceIdCounter++,
      optKey: service.optKey,
      fallbackTitle: option.text.trim(),
      fallbackUnitNote: option.dataset.unitNote || '',
      fallbackUnitLabel: option.dataset.unitLabel || '',
      price: service.price,
      unitType: service.unitType,
      isFrom: service.isFrom,
      packageSize: service.packageSize,
      quantity: quantity
    });

    renderSelectedServices();
    calculatePrice();
  }

  function removeService(serviceId) {
    selectedServices = selectedServices.filter(function (item) {
      return item.id !== serviceId;
    });
    renderSelectedServices();
    calculatePrice();
  }

  function updateServiceQuantity(serviceId, newValue) {
    const service = selectedServices.find(function (item) {
      return item.id === serviceId;
    });
    if (!service) return;
    service.quantity = normalizeQuantity(newValue, service.unitType);
    renderSelectedServices();
    calculatePrice();
  }

  function getServiceCost(service) {
    return service.price * service.quantity;
  }

  function renderSelectedServices() {
    if (selectedServices.length === 0) {
      selectedServicesContainer.innerHTML =
        '<div class="empty-state" data-i18n="empty.noServices">' + t('empty.noServices') + '</div>';
      return;
    }

    const sc = dict().serviceCard;
    let html = '';

    selectedServices.forEach(function (service) {
      const cost = getServiceCost(service);
      const title = displayServiceTitle(service);
      const unitNote = displayServiceUnitNote(service);
      const unitLabel = displayServiceUnitLabel(service);
      const sub = unitNote + (service.isFrom ? sc.minPriceSuffix : '');

      html +=
        '<div class="service-item">' +
        '<div class="service-item-top">' +
        '<div>' +
        '<div class="service-item-title">' + escapeHtml(title) + '</div>' +
        '<div class="service-item-subtitle">' + escapeHtml(sub) + '</div>' +
        '</div>' +
        '<button type="button" class="btn-delete" onclick="removeServiceById(' + service.id + ')">' +
        escapeHtml(sc.delete) +
        '</button>' +
        '</div>' +
        '<div class="service-item-grid">' +
        '<div class="field">' +
        '<label>' + escapeHtml(sc.ratePerUnit) + '</label>' +
        '<input type="text" value="' + escapeHtml(formatPrice(service.price)) + '" disabled />' +
        '</div>' +
        '<div class="field">' +
        '<label>' + escapeHtml(getQuantityLabelByType(service)) + '</label>' +
        '<input type="number" min="1" step="' +
        (service.unitType === 'chars1000' ? '0.1' : '1') + '" value="' +
        service.quantity +
        '" oninput="updateServiceQuantityById(' + service.id + ', this.value)" />' +
        '</div>' +
        '<div class="field">' +
        '<label>' + escapeHtml(sc.billingUnit) + '</label>' +
        '<input type="text" value="' + escapeHtml(unitLabel) + '" disabled />' +
        '</div>' +
        '</div>' +
        '<div class="service-item-total">' +
        '<span>' + escapeHtml(sc.lineTotal) + '</span>' +
        '<strong>' + escapeHtml(formatPrice(cost)) + '</strong>' +
        '</div>' +
        '</div>';
    });

    selectedServicesContainer.innerHTML = html;
  }

  function getOptionsTotal() {
    let total = 0;
    optionCheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) total += parseFloat(checkbox.dataset.price) || 0;
    });
    return total;
  }

  function getSelectedOptionsText() {
    const selectedOptions = [];
    optionCheckboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        const label = document.querySelector('label[for="' + checkbox.id + '"]');
        if (label) selectedOptions.push(label.textContent.trim());
      }
    });
    return selectedOptions.length ? selectedOptions : [t('optionsNone')];
  }

  function buildSelectedServicesSummary(rawTotal, autoDiscountAmount) {
    if (selectedServices.length === 0) {
      selectedSummaryList.textContent = t('summary.empty');
      return;
    }

    const sm = dict().summary;
    let html = '<strong>' + escapeHtml(sm.listTitle) + '</strong><br>';

    selectedServices.forEach(function (service, index) {
      const title = displayServiceTitle(service);
      const unitLabel = displayServiceUnitLabel(service);
      html +=
        (index + 1) + '. ' +
        escapeHtml(title) + ' — ' +
        service.quantity + ' × ' + escapeHtml(unitLabel) +
        ' = <strong>' + escapeHtml(formatPrice(getServiceCost(service))) + '</strong><br>';
    });

    html += '<br><strong>' + escapeHtml(sm.subtotalBefore) + ' ' + escapeHtml(formatPrice(rawTotal)) + '</strong>';

    if (autoDiscountAmount > 0) {
      html += '<br><strong>' + escapeHtml(sm.autoApplied) + '</strong>';
    }

    selectedSummaryList.innerHTML = html;
  }

  function calculatePrice() {
    const rawServicesTotal = selectedServices.reduce(function (sum, service) {
      return sum + getServiceCost(service);
    }, 0);

    const complexityValue = parseFloat(complexity.value) || 1;
    const urgencyValue = parseFloat(urgency.value) || 1;
    const calculatedServicesTotal = rawServicesTotal * complexityValue * urgencyValue;

    const optionsTotal = getOptionsTotal();
    const autoDiscountBase = calculatedServicesTotal + optionsTotal;

    const autoDiscountAmount =
      autoDiscountBase > AUTO_DISCOUNT_THRESHOLD
        ? autoDiscountBase * (AUTO_DISCOUNT_PERCENT / 100)
        : 0;

    const afterAutoDiscount = autoDiscountBase - autoDiscountAmount;

    const extraHoursValue = parseFloat(extraHours.value) || 0;
    const hourRateValue = parseFloat(hourRate.value) || 0;
    const extraHoursTotal = extraHoursValue * hourRateValue;

    const subtotalAfterAutoDiscount = afterAutoDiscount + extraHoursTotal;

    const manualDiscountPercent = parseFloat(discount.value) || 0;
    const manualDiscountAmount = subtotalAfterAutoDiscount * (manualDiscountPercent / 100);

    const finalTotal = subtotalAfterAutoDiscount - manualDiscountAmount;

    totalPrice.textContent = formatPrice(finalTotal);
    servicesRawTotalLabel.textContent = formatPrice(rawServicesTotal);
    complexityLabel.textContent = 'x' + complexityValue;
    urgencyLabel.textContent = 'x' + urgencyValue;
    servicesCalculatedTotalLabel.textContent = formatPrice(calculatedServicesTotal);
    optionsLabel.textContent = formatPrice(optionsTotal);
    autoDiscountBaseLabel.textContent = formatPrice(autoDiscountBase);
    autoDiscountLabel.textContent = '- ' + formatPrice(autoDiscountAmount);
    afterAutoDiscountLabel.textContent = formatPrice(afterAutoDiscount);
    extraHoursLabel.textContent = formatPrice(extraHoursTotal);
    discountLabel.textContent = '- ' + formatPrice(manualDiscountAmount);

    const rn = dict().result;
    resultNote.textContent =
      autoDiscountAmount > 0 ? rn.noteActive : rn.noteDefault;

    buildSelectedServicesSummary(rawServicesTotal, autoDiscountAmount);

    buildSummaryText(
      rawServicesTotal,
      calculatedServicesTotal,
      optionsTotal,
      autoDiscountBase,
      autoDiscountAmount,
      afterAutoDiscount,
      extraHoursTotal,
      manualDiscountPercent,
      manualDiscountAmount,
      finalTotal
    );
  }

  function buildSummaryText(
    rawServicesTotal,
    calculatedServicesTotal,
    optionsTotal,
    autoDiscountBase,
    autoDiscountAmount,
    afterAutoDiscount,
    extraHoursTotal,
    manualDiscountPercent,
    manualDiscountAmount,
    finalTotal
  ) {
    const sd = dict().summaryDoc;
    const nameValue = clientName.value.trim() || sd.na;
    const commentValue = projectComment.value.trim() || sd.naF;
    const optionsText = getSelectedOptionsText().join(', ');

    let servicesText = '';

    if (selectedServices.length === 0) {
      servicesText = sd.none;
    } else {
      selectedServices.forEach(function (service, index) {
        const title = displayServiceTitle(service);
        const unitLabel = displayServiceUnitLabel(service);
        const unitNote = displayServiceUnitNote(service);
        servicesText +=
          (index + 1) + ') ' +
          title +
          '\n' +
          '   ' +
          sd.lineRate +
          ' ' +
          formatPrice(service.price) +
          '\n' +
          '   ' +
          sd.lineQty +
          ' ' +
          service.quantity +
          ' (' +
          unitLabel +
          ')\n' +
          '   ' +
          sd.lineFormat +
          ' ' +
          unitNote +
          '\n' +
          '   ' +
          sd.lineCost +
          ' ' +
          formatPrice(getServiceCost(service)) +
          '\n';
      });
    }

    const autoDiscountText = autoDiscountAmount > 0 ? sd.autoYes : sd.autoNo;

    const summaryText =
      sd.header +
      '\n\n' +
      sd.client +
      ' ' +
      nameValue +
      '\n\n' +
      sd.services +
      '\n' +
      servicesText +
      '\n' +
      sd.rawTotal +
      ' ' +
      formatPrice(rawServicesTotal) +
      '\n' +
      sd.complexity +
      ' ' +
      getSelectedComplexityText() +
      '\n' +
      sd.urgency +
      ' ' +
      getSelectedUrgencyText() +
      '\n' +
      sd.afterCoeffs +
      ' ' +
      formatPrice(calculatedServicesTotal) +
      '\n' +
      sd.addOns +
      ' ' +
      optionsText +
      '\n' +
      sd.addOnsCost +
      ' ' +
      formatPrice(optionsTotal) +
      '\n' +
      sd.autoBase +
      ' ' +
      formatPrice(autoDiscountBase) +
      '\n' +
      sd.autoLine +
      ' ' +
      autoDiscountText +
      '\n' +
      sd.autoAmt +
      ' ' +
      formatPrice(autoDiscountAmount) +
      '\n' +
      sd.afterAuto +
      ' ' +
      formatPrice(afterAutoDiscount) +
      '\n' +
      sd.extraH +
      ' ' +
      extraHours.value +
      '\n' +
      sd.hourRate +
      ' ' +
      formatPrice(parseFloat(hourRate.value) || 0) +
      '\n' +
      sd.extraCost +
      ' ' +
      formatPrice(extraHoursTotal) +
      '\n' +
      sd.manualPct +
      ' ' +
      manualDiscountPercent +
      '%\n' +
      sd.manualAmt +
      ' ' +
      formatPrice(manualDiscountAmount) +
      '\n' +
      sd.comment +
      ' ' +
      commentValue +
      '\n\n' +
      sd.final +
      ' ' +
      formatPrice(finalTotal);

    summaryBox.textContent = summaryText;
  }

  function resetCalculator() {
    selectedServices = [];
    serviceIdCounter = 1;

    serviceType.selectedIndex = 0;
    serviceQuantity.value = 1;
    complexity.selectedIndex = 0;
    urgency.selectedIndex = 0;
    extraHours.value = 0;
    hourRate.value = 2500;
    discount.value = 0;
    clientName.value = '';
    projectComment.value = '';

    optionCheckboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });

    updateQuantityUI();
    renderSelectedServices();
    calculatePrice();
  }

  function copySummary() {
    const text = summaryBox.textContent;

    navigator.clipboard.writeText(text).then(
      function () {
        copySummaryBtn.textContent = t('btn.copied');
        setTimeout(function () {
          copySummaryBtn.textContent = t('btn.copy');
        }, 1500);
      },
      function () {
        alert(t('copyFail'));
      }
    );
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  window.removeServiceById = function (serviceId) {
    removeService(serviceId);
  };

  window.updateServiceQuantityById = function (serviceId, value) {
    updateServiceQuantity(serviceId, value);
  };

  serviceType.addEventListener('change', updateQuantityUI);
  addServiceBtn.addEventListener('click', addServiceToList);

  complexity.addEventListener('change', calculatePrice);
  urgency.addEventListener('change', calculatePrice);
  extraHours.addEventListener('input', calculatePrice);
  hourRate.addEventListener('input', calculatePrice);
  discount.addEventListener('input', calculatePrice);
  clientName.addEventListener('input', calculatePrice);
  projectComment.addEventListener('input', calculatePrice);

  optionCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', calculatePrice);
  });

  copySummaryBtn.addEventListener('click', copySummary);
  resetBtn.addEventListener('click', resetCalculator);
  themeToggleBtn.addEventListener('click', toggleTheme);
  langToggleBtn.addEventListener('click', toggleLanguage);

  initLanguage();
  initTheme();
  updateQuantityUI();
  renderSelectedServices();
  calculatePrice();
})();
