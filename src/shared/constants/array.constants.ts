import {
  CodingLevelConstant,
  coreConstant,
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
  'google_analytics_tracking_id',
  'site_url',
  'site_email',
  'default_country',
  'default_currency',
  'social_login_github_status',
  'social_login_google_status',
  'meta_title',
  'meta_description',
  'meta_keywords',
  'site_logo',
  'site_fav_icon',
  'google_auth_client_id',
  'github_auth_client_id',
  'social_login_github_status',
  'social_login_google_status',
  'privacy_policy_status',
  'privacy_policy',
  'terms_condition_status',
  'terms_condition',
  'site_copy_right_text',
  'pm_stripe_client_id_live',
  'pm_stripe_secret_key_live',
  'braintree_google_merchant_id',
  'braintree_tokenization_keys',
];

export const GeneralSettingsSlugs = [
  'site_name',
  'site_url',
  'site_email',
  'default_country',
  'social_login_github_status',
  'social_login_google_status',
  'google_analytics_tracking_id',
  'meta_title',
  'meta_description',
  'meta_keywords',
  'site_logo',
  'site_fav_icon',
  'site_copy_right_text',
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

export const TermsConditionSlugs = [
  'privacy_policy_status',
  'privacy_policy',
  'terms_condition_status',
  'terms_condition',
];

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
export const PaymentMethodRazorpaySettingsSlugs = ['key_id', 'key_secret'];

export const GoogleAuthCredentialsSlugs = [
  'google_auth_client_id',
  'google_auth_client_secret',
];

export const GithubAuthCredentialsSlugs = [
  'github_auth_client_id',
  'github_auth_client_secret',
];

export const BraintreeCredentialsSlugs = [
  'braintree_payment_mode',
  'braintree_public_key',
  'braintree_merchant_id',
  'braintree_private_key',
  'braintree_tokenization_keys',
  'braintree_google_merchant_id',
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
  { code: 'Abkhaz AB', name: 'Abkhaz', nativeName: 'аҧсуа' },
  { code: 'Afar AA', name: 'Afar', nativeName: 'Afaraf' },
  { code: 'Afrikaans AF', name: 'Afrikaans', nativeName: 'Afrikaans' },
  { code: 'Akan AK', name: 'Akan', nativeName: 'Akan' },
  { code: 'Albanian AL', name: 'Albanian', nativeName: 'Shqip' },
  { code: 'Amharic AM', name: 'Amharic', nativeName: 'አማርኛ' },
  { code: 'Arabic AR', name: 'Arabic', nativeName: 'العربية' },
  { code: 'Aragonese AN', name: 'Aragonese', nativeName: 'Aragonés' },
  { code: 'Armenian AM', name: 'Armenian', nativeName: 'Հայերեն' },
  { code: 'Assamese AS', name: 'Assamese', nativeName: 'অসমীয়া' },
  { code: 'Avaric AV', name: 'Avaric', nativeName: 'авар мацӀ, магӀарул мацӀ' },
  { code: 'Avestan AE', name: 'Avestan', nativeName: 'avesta' },
  { code: 'Aymara AY', name: 'Aymara', nativeName: 'aymar aru' },
  {
    code: 'Azerbaijani AZ',
    name: 'Azerbaijani',
    nativeName: 'azərbaycan dili',
  },
  { code: 'Bambara BM', name: 'Bambara', nativeName: 'bamanankan' },
  { code: 'Bashkir BA', name: 'Bashkir', nativeName: 'башҡорт теле' },
  { code: 'Basque EU', name: 'Basque', nativeName: 'euskara, euskera' },
  { code: 'Belarusian BE', name: 'Belarusian', nativeName: 'Беларуская' },
  { code: 'Bengali BD', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'Bihari BH', name: 'Bihari', nativeName: 'भोजपुरी' },
  { code: 'Bislama BI', name: 'Bislama', nativeName: 'Bislama' },
  { code: 'Bosnian BS', name: 'Bosnian', nativeName: 'bosanski jezik' },
  { code: 'Breton BR', name: 'Breton', nativeName: 'brezhoneg' },
  { code: 'Bulgarian BG', name: 'Bulgarian', nativeName: 'български език' },
  { code: 'Burmese MY', name: 'Burmese', nativeName: 'ဗမာစာ' },
  { code: 'Catalan CA', name: 'Catalan; Valencian', nativeName: 'Català' },
  { code: 'Chamorro CH', name: 'Chamorro', nativeName: 'Chamoru' },
  { code: 'Chechen CE', name: 'Chechen', nativeName: 'нохчийн мотт' },
  {
    code: 'Chichewa; Chewa; Nyanja NY',
    name: 'Chichewa; Chewa; Nyanja',
    nativeName: 'chiCheŵa, chinyanja',
  },
  {
    code: 'Chinese ZH',
    name: 'Chinese',
    nativeName: '中文 (Zhōngwén), 汉语, 漢語',
  },
  { code: 'Chuvash CV', name: 'Chuvash', nativeName: 'чӑваш чӗлхи' },
  { code: 'Cornish KW', name: 'Cornish', nativeName: 'Kernewek' },
  { code: 'Corsican CO', name: 'Corsican', nativeName: 'corsu, lingua corsa' },
  { code: 'Cree CR', name: 'Cree', nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ' },
  { code: 'Croatian HR', name: 'Croatian', nativeName: 'hrvatski' },
  { code: 'Czech CS', name: 'Czech', nativeName: 'česky, čeština' },
  { code: 'Danish DA', name: 'Danish', nativeName: 'dansk' },
  {
    code: 'Divehi; Dhivehi; Maldivian DV',
    name: 'Divehi; Dhivehi; Maldivian',
    nativeName: 'ދިވެހި',
  },
  { code: 'Dutch NL', name: 'Dutch', nativeName: 'Nederlands, Vlaams' },
  { code: 'English EN', name: 'English', nativeName: 'English' },
  { code: 'Esperanto EO', name: 'Esperanto', nativeName: 'Esperanto' },
  { code: 'Estonian ET', name: 'Estonian', nativeName: 'eesti, eesti keel' },
  { code: 'Ewe EE', name: 'Ewe', nativeName: 'Eʋegbe' },
  { code: 'Faroese FO', name: 'Faroese', nativeName: 'føroyskt' },
  { code: 'Fijian FJ', name: 'Fijian', nativeName: 'vosa Vakaviti' },
  { code: 'Finnish FI', name: 'Finnish', nativeName: 'suomi, suomen kieli' },
  {
    code: 'French FR',
    name: 'French',
    nativeName: 'français, langue française',
  },
  {
    code: 'Fula; Fulah; Pulaar; Pular FF',
    name: 'Fula; Fulah; Pulaar; Pular',
    nativeName: 'Fulfulde, Pulaar, Pular',
  },
  { code: 'Galician GL', name: 'Galician', nativeName: 'Galego' },
  { code: 'Georgian KA', name: 'Georgian', nativeName: 'ქართული' },
  { code: 'German DE', name: 'German', nativeName: 'Deutsch' },
  { code: 'Greek, Modern EL', name: 'Greek, Modern', nativeName: 'Ελληνικά' },
  { code: 'Guaraní GN', name: 'Guaraní', nativeName: 'Avañeẽ' },
  { code: 'Gujarati GU', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  {
    code: 'Haitian; Haitian Creole HT',
    name: 'Haitian; Haitian Creole',
    nativeName: 'Kreyòl ayisyen',
  },
  { code: 'Hausa HA', name: 'Hausa', nativeName: 'Hausa, هَوُسَ' },
  { code: 'Hebrew (modern) HE', name: 'Hebrew (modern)', nativeName: 'עברית' },
  { code: 'Herero HZ', name: 'Herero', nativeName: 'Otjiherero' },
  { code: 'Hindi IN', name: 'Hindi', nativeName: 'हिन्दी, हिंदी' },
  { code: 'Hiri Motu HO', name: 'Hiri Motu', nativeName: 'Hiri Motu' },
  { code: 'Hungarian HU', name: 'Hungarian', nativeName: 'Magyar' },
  { code: 'Interlingua IA', name: 'Interlingua', nativeName: 'Interlingua' },
  { code: 'Indonesian ID', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  {
    code: 'Interlingue IE',
    name: 'Interlingue',
    nativeName: 'Originally called Occidental; then Interlingue after WWII',
  },
  { code: 'Irish GA', name: 'Irish', nativeName: 'Gaeilge' },
  { code: 'Igbo IG', name: 'Igbo', nativeName: 'Asụsụ Igbo' },
  { code: 'Inupiaq IK', name: 'Inupiaq', nativeName: 'Iñupiaq, Iñupiatun' },
  { code: 'Ido IO', name: 'Ido', nativeName: 'Ido' },
  { code: 'Icelandic IS', name: 'Icelandic', nativeName: 'Íslenska' },
  { code: 'Italian IT', name: 'Italian', nativeName: 'Italiano' },
  { code: 'Inuktitut IU', name: 'Inuktitut', nativeName: 'ᐃᓄᒃᑎᑐᑦ' },
  {
    code: 'Japanese JA',
    name: 'Japanese',
    nativeName: '日本語 (にほんご／にっぽんご)',
  },
  { code: 'Javanese JV', name: 'Javanese', nativeName: 'basa Jawa' },
  {
    code: 'Kalaallisut, Greenlandic KL',
    name: 'Kalaallisut, Greenlandic',
    nativeName: 'kalaallisut, kalaallit oqaasii',
  },
  { code: 'Kannada KN', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'Kanuri KR', name: 'Kanuri', nativeName: 'Kanuri' },
  { code: 'Kashmiri KS', name: 'Kashmiri', nativeName: 'कश्मीरी, كشميري‎' },
  { code: 'Kazakh KK', name: 'Kazakh', nativeName: 'Қазақ тілі' },
  { code: 'Khmer KM', name: 'Khmer', nativeName: 'ភាសាខ្មែរ' },
  { code: 'Kikuyu, Gikuyu KI', name: 'Kikuyu, Gikuyu', nativeName: 'Gĩkũyũ' },
  { code: 'Kinyarwanda RW', name: 'Kinyarwanda', nativeName: 'Ikinyarwanda' },
  {
    code: 'Kirghiz, Kyrgyz KY',
    name: 'Kirghiz, Kyrgyz',
    nativeName: 'кыргыз тили',
  },
  { code: 'Komi KV', name: 'Komi', nativeName: 'коми кыв' },
  { code: 'Kongo KG', name: 'Kongo', nativeName: 'KiKongo' },
  {
    code: 'Korean KO',
    name: 'Korean',
    nativeName: '한국어 (韓國語), 조선말 (朝鮮語)',
  },
  { code: 'Kurdish KU', name: 'Kurdish', nativeName: 'Kurdî, كوردی‎' },
  {
    code: 'Kwanyama, Kuanyama KJ',
    name: 'Kwanyama, Kuanyama',
    nativeName: 'Kuanyama',
  },
  { code: 'Latin LA', name: 'Latin', nativeName: 'latine, lingua latina' },
  {
    code: 'Luxembourgish, Letzeburgesch LB',
    name: 'Luxembourgish, Letzeburgesch',
    nativeName: 'Lëtzebuergesch',
  },
  { code: 'Luganda LG', name: 'Luganda', nativeName: 'Luganda' },
  {
    code: 'Limburgish, Limburgan, Limburger LI',
    name: 'Limburgish, Limburgan, Limburger',
    nativeName: 'Limburgs',
  },
  { code: 'Lingala LN', name: 'Lingala', nativeName: 'Lingála' },
  { code: 'Lao LO', name: 'Lao', nativeName: 'ພາສາລາວ' },
  { code: 'Lithuanian LT', name: 'Lithuanian', nativeName: 'lietuvių kalba' },
  { code: 'Luba-Katanga LU', name: 'Luba-Katanga', nativeName: 'Tshiluba' },
  { code: 'Latvian LV', name: 'Latvian', nativeName: 'latviešu valoda' },
  { code: 'Manx GV', name: 'Manx', nativeName: 'Gaelg, Gailck' },
  { code: 'Macedonian MK', name: 'Macedonian', nativeName: 'македонски јазик' },
  { code: 'Malagasy MG', name: 'Malagasy', nativeName: 'Malagasy fiteny' },
  { code: 'Malay MS', name: 'Malay', nativeName: 'bahasa Melayu, بهاس ملايو' },
  { code: 'Malayalam ML', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'Maltese MT', name: 'Maltese', nativeName: 'Malti' },
  { code: 'Māori MI', name: 'Māori', nativeName: 'te reo Māori' },
  {
    code: 'Marathi (Marāṭhī) MR',
    name: 'Marathi (Marāṭhī)',
    nativeName: 'मराठी',
  },
  { code: 'Marshallese MH', name: 'Marshallese', nativeName: 'Kajin M̧ajeļ' },
  { code: 'Mongolian MN', name: 'Mongolian', nativeName: 'монгол' },
  { code: 'Nauru NA', name: 'Nauru', nativeName: 'Ekakairũ Naoero' },
  {
    code: 'Navajo, Navaho NV',
    name: 'Navajo, Navaho',
    nativeName: 'Diné bizaad, Dinékʼehǰi',
  },
  {
    code: 'Norwegian Bokmål NB',
    name: 'Norwegian Bokmål',
    nativeName: 'Norsk bokmål',
  },
  { code: 'North Ndebele ND', name: 'North Ndebele', nativeName: 'isiNdebele' },
  { code: 'Nepali NE', name: 'Nepali', nativeName: 'नेपाली' },
  { code: 'Ndonga NG', name: 'Ndonga', nativeName: 'Owambo' },
  {
    code: 'Norwegian Nynorsk NN',
    name: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk',
  },
  { code: 'Norwegian NO', name: 'Norwegian', nativeName: 'Norsk' },
  { code: 'Nuosu II', name: 'Nuosu', nativeName: 'ꆈꌠ꒿ Nuosuhxud' },
  { code: 'South Ndebele NR', name: 'South Ndebele', nativeName: 'isiNdebele' },
  { code: 'Occitan OC', name: 'Occitan', nativeName: 'Occitan' },
  { code: 'Ojibwe, Ojibwa OJ', name: 'Ojibwe, Ojibwa', nativeName: 'ᐊᓂᔑᓈᐯᒧᐏᐣ' },
  {
    code: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic CU',
    name: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ',
  },
  { code: 'Oromo OM', name: 'Oromo', nativeName: 'Afaan Oromoo' },
  { code: 'Oriya OR', name: 'Oriya', nativeName: 'ଓଡ଼ିଆ' },
  {
    code: 'Ossetian, Ossetic OS',
    name: 'Ossetian, Ossetic',
    nativeName: 'ирон æвзаг',
  },
  {
    code: 'Punjabi, Panjabi PA',
    name: 'Punjabi, Panjabi',
    nativeName: 'ਪੰਜਾਬੀ, پنجابی',
  },
  { code: 'Pāli PI', name: 'Pāli', nativeName: 'पाऴि' },
];

export const LandingPageSlugs = [
  'landing_page_first_title',
  'landing_page_first_description',
  'landing_page_first_btn_text',
  'landing_page_first_img_url',
  'landing_page_logo_url',
  'landing_page_hw_first_title',
  'landing_page_hw_first_description',
  'landing_page_hw_second_title',
  'landing_page_hw_second_description',
  'landing_page_hw_third_title',
  'landing_page_hw_third_description',
  'landing_page_feature_first_title',
  'landing_page_feature_first_description',
  'landing_page_feature_second_title',
  'landing_page_feature_second_description',
  'landing_page_feature_third_title',
  'landing_page_feature_third_description',
  'landing_page_feature_fourth_title',
  'landing_page_feature_fourth_description',
];

export const ReviewArray = [1, 2, 3, 4, 5];

export const AvailableFeaturesArray = [
  coreConstant.AVAILABLE_FEATURES.CODE,
  coreConstant.AVAILABLE_FEATURES.CONTENT_WRITING,
  coreConstant.AVAILABLE_FEATURES.IMAGE_GENERATION,
  coreConstant.AVAILABLE_FEATURES.TRANSLATION,
];
