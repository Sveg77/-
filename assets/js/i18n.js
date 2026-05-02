/**
 * Словари интерфейса (RU / EN) для калькулятора и лендинга.
 * Подключается до calculator.js.
 */
window.CALC_I18N = {
  ru: {
    pageTitle: 'Калькулятор услуг специалиста по нейросетям',
    theme: { dark: '🌙 Тёмная тема', light: '☀️ Светлая тема', ariaDark: 'Включить тёмную тему', ariaLight: 'Включить светлую тему' },
    lang: { switchToEn: 'EN', switchToRu: 'RU', ariaToEn: 'Переключить на английский', ariaToRu: 'Переключить на русский' },
    landing: {
      title: 'Специалист по нейросетям для бизнеса',
      subtitle: 'Помогаю внедрять ИИ в маркетинг, контент и продажи: от консультаций до готовых воронок, GPT-ассистентов и полного ведения соцсетей. Ниже можно сразу посчитать стоимость проекта.',
      card1Title: 'Быстрый старт',
      card1Text: 'Первая консультация до 15 минут бесплатно, чтобы определить формат работы.',
      card2Title: 'Прозрачная стоимость',
      card2Text: 'Калькулятор считает услуги, коэффициенты сложности и скидки в реальном времени.',
      card3Title: 'Результат под нишу',
      card3Text: 'Решения адаптируются под вашу аудиторию, задачи и текущий этап бизнеса.',
      cta: 'Перейти к калькулятору',
      ctaNote: 'Нажмите кнопку, чтобы перейти к расчёту проекта'
    },
    calc: {
      title: 'Калькулятор услуг специалиста по нейросетям',
      introHtml: 'Версия с выбором нескольких основных услуг и автоматической скидкой: если сумма <strong>основных услуг после коэффициентов + доп. опции</strong> превышает <strong>20 000 ₽</strong>, применяется <strong>скидка 10%</strong>.'
    },
    section1: { title: '1. Добавление основных услуг' },
    section2: { title: '2. Общие коэффициенты для проекта' },
    section3: { title: '3. Дополнительные опции' },
    section4: { title: '4. Доработки и ручная скидка' },
    section5: { title: '5. Данные клиента' },
    label: {
      service: 'Выберите услугу',
      complexity: 'Уровень сложности',
      urgency: 'Срочность выполнения',
      extraHours: 'Дополнительные часы работ',
      hourRate: 'Стоимость 1 часа доработок (₽)',
      discount: 'Дополнительная ручная скидка (%)',
      clientName: 'Имя клиента / компания',
      projectComment: 'Комментарий к задаче'
    },
    placeholder: {
      clientName: 'Например: ООО Ромашка',
      projectComment: 'Например: нужно 3 часа консультации, 2 креатива и оформление Telegram-аккаунта'
    },
    helper: {
      pickService: 'Выбери услугу, укажи количество и нажми кнопку «Добавить услугу в расчёт».',
      manualDiscount: 'Эта скидка применяется отдельно после автоматической скидки 10%, если она сработала.'
    },
    meta: { priceFormat: 'Формат цены', tariffType: 'Тип тарифа' },
    tariffFrom: 'Минимальная цена из прайса',
    tariffFixed: 'Фиксированная стоимость из прайса',
    btn: {
      addService: 'Добавить услугу в расчёт',
      copy: 'Копировать заявку',
      reset: 'Сбросить',
      copied: 'Скопировано'
    },
    empty: { noServices: 'Пока ни одна основная услуга не добавлена.' },
    complexity: {
      '1': 'Базовый — x1.0',
      '13': 'Средний — x1.3',
      '17': 'Продвинутый — x1.7',
      '22': 'Экспертный — x2.2'
    },
    urgency: {
      '1': 'Стандартные сроки — x1.0',
      '12': 'Срочно (3–5 дней) — x1.2',
      '15': 'Очень срочно (1–2 дня) — x1.5'
    },
    option: {
      training: 'Обучение команды работе с ИИ +5 000 ₽',
      docs: 'Подготовка документации +3 000 ₽',
      support: 'Поддержка 30 дней +7 000 ₽',
      integration: 'Интеграция с CRM / Telegram / сайтом +10 000 ₽',
      analytics: 'Аналитика и рекомендации +4 000 ₽',
      branding: 'Кастомизация под бренд +2 500 ₽'
    },
    result: {
      title: 'Итоговый расчёт',
      noteDefault: 'Автоматическая скидка 10% применяется, если сумма услуг после коэффициентов вместе с доп. опциями превышает 20 000 ₽.',
      noteActive: 'Автоматическая скидка 10% применена, так как сумма услуг с учётом доп. опций превышает 20 000 ₽.'
    },
    breakdown: {
      servicesRaw: 'Сумма по основным услугам',
      complexity: 'Коэффициент сложности',
      urgency: 'Коэффициент срочности',
      afterCoeffs: 'После коэффициентов',
      options: 'Доп. опции',
      autoBase: 'Сумма для автоскидки',
      autoDiscount: 'Автоматическая скидка 10%',
      afterAuto: 'После автоскидки',
      extra: 'Доработки',
      manual: 'Ручная скидка'
    },
    summary: {
      empty: 'Основные услуги пока не выбраны.',
      placeholder: 'Здесь появится текст заявки для отправки клиенту.',
      listTitle: 'Выбранные основные услуги:',
      subtotalBefore: 'Итого по услугам до коэффициентов:',
      autoApplied: 'Автоматическая скидка 10% применена'
    },
    footer: {
      note: 'Подходит для Tilda, HTML-блоков, лендингов, Taplink и любых онлайн-конструкторов, где можно вставить HTML + CSS + JS.'
    },
    qty: {
      hour: 'Количество часов',
      piece: 'Количество штук',
      chars1000: 'Количество блоков по 1000 знаков',
      story: 'Количество сториз',
      photo: 'Количество фото',
      pkg: 'Количество пакетов',
      def: 'Количество услуг'
    },
    qtyHelp: {
      hour: 'Например: 2, 3, 5 часов консультации.',
      piece: 'Например: число креативов, видео, карточек или иллюстраций.',
      chars1000: 'Например: 3 = это 3000 знаков, 5 = это 5000 знаков.',
      story: 'Укажи нужное количество сториз.',
      photo: 'Укажи число фотографий.',
      package: '1 пакет = {n} ед. Укажи количество пакетов.',
      def: 'Для обычной фиксированной услуги чаще всего ставят 1.'
    },
    serviceCard: {
      delete: 'Удалить',
      ratePerUnit: 'Тариф за единицу',
      billingUnit: 'Единица расчёта',
      lineTotal: 'Стоимость этой услуги',
      minPriceSuffix: ' • минимальная цена из прайса'
    },
    optionsNone: 'без дополнительных опций',
    summaryDoc: {
      header: 'Заявка на расчёт услуг специалиста по нейросетям',
      client: 'Клиент:',
      services: 'Основные услуги:',
      none: 'Основные услуги не выбраны',
      lineRate: '   Тариф за единицу:',
      lineQty: '   Количество:',
      lineFormat: '   Формат цены:',
      lineCost: '   Стоимость услуги:',
      rawTotal: 'Итого по основным услугам:',
      complexity: 'Сложность:',
      urgency: 'Срочность:',
      afterCoeffs: 'Сумма после коэффициентов:',
      addOns: 'Дополнительные опции:',
      addOnsCost: 'Стоимость доп. опций:',
      autoBase: 'Сумма для автоскидки:',
      autoLine: 'Автоматическая скидка 10%:',
      autoYes: 'применена',
      autoNo: 'не применена',
      autoAmt: 'Размер автоскидки:',
      afterAuto: 'Сумма после автоскидки:',
      extraH: 'Доп. часы:',
      hourRate: 'Ставка за час доработок:',
      extraCost: 'Стоимость доработок:',
      manualPct: 'Ручная скидка:',
      manualAmt: 'Размер ручной скидки:',
      comment: 'Комментарий:',
      final: 'Итоговая стоимость:',
      na: 'не указано',
      naF: 'не указан'
    },
    copyFail: 'Не удалось скопировать текст. Скопируй вручную.',
    groups: {
      og_consult: 'Консультации',
      og_content: 'Контент и маркетинг',
      og_media: 'Мультимедиа и дизайн',
      og_smm: 'Полное ведение соцсетей'
    },
    units: {
      fixed: 'услуга',
      hour: 'час',
      piece: 'штука',
      chars1000: '1000 знаков',
      story: 'сториз',
      photo: 'фото',
      package: 'пакет'
    },
    options: {
      opt_consult_free: { title: 'Первая консультация (строго до 15 минут) — Бесплатно', unitNote: 'Фиксированная цена' },
      opt_consult_hour: { title: 'Консультация по возможностям применения нейросетей в нише клиента — 2000 ₽/час', unitNote: 'Цена указана за 1 час' },
      opt_train_chatgpt: { title: 'Обучение ChatGPT под нишу клиента — от 10 000 ₽', unitNote: 'Стартовая цена' },
      opt_unpack: { title: 'Проведение распаковки личности — от 15 000 ₽', unitNote: 'Стартовая цена' },
      opt_audience: { title: 'Изучение целевой аудитории — от 20 000 ₽', unitNote: 'Стартовая цена' },
      opt_competitors: { title: 'Проведение конкурентного анализа и выделение УТП клиента — от 3000 ₽', unitNote: 'Стартовая цена' },
      opt_content_plan_1: { title: 'Составление контент-плана для одной соцсети — от 5000 ₽', unitNote: 'Стартовая цена' },
      opt_content_plan_all: { title: 'Составление контент-плана для всех соцсетей — от 15 000 ₽', unitNote: 'Стартовая цена' },
      opt_texts_prompts: { title: 'Создание текстов на основе готовых промптов — от 1000 ₽ / 1000 знаков', unitNote: 'Цена указана за 1000 знаков' },
      opt_texts_selling: { title: 'Создание продающих текстов для любой ниши — от 1000 ₽ / 1000 знаков', unitNote: 'Цена указана за 1000 знаков' },
      opt_funnel: { title: 'Создание эффективной воронки продаж — от 30 000 ₽', unitNote: 'Стартовая цена' },
      opt_warmup: { title: 'Создание прогрева для продажи товара/услуги — от 15 000 ₽', unitNote: 'Стартовая цена' },
      opt_landing: { title: 'Создание структуры продающего лендинга (+ сам сайт) — 15 000 ₽', unitNote: 'Фиксированная цена' },
      opt_video_script_1: { title: 'Написание сценариев для коротких видеороликов (1 шт.) — 800 ₽', unitNote: 'Цена указана за 1 штуку' },
      opt_video_script_10: { title: 'Написание сценариев для коротких видеороликов (10 шт.) — 6000 ₽', unitNote: 'Фиксированная цена за пакет из 10 штук' },
      opt_story_5: { title: 'Сторителлинг (5 сториз) — 5000 ₽', unitNote: 'Фиксированная цена за пакет из 5 сториз' },
      opt_story_6plus: { title: 'Сторителлинг (от 6 сториз) — 800 ₽ / 1 шт.', unitNote: 'Цена указана за 1 сториз' },
      opt_prompts_pack: { title: 'Создание промптов для любой ниши (пакет 5 промптов) — от 10 000 ₽', unitNote: 'Стартовая цена за пакет из 5 промптов' },
      opt_gpts: { title: 'Создание GPTs-агентов (помощников) для любой ниши — от 10 000 ₽', unitNote: 'Стартовая цена' },
      opt_photo_1: { title: 'Нейрофотосессия (1 фото) — 350 ₽', unitNote: 'Цена указана за 1 фото' },
      opt_photo_10: { title: 'Нейрофотосессия (10 фото) — 3000 ₽', unitNote: 'Фиксированная цена за пакет из 10 фото' },
      opt_avatar: { title: 'Создание цифрового аватара — 5000 ₽', unitNote: 'Фиксированная цена' },
      opt_creatives: { title: 'Создание креативов для таргетированной рекламы — от 600 ₽ / шт.', unitNote: 'Цена указана за 1 штуку' },
      opt_illustrations: { title: 'Создание иллюстраций — от 800 ₽ / шт.', unitNote: 'Цена указана за 1 штуку' },
      opt_video: { title: 'Создание видео, нейроклипов — от 1000 ₽ / шт.', unitNote: 'Цена указана за 1 штуку' },
      opt_music: { title: 'Создание музыки — от 1000 ₽', unitNote: 'Стартовая цена' },
      opt_logo: { title: 'Создание логотипа — от 6000 ₽', unitNote: 'Стартовая цена' },
      opt_mp_cards: { title: 'Создание карточек для маркетплейсов — от 500 ₽ / шт.', unitNote: 'Цена указана за 1 штуку' },
      opt_vk_page: { title: 'Оформление личной страницы ВКонтакте — от 2000 ₽', unitNote: 'Стартовая цена' },
      opt_account_design: { title: 'Оформление 1 аккаунта в ВКонтакте / Instagram / Telegram — от 3000 ₽', unitNote: 'Стартовая цена' },
      opt_animation: { title: 'Анимация картинок, обработка текста — от 1000 ₽', unitNote: 'Стартовая цена' },
      opt_forms_pdf: { title: 'Создание анкет, опросников, PDF-презентаций по готовому тексту — от 2000 ₽', unitNote: 'Стартовая цена' },
      opt_hashtags: { title: 'Анализ и подбор целевых хештегов — от 800 ₽', unitNote: 'Стартовая цена' },
      opt_account_full: { title: 'Создание 1 аккаунта с нуля с полным комплексом услуг — 70 000 ₽', unitNote: 'Фиксированная цена' },
      opt_smm_full: { title: 'Полное ведение 1 аккаунта любой соцсети — от 40 000 ₽', unitNote: 'Стартовая цена' }
    }
  },
  en: {
    pageTitle: 'AI services calculator',
    theme: { dark: '🌙 Dark theme', light: '☀️ Light theme', ariaDark: 'Switch to dark theme', ariaLight: 'Switch to light theme' },
    lang: { switchToEn: 'EN', switchToRu: 'RU', ariaToEn: 'Switch to English', ariaToRu: 'Switch to Russian' },
    landing: {
      title: 'AI specialist for your business',
      subtitle: 'I help teams adopt AI in marketing, content, and sales: from consultations to full funnels, GPT assistants, and end-to-end social media management. Below you can estimate the project budget right away.',
      card1Title: 'Quick start',
      card1Text: 'The first consultation up to 15 minutes is free to align on the best format.',
      card2Title: 'Transparent pricing',
      card2Text: 'The calculator updates services, complexity multipliers, and discounts in real time.',
      card3Title: 'Tailored to your niche',
      card3Text: 'Solutions adapt to your audience, goals, and current business stage.',
      cta: 'Open the calculator',
      ctaNote: 'Use the button to jump to the estimate'
    },
    calc: {
      title: 'AI services calculator',
      introHtml: 'Pick multiple core services with an automatic discount: if the total of <strong>core services after multipliers + add-ons</strong> exceeds <strong>RUB 20,000</strong>, a <strong>10% discount</strong> applies.'
    },
    section1: { title: '1. Add core services' },
    section2: { title: '2. Project multipliers' },
    section3: { title: '3. Add-ons' },
    section4: { title: '4. Extra hours & manual discount' },
    section5: { title: '5. Client details' },
    label: {
      service: 'Choose a service',
      complexity: 'Complexity level',
      urgency: 'Delivery urgency',
      extraHours: 'Additional work hours',
      hourRate: 'Hourly rate for extras (RUB)',
      discount: 'Manual discount (%)',
      clientName: 'Client / company name',
      projectComment: 'Project notes'
    },
    placeholder: {
      clientName: 'e.g. Acme LLC',
      projectComment: 'e.g. 3 hours of consulting, 2 ad creatives, Telegram profile design'
    },
    helper: {
      pickService: 'Select a service, set quantity, then click “Add service to estimate”.',
      manualDiscount: 'This discount applies separately after the automatic 10% discount when it triggers.'
    },
    meta: { priceFormat: 'Pricing format', tariffType: 'Rate type' },
    tariffFrom: 'Minimum list price',
    tariffFixed: 'Fixed list price',
    btn: {
      addService: 'Add service to estimate',
      copy: 'Copy request',
      reset: 'Reset',
      copied: 'Copied'
    },
    empty: { noServices: 'No core services added yet.' },
    complexity: {
      '1': 'Basic — x1.0',
      '13': 'Standard — x1.3',
      '17': 'Advanced — x1.7',
      '22': 'Expert — x2.2'
    },
    urgency: {
      '1': 'Standard timeline — x1.0',
      '12': 'Rush (3–5 days) — x1.2',
      '15': 'Very urgent (1–2 days) — x1.5'
    },
    option: {
      training: 'Team AI training +5,000 ₽',
      docs: 'Documentation pack +3,000 ₽',
      support: '30-day support +7,000 ₽',
      integration: 'CRM / Telegram / site integration +10,000 ₽',
      analytics: 'Analytics & recommendations +4,000 ₽',
      branding: 'Brand customization +2,500 ₽'
    },
    result: {
      title: 'Estimate summary',
      noteDefault: 'A 10% auto-discount applies if services after multipliers plus add-ons exceed RUB 20,000.',
      noteActive: 'A 10% auto-discount is applied because services plus add-ons exceed RUB 20,000.'
    },
    breakdown: {
      servicesRaw: 'Core services subtotal',
      complexity: 'Complexity multiplier',
      urgency: 'Urgency multiplier',
      afterCoeffs: 'After multipliers',
      options: 'Add-ons',
      autoBase: 'Auto-discount base',
      autoDiscount: 'Automatic 10% discount',
      afterAuto: 'After auto-discount',
      extra: 'Extra work',
      manual: 'Manual discount'
    },
    summary: {
      empty: 'No core services selected yet.',
      placeholder: 'The client-ready request text will appear here.',
      listTitle: 'Selected core services:',
      subtotalBefore: 'Subtotal before multipliers:',
      autoApplied: '10% automatic discount applied'
    },
    footer: {
      note: 'Works with Tilda, raw HTML blocks, landing builders, Taplink, and any platform that allows HTML + CSS + JS.'
    },
    qty: {
      hour: 'Hours',
      piece: 'Units',
      chars1000: 'Blocks of 1,000 characters',
      story: 'Stories',
      photo: 'Photos',
      pkg: 'Packages',
      def: 'Quantity'
    },
    qtyHelp: {
      hour: 'Example: 2, 3, or 5 consultation hours.',
      piece: 'Example: number of creatives, videos, cards, or illustrations.',
      chars1000: 'Example: 3 means ~3,000 characters; 5 means ~5,000.',
      story: 'Enter the number of stories you need.',
      photo: 'Enter the number of photos.',
      package: '1 package = {n} units. Enter the number of packages.',
      def: 'Fixed services usually use 1.'
    },
    serviceCard: {
      delete: 'Remove',
      ratePerUnit: 'Rate per unit',
      billingUnit: 'Billing unit',
      lineTotal: 'Line total',
      minPriceSuffix: ' • minimum list price'
    },
    optionsNone: 'no add-ons selected',
    summaryDoc: {
      header: 'AI services estimate request',
      client: 'Client:',
      services: 'Core services:',
      none: 'No core services selected',
      lineRate: '   Rate per unit:',
      lineQty: '   Quantity:',
      lineFormat: '   Pricing format:',
      lineCost: '   Line total:',
      rawTotal: 'Core services total:',
      complexity: 'Complexity:',
      urgency: 'Urgency:',
      afterCoeffs: 'Total after multipliers:',
      addOns: 'Add-ons:',
      addOnsCost: 'Add-ons cost:',
      autoBase: 'Auto-discount base:',
      autoLine: 'Automatic 10% discount:',
      autoYes: 'applied',
      autoNo: 'not applied',
      autoAmt: 'Auto-discount amount:',
      afterAuto: 'Total after auto-discount:',
      extraH: 'Extra hours:',
      hourRate: 'Hourly rate (extras):',
      extraCost: 'Extra work cost:',
      manualPct: 'Manual discount:',
      manualAmt: 'Manual discount amount:',
      comment: 'Notes:',
      final: 'Final total:',
      na: 'not provided',
      naF: 'not provided'
    },
    copyFail: 'Could not copy. Please copy manually.',
    groups: {
      og_consult: 'Consultations',
      og_content: 'Content & marketing',
      og_media: 'Media & design',
      og_smm: 'Full social media management'
    },
    units: {
      fixed: 'service',
      hour: 'hour',
      piece: 'unit',
      chars1000: '1,000 characters',
      story: 'story',
      photo: 'photo',
      package: 'package'
    },
    options: {
      opt_consult_free: { title: 'First consultation (up to 15 minutes) — Free', unitNote: 'Fixed price' },
      opt_consult_hour: { title: 'Consultation on AI use cases for your niche — 2,000 ₽/hour', unitNote: 'Price per hour' },
      opt_train_chatgpt: { title: 'ChatGPT training tailored to your niche — from 10,000 ₽', unitNote: 'Starting price' },
      opt_unpack: { title: 'Personal brand positioning session — from 15,000 ₽', unitNote: 'Starting price' },
      opt_audience: { title: 'Target audience research — from 20,000 ₽', unitNote: 'Starting price' },
      opt_competitors: { title: 'Competitor analysis & USP — from 3,000 ₽', unitNote: 'Starting price' },
      opt_content_plan_1: { title: 'Content plan for one social network — from 5,000 ₽', unitNote: 'Starting price' },
      opt_content_plan_all: { title: 'Content plan for all social networks — from 15,000 ₽', unitNote: 'Starting price' },
      opt_texts_prompts: { title: 'Copy from ready-made prompts — from 1,000 ₽ / 1,000 characters', unitNote: 'Per 1,000 characters' },
      opt_texts_selling: { title: 'Sales copy for any niche — from 1,000 ₽ / 1,000 characters', unitNote: 'Per 1,000 characters' },
      opt_funnel: { title: 'Sales funnel design — from 30,000 ₽', unitNote: 'Starting price' },
      opt_warmup: { title: 'Warm-up sequence for a product/service — from 15,000 ₽', unitNote: 'Starting price' },
      opt_landing: { title: 'High-converting landing structure (+ site) — 15,000 ₽', unitNote: 'Fixed price' },
      opt_video_script_1: { title: 'Short video scripts (1 pc.) — 800 ₽', unitNote: 'Per unit' },
      opt_video_script_10: { title: 'Short video scripts (10 pc.) — 6,000 ₽', unitNote: 'Fixed pack of 10' },
      opt_story_5: { title: 'Storytelling (5 stories) — 5,000 ₽', unitNote: 'Fixed pack of 5 stories' },
      opt_story_6plus: { title: 'Storytelling (6+ stories) — 800 ₽ each', unitNote: 'Per story' },
      opt_prompts_pack: { title: 'Niche prompt pack (5 prompts) — from 10,000 ₽', unitNote: 'Starting price for 5 prompts' },
      opt_gpts: { title: 'Custom GPT assistants for any niche — from 10,000 ₽', unitNote: 'Starting price' },
      opt_photo_1: { title: 'AI photo session (1 photo) — 350 ₽', unitNote: 'Per photo' },
      opt_photo_10: { title: 'AI photo session (10 photos) — 3,000 ₽', unitNote: 'Fixed pack of 10 photos' },
      opt_avatar: { title: 'Digital avatar creation — 5,000 ₽', unitNote: 'Fixed price' },
      opt_creatives: { title: 'Paid social ad creatives — from 600 ₽ / unit', unitNote: 'Per unit' },
      opt_illustrations: { title: 'Illustrations — from 800 ₽ / unit', unitNote: 'Per unit' },
      opt_video: { title: 'Video & AI clips — from 1,000 ₽ / unit', unitNote: 'Per unit' },
      opt_music: { title: 'Music creation — from 1,000 ₽', unitNote: 'Starting price' },
      opt_logo: { title: 'Logo design — from 6,000 ₽', unitNote: 'Starting price' },
      opt_mp_cards: { title: 'Marketplace product cards — from 500 ₽ / unit', unitNote: 'Per unit' },
      opt_vk_page: { title: 'VK personal page styling — from 2,000 ₽', unitNote: 'Starting price' },
      opt_account_design: { title: 'One social profile design (VK / Instagram / Telegram) — from 3,000 ₽', unitNote: 'Starting price' },
      opt_animation: { title: 'Image animation & text polish — from 1,000 ₽', unitNote: 'Starting price' },
      opt_forms_pdf: { title: 'Forms, surveys, PDF decks from your text — from 2,000 ₽', unitNote: 'Starting price' },
      opt_hashtags: { title: 'Hashtag research — from 800 ₽', unitNote: 'Starting price' },
      opt_account_full: { title: 'New account from scratch (full bundle) — 70,000 ₽', unitNote: 'Fixed price' },
      opt_smm_full: { title: 'Full management of one social account — from 40,000 ₽', unitNote: 'Starting price' }
    }
  }
};
