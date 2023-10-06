import {
  CodingLevelConstant,
  creativityConstant,
  faqTypeConstant,
  inputFieldTypeConstant,
  modeStatusConstant,
  openAiModelConstant,
  openAiToneOfVoiceConstant,
  packageTypeConstant,
  statusOnOffConstant,
} from '../helpers/coreConstant';

export const CommonSettingsSlugs = [
  'site_name',
  'site_url',
  'site_email',
  'default_country',
  'default_currency',
  'registration_status',
  'free_usage_word_upon_registration',
  'free_usage_image_upon_registration',
  'social_login_facebook_status',
  'social_login_google_status',
  'meta_title',
  'meta_description',
  'meta_keywords',
  'site_logo',
  'site_fav_icon',
  'google_auth_client_id',
];

export const GeneralSettingsSlugs = [
  'site_name',
  'site_url',
  'site_email',
  'default_country',
  'default_currency',
  'registration_status',
  'free_usage_word_upon_registration',
  'free_usage_image_upon_registration',
  'social_login_facebook_status',
  'social_login_google_status',
  'google_analytics_tracking_id',
  'meta_title',
  'meta_description',
  'meta_keywords',
  'site_logo',
  'site_fav_icon',
];

export const SMTPSettingsSlugs = [
  'mail_driver',
  'smtp_host',
  'smtp_port',
  'smtp_user_name',
  'smtp_password',
  'smtp_sender_email',
  'smtp_sender_name',
  'smtp_encryption',
];

export const TermsConditionSlugs = ['privacy_policy', 'terms_condition'];

export const OpenAISettingSlugs = [
  'open_ai_secret',
  'open_ai_model',
  'open_ai_temperature',
  'open_ai_max_output_length',
  'open_ai_max_token',
];

export const OpenAISettingWithoutSecretSlugs = [
  'open_ai_model',
  'open_ai_temperature',
  'open_ai_default_language',
  'open_ai_max_output_length',
  'open_ai_max_token',
];

export const OpenAiModelKeyArray = [
  openAiModelConstant.CHAT_GPT_ONE,
  openAiModelConstant.CHAT_GPT_TWO,
  openAiModelConstant.CHAT_GPT_THREE,
  openAiModelConstant.CHAT_GPT_FOUR,
];

export const OpenAiToneOfVoiceKeyArray = [
  openAiToneOfVoiceConstant.PROFESSIONAL,
  openAiToneOfVoiceConstant.FUNNY,
  openAiToneOfVoiceConstant.CASUAL,
  openAiToneOfVoiceConstant.EXCITED,
  openAiToneOfVoiceConstant.WITTY,
  openAiToneOfVoiceConstant.SARCASTIC,
  openAiToneOfVoiceConstant.FEMININE,
  openAiToneOfVoiceConstant.MASCULINE,
  openAiToneOfVoiceConstant.BOLD,
  openAiToneOfVoiceConstant.DRAMATIC,
  openAiToneOfVoiceConstant.GRUMPY,
  openAiToneOfVoiceConstant.SECRETIVE,
];

export const CreativityKeyArray = [
  creativityConstant.ECONOMIC,
  creativityConstant.AVERAGE,
  creativityConstant.GOOD,
  creativityConstant.PREMIUM,
];

export const PaymentMethodStripeSettingsSlugs = [
  'pm_stripe_client_id_live',
  'pm_stripe_secret_key_live',
];

export const GoogleAuthCredentialsSlugs = [
  'google_auth_client_id',
  'google_auth_client_secret',
];

export const GithubAuthCredentialsSlugs = [
  'github_auth_client_id',
  'github_auth_client_secret',
];

export const ModeStatusArray = [
  modeStatusConstant.LIVE,
  modeStatusConstant.SANDBOX,
];

export const StatusOnOffArray = [
  statusOnOffConstant.DEACTIVE,
  statusOnOffConstant.ACTIVE,
];

export const PackageTypeArray = [
  packageTypeConstant.REGULAR,
  packageTypeConstant.PREMIUM,
];

export const InputFieldTypeArray = [
  inputFieldTypeConstant.INPUT_FIELD,
  inputFieldTypeConstant.TEXTAREA_FIELD,
];

export const FaqTypeArray = [faqTypeConstant.LANDING_PAGE];

export const CodingLevelArray = [
  CodingLevelConstant.BEGINNER,
  CodingLevelConstant.INTERMEDIATE,
  CodingLevelConstant.ADVANCE,
];

export const CountryListObjectArray = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Åland Islands', code: 'AX' },
  { name: 'Albania', code: 'AL' },
  { name: 'Algeria', code: 'DZ' },
  { name: 'American Samoa', code: 'AS' },
  { name: 'AndorrA', code: 'AD' },
  { name: 'Angola', code: 'AO' },
  { name: 'Anguilla', code: 'AI' },
  { name: 'Antarctica', code: 'AQ' },
  { name: 'Antigua and Barbuda', code: 'AG' },
  { name: 'Argentina', code: 'AR' },
  { name: 'Armenia', code: 'AM' },
  { name: 'Aruba', code: 'AW' },
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Azerbaijan', code: 'AZ' },
  { name: 'Bahamas', code: 'BS' },
  { name: 'Bahrain', code: 'BH' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Barbados', code: 'BB' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Belgium', code: 'BE' },
  { name: 'Belize', code: 'BZ' },
  { name: 'Benin', code: 'BJ' },
  { name: 'Bermuda', code: 'BM' },
  { name: 'Bhutan', code: 'BT' },
  { name: 'Bolivia', code: 'BO' },
  { name: 'Bosnia and Herzegovina', code: 'BA' },
  { name: 'Botswana', code: 'BW' },
  { name: 'Bouvet Island', code: 'BV' },
  { name: 'Brazil', code: 'BR' },
  { name: 'British Indian Ocean Territory', code: 'IO' },
  { name: 'Brunei Darussalam', code: 'BN' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Burkina Faso', code: 'BF' },
  { name: 'Burundi', code: 'BI' },
  { name: 'Cambodia', code: 'KH' },
  { name: 'Cameroon', code: 'CM' },
  { name: 'Canada', code: 'CA' },
  { name: 'Cape Verde', code: 'CV' },
  { name: 'Cayman Islands', code: 'KY' },
  { name: 'Central African Republic', code: 'CF' },
  { name: 'Chad', code: 'TD' },
  { name: 'Chile', code: 'CL' },
  { name: 'China', code: 'CN' },
  { name: 'Christmas Island', code: 'CX' },
  { name: 'Cocos (Keeling) Islands', code: 'CC' },
  { name: 'Colombia', code: 'CO' },
  { name: 'Comoros', code: 'KM' },
  { name: 'Congo', code: 'CG' },
  { name: 'Congo, The Democratic Republic of the', code: 'CD' },
  { name: 'Cook Islands', code: 'CK' },
  { name: 'Costa Rica', code: 'CR' },
  { name: "Cote D'Ivoire", code: 'CI' },
  { name: 'Croatia', code: 'HR' },
  { name: 'Cuba', code: 'CU' },
  { name: 'Cyprus', code: 'CY' },
  { name: 'Czech Republic', code: 'CZ' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Djibouti', code: 'DJ' },
  { name: 'Dominica', code: 'DM' },
  { name: 'Dominican Republic', code: 'DO' },
  { name: 'Ecuador', code: 'EC' },
  { name: 'Egypt', code: 'EG' },
  { name: 'El Salvador', code: 'SV' },
  { name: 'Equatorial Guinea', code: 'GQ' },
  { name: 'Eritrea', code: 'ER' },
  { name: 'Estonia', code: 'EE' },
  { name: 'Ethiopia', code: 'ET' },
  { name: 'Falkland Islands (Malvinas)', code: 'FK' },
  { name: 'Faroe Islands', code: 'FO' },
  { name: 'Fiji', code: 'FJ' },
  { name: 'Finland', code: 'FI' },
  { name: 'France', code: 'FR' },
  { name: 'French Guiana', code: 'GF' },
  { name: 'French Polynesia', code: 'PF' },
  { name: 'French Southern Territories', code: 'TF' },
  { name: 'Gabon', code: 'GA' },
  { name: 'Gambia', code: 'GM' },
  { name: 'Georgia', code: 'GE' },
  { name: 'Germany', code: 'DE' },
  { name: 'Ghana', code: 'GH' },
  { name: 'Gibraltar', code: 'GI' },
  { name: 'Greece', code: 'GR' },
  { name: 'Greenland', code: 'GL' },
  { name: 'Grenada', code: 'GD' },
  { name: 'Guadeloupe', code: 'GP' },
  { name: 'Guam', code: 'GU' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Guernsey', code: 'GG' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guinea-Bissau', code: 'GW' },
  { name: 'Guyana', code: 'GY' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
  { name: 'Holy See (Vatican City State)', code: 'VA' },
  { name: 'Honduras', code: 'HN' },
  { name: 'Hong Kong', code: 'HK' },
  { name: 'Hungary', code: 'HU' },
  { name: 'Iceland', code: 'IS' },
  { name: 'India', code: 'IN' },
  { name: 'Indonesia', code: 'ID' },
  { name: 'Iran, Islamic Republic Of', code: 'IR' },
  { name: 'Iraq', code: 'IQ' },
  { name: 'Ireland', code: 'IE' },
  { name: 'Isle of Man', code: 'IM' },
  { name: 'Israel', code: 'IL' },
  { name: 'Italy', code: 'IT' },
  { name: 'Jamaica', code: 'JM' },
  { name: 'Japan', code: 'JP' },
  { name: 'Jersey', code: 'JE' },
  { name: 'Jordan', code: 'JO' },
  { name: 'Kazakhstan', code: 'KZ' },
  { name: 'Kenya', code: 'KE' },
  { name: 'Kiribati', code: 'KI' },
  { name: "Korea, Democratic People'S Republic of", code: 'KP' },
  { name: 'Korea, Republic of', code: 'KR' },
  { name: 'Kuwait', code: 'KW' },
  { name: 'Kyrgyzstan', code: 'KG' },
  { name: "Lao People'S Democratic Republic", code: 'LA' },
  { name: 'Latvia', code: 'LV' },
  { name: 'Lebanon', code: 'LB' },
  { name: 'Lesotho', code: 'LS' },
  { name: 'Liberia', code: 'LR' },
  { name: 'Libyan Arab Jamahiriya', code: 'LY' },
  { name: 'Liechtenstein', code: 'LI' },
  { name: 'Lithuania', code: 'LT' },
  { name: 'Luxembourg', code: 'LU' },
  { name: 'Macao', code: 'MO' },
  { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Malawi', code: 'MW' },
  { name: 'Malaysia', code: 'MY' },
  { name: 'Maldives', code: 'MV' },
  { name: 'Mali', code: 'ML' },
  { name: 'Malta', code: 'MT' },
  { name: 'Marshall Islands', code: 'MH' },
  { name: 'Martinique', code: 'MQ' },
  { name: 'Mauritania', code: 'MR' },
  { name: 'Mauritius', code: 'MU' },
  { name: 'Mayotte', code: 'YT' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Micronesia, Federated States of', code: 'FM' },
  { name: 'Moldova, Republic of', code: 'MD' },
  { name: 'Monaco', code: 'MC' },
  { name: 'Mongolia', code: 'MN' },
  { name: 'Montserrat', code: 'MS' },
  { name: 'Morocco', code: 'MA' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Namibia', code: 'NA' },
  { name: 'Nauru', code: 'NR' },
  { name: 'Nepal', code: 'NP' },
  { name: 'Netherlands', code: 'NL' },
  { name: 'Netherlands Antilles', code: 'AN' },
  { name: 'New Caledonia', code: 'NC' },
  { name: 'New Zealand', code: 'NZ' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Niger', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'Niue', code: 'NU' },
  { name: 'Norfolk Island', code: 'NF' },
  { name: 'Northern Mariana Islands', code: 'MP' },
  { name: 'Norway', code: 'NO' },
  { name: 'Oman', code: 'OM' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Palau', code: 'PW' },
  { name: 'Palestinian Territory, Occupied', code: 'PS' },
  { name: 'Panama', code: 'PA' },
  { name: 'Papua New Guinea', code: 'PG' },
  { name: 'Paraguay', code: 'PY' },
  { name: 'Peru', code: 'PE' },
  { name: 'Philippines', code: 'PH' },
  { name: 'Pitcairn', code: 'PN' },
  { name: 'Poland', code: 'PL' },
  { name: 'Portugal', code: 'PT' },
  { name: 'Puerto Rico', code: 'PR' },
  { name: 'Qatar', code: 'QA' },
  { name: 'Reunion', code: 'RE' },
  { name: 'Romania', code: 'RO' },
  { name: 'Russian Federation', code: 'RU' },
  { name: 'RWANDA', code: 'RW' },
  { name: 'Saint Helena', code: 'SH' },
  { name: 'Saint Kitts and Nevis', code: 'KN' },
  { name: 'Saint Lucia', code: 'LC' },
  { name: 'Saint Pierre and Miquelon', code: 'PM' },
  { name: 'Saint Vincent and the Grenadines', code: 'VC' },
  { name: 'Samoa', code: 'WS' },
  { name: 'San Marino', code: 'SM' },
  { name: 'Sao Tome and Principe', code: 'ST' },
  { name: 'Saudi Arabia', code: 'SA' },
  { name: 'Senegal', code: 'SN' },
  { name: 'Serbia and Montenegro', code: 'CS' },
  { name: 'Seychelles', code: 'SC' },
  { name: 'Sierra Leone', code: 'SL' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Slovakia', code: 'SK' },
  { name: 'Slovenia', code: 'SI' },
  { name: 'Solomon Islands', code: 'SB' },
  { name: 'Somalia', code: 'SO' },
  { name: 'South Africa', code: 'ZA' },
  { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
  { name: 'Spain', code: 'ES' },
  { name: 'Sri Lanka', code: 'LK' },
  { name: 'Sudan', code: 'SD' },
  { name: 'Suriname', code: 'SR' },
  { name: 'Svalbard and Jan Mayen', code: 'SJ' },
  { name: 'Swaziland', code: 'SZ' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Switzerland', code: 'CH' },
  { name: 'Syrian Arab Republic', code: 'SY' },
  { name: 'Taiwan, Province of China', code: 'TW' },
  { name: 'Tajikistan', code: 'TJ' },
  { name: 'Tanzania, United Republic of', code: 'TZ' },
  { name: 'Thailand', code: 'TH' },
  { name: 'Timor-Leste', code: 'TL' },
  { name: 'Togo', code: 'TG' },
  { name: 'Tokelau', code: 'TK' },
  { name: 'Tonga', code: 'TO' },
  { name: 'Trinidad and Tobago', code: 'TT' },
  { name: 'Tunisia', code: 'TN' },
  { name: 'Turkey', code: 'TR' },
  { name: 'Turkmenistan', code: 'TM' },
  { name: 'Turks and Caicos Islands', code: 'TC' },
  { name: 'Tuvalu', code: 'TV' },
  { name: 'Uganda', code: 'UG' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'United Arab Emirates', code: 'AE' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'United States', code: 'US' },
  { name: 'United States Minor Outlying Islands', code: 'UM' },
  { name: 'Uruguay', code: 'UY' },
  { name: 'Uzbekistan', code: 'UZ' },
  { name: 'Vanuatu', code: 'VU' },
  { name: 'Venezuela', code: 'VE' },
  { name: 'Viet Nam', code: 'VN' },
  { name: 'Virgin Islands, British', code: 'VG' },
  { name: 'Virgin Islands, U.S.', code: 'VI' },
  { name: 'Wallis and Futuna', code: 'WF' },
  { name: 'Western Sahara', code: 'EH' },
  { name: 'Yemen', code: 'YE' },
  { name: 'Zambia', code: 'ZM' },
  { name: 'Zimbabwe', code: 'ZW' },
];

export const LanguageListJsonArray = [
  {
    aa: 'Afar',
    ab: 'Abkhazian',
    af: 'Afrikaans',
    am: 'Amharic',
    ar: 'Arabic',
    'ar-ae': 'Arabic (U.A.E.)',
    'ar-bh': 'Arabic (Bahrain)',
    'ar-dz': 'Arabic (Algeria)',
    'ar-eg': 'Arabic (Egypt)',
    'ar-iq': 'Arabic (Iraq)',
    'ar-jo': 'Arabic (Jordan)',
    'ar-kw': 'Arabic (Kuwait)',
    'ar-lb': 'Arabic (Lebanon)',
    'ar-ly': 'Arabic (libya)',
    'ar-ma': 'Arabic (Morocco)',
    'ar-om': 'Arabic (Oman)',
    'ar-qa': 'Arabic (Qatar)',
    'ar-sa': 'Arabic (Saudi Arabia)',
    'ar-sy': 'Arabic (Syria)',
    'ar-tn': 'Arabic (Tunisia)',
    'ar-ye': 'Arabic (Yemen)',
    as: 'Assamese',
    ay: 'Aymara',
    az: 'Azeri',
    ba: 'Bashkir',
    be: 'Belarusian',
    bg: 'Bulgarian',
    bh: 'Bihari',
    bi: 'Bislama',
    bn: 'Bengali',
    bo: 'Tibetan',
    br: 'Breton',
    ca: 'Catalan',
    co: 'Corsican',
    cs: 'Czech',
    cy: 'Welsh',
    da: 'Danish',
    de: 'German',
    'de-at': 'German (Austria)',
    'de-ch': 'German (Switzerland)',
    'de-li': 'German (Liechtenstein)',
    'de-lu': 'German (Luxembourg)',
    div: 'Divehi',
    dz: 'Bhutani',
    el: 'Greek',
    en: 'English',
    'en-au': 'English (Australia)',
    'en-bz': 'English (Belize)',
    'en-ca': 'English (Canada)',
    'en-gb': 'English (United Kingdom)',
    'en-ie': 'English (Ireland)',
    'en-jm': 'English (Jamaica)',
    'en-nz': 'English (New Zealand)',
    'en-ph': 'English (Philippines)',
    'en-tt': 'English (Trinidad)',
    'en-us': 'English (United States)',
    'en-za': 'English (South Africa)',
    'en-zw': 'English (Zimbabwe)',
    eo: 'Esperanto',
    es: 'Spanish',
    'es-ar': 'Spanish (Argentina)',
    'es-bo': 'Spanish (Bolivia)',
    'es-cl': 'Spanish (Chile)',
    'es-co': 'Spanish (Colombia)',
    'es-cr': 'Spanish (Costa Rica)',
    'es-do': 'Spanish (Dominican Republic)',
    'es-ec': 'Spanish (Ecuador)',
    'es-es': 'Spanish (España)',
    'es-gt': 'Spanish (Guatemala)',
    'es-hn': 'Spanish (Honduras)',
    'es-mx': 'Spanish (Mexico)',
    'es-ni': 'Spanish (Nicaragua)',
    'es-pa': 'Spanish (Panama)',
    'es-pe': 'Spanish (Peru)',
    'es-pr': 'Spanish (Puerto Rico)',
    'es-py': 'Spanish (Paraguay)',
    'es-sv': 'Spanish (El Salvador)',
    'es-us': 'Spanish (United States)',
    'es-uy': 'Spanish (Uruguay)',
    'es-ve': 'Spanish (Venezuela)',
    et: 'Estonian',
    eu: 'Basque',
    fa: 'Farsi',
    fi: 'Finnish',
    fj: 'Fiji',
    fo: 'Faeroese',
    fr: 'French',
    'fr-be': 'French (Belgium)',
    'fr-ca': 'French (Canada)',
    'fr-ch': 'French (Switzerland)',
    'fr-lu': 'French (Luxembourg)',
    'fr-mc': 'French (Monaco)',
    fy: 'Frisian',
    ga: 'Irish',
    gd: 'Gaelic',
    gl: 'Galician',
    gn: 'Guarani',
    gu: 'Gujarati',
    ha: 'Hausa',
    he: 'Hebrew',
    hi: 'Hindi',
    hr: 'Croatian',
    hu: 'Hungarian',
    hy: 'Armenian',
    ia: 'Interlingua',
    id: 'Indonesian',
    ie: 'Interlingue',
    ik: 'Inupiak',
    in: 'Indonesian',
    is: 'Icelandic',
    it: 'Italian',
    'it-ch': 'Italian (Switzerland)',
    iw: 'Hebrew',
    ja: 'Japanese',
    ji: 'Yiddish',
    jw: 'Javanese',
    ka: 'Georgian',
    kk: 'Kazakh',
    kl: 'Greenlandic',
    km: 'Cambodian',
    kn: 'Kannada',
    ko: 'Korean',
    kok: 'Konkani',
    ks: 'Kashmiri',
    ku: 'Kurdish',
    ky: 'Kirghiz',
    kz: 'Kyrgyz',
    la: 'Latin',
    ln: 'Lingala',
    lo: 'Laothian',
    ls: 'Slovenian',
    lt: 'Lithuanian',
    lv: 'Latvian',
    mg: 'Malagasy',
    mi: 'Maori',
    mk: 'FYRO Macedonian',
    ml: 'Malayalam',
    mn: 'Mongolian',
    mo: 'Moldavian',
    mr: 'Marathi',
    ms: 'Malay',
    mt: 'Maltese',
    my: 'Burmese',
    na: 'Nauru',
    'nb-no': 'Norwegian (Bokmal)',
    ne: 'Nepali (India)',
    nl: 'Dutch',
    'nl-be': 'Dutch (Belgium)',
    'nn-no': 'Norwegian',
    no: 'Norwegian (Bokmal)',
    oc: 'Occitan',
    om: '(Afan)/Oromoor/Oriya',
    or: 'Oriya',
    pa: 'Punjabi',
    pl: 'Polish',
    ps: 'Pashto/Pushto',
    pt: 'Portuguese',
    'pt-br': 'Portuguese (Brazil)',
    qu: 'Quechua',
    rm: 'Rhaeto-Romanic',
    rn: 'Kirundi',
    ro: 'Romanian',
    'ro-md': 'Romanian (Moldova)',
    ru: 'Russian',
    'ru-md': 'Russian (Moldova)',
    rw: 'Kinyarwanda',
    sa: 'Sanskrit',
    sb: 'Sorbian',
    sd: 'Sindhi',
    sg: 'Sangro',
    sh: 'Serbo-Croatian',
    si: 'Singhalese',
    sk: 'Slovak',
    sl: 'Slovenian',
    sm: 'Samoan',
    sn: 'Shona',
    so: 'Somali',
    sq: 'Albanian',
    sr: 'Serbian',
    ss: 'Siswati',
    st: 'Sesotho',
    su: 'Sundanese',
    sv: 'Swedish',
    'sv-fi': 'Swedish (Finland)',
    sw: 'Swahili',
    sx: 'Sutu',
    syr: 'Syriac',
    ta: 'Tamil',
    te: 'Telugu',
    tg: 'Tajik',
    th: 'Thai',
    ti: 'Tigrinya',
    tk: 'Turkmen',
    tl: 'Tagalog',
    tn: 'Tswana',
    to: 'Tonga',
    tr: 'Turkish',
    ts: 'Tsonga',
    tt: 'Tatar',
    tw: 'Twi',
    uk: 'Ukrainian',
    ur: 'Urdu',
    us: 'English',
    uz: 'Uzbek',
    vi: 'Vietnamese',
    vo: 'Volapuk',
    wo: 'Wolof',
    xh: 'Xhosa',
    yi: 'Yiddish',
    yo: 'Yoruba',
    zh: 'Chinese',
    'zh-cn': 'Chinese (China)',
    'zh-hk': 'Chinese (Hong Kong SAR)',
    'zh-mo': 'Chinese (Macau SAR)',
    'zh-sg': 'Chinese (Singapore)',
    'zh-tw': 'Chinese (Taiwan)',
    zu: 'Zulu',
  },
];

export const LandingPageSlugs = [
  'landing_page_first_title',
  'landing_page_first_description',
  'landing_page_first_btn_text',
  'landing_page_trusted_org_text',
  'landing_page_client_title_text',
];

export const ReviewArray = [1, 2, 3, 4, 5];
