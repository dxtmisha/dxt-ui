import { computed, effectScope, hasInjectionContext, inject, provide, ref, shallowRef, watch } from "/Users/tung/Documents/GitHub/dxt-ui/node_modules/vue/dist/vue.runtime.esm-bundler.js";
//#region ../media/dist/library.js
var e = /* @__PURE__ */ JSON.parse("[{\"country\":\"US\",\"countryAlternative\":[\"EN\"],\"language\":\"en\",\"languageAlternative\":[\"us\"],\"firstDay\":\"Su\",\"zone\":\"America/New_York\",\"phoneCode\":\"1\",\"phoneMask\":[\"+1-***-***-****\"]},{\"country\":\"GB\",\"countryAlternative\":[\"UK\"],\"language\":\"en\",\"firstDay\":\"Mo\",\"zone\":\"Europe/London\",\"phoneCode\":\"44\",\"phoneMask\":[\"+44-**-****-****\"]},{\"country\":\"AF\",\"language\":\"fa\",\"firstDay\":\"Sa\",\"zone\":\"Asia/Kabul\",\"phoneCode\":\"93\",\"phoneMask\":[\"+93-**-***-****\"]},{\"country\":\"AL\",\"language\":\"sq\",\"firstDay\":\"Mo\",\"zone\":\"Europe/Tirane\",\"phoneCode\":\"355\",\"phoneMask\":[\"+355-***-***-***\"]},{\"country\":\"DZ\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"zone\":\"Africa/Algiers\",\"phoneCode\":\"213\",\"phoneMask\":[\"+213-**-***-****\"]},{\"country\":\"AS\",\"language\":\"en\",\"firstDay\":null,\"zone\":\"Pacific/Pago_Pago\",\"phoneCode\":\"1-684\",\"phoneMask\":[\"+1-684-***-****\"]},{\"country\":\"AD\",\"language\":\"ca\",\"firstDay\":\"Mo\",\"zone\":\"Europe/Andorra\",\"phoneCode\":\"376\",\"phoneMask\":[\"+376-***-***\"]},{\"country\":\"AO\",\"language\":\"pt\",\"firstDay\":null,\"zone\":\"Africa/Lagos\",\"phoneCode\":\"244\",\"phoneMask\":[\"+244-***-***-***\"]},{\"country\":\"AI\",\"language\":\"en\",\"firstDay\":null,\"zone\":\"America/Port_of_Spain\",\"phoneCode\":\"1-264\",\"phoneMask\":[\"+1-264-***-****\"]},{\"country\":\"AQ\",\"language\":\"en\",\"firstDay\":null,\"zone\":\"Antarctica/Troll\",\"phoneCode\":\"672\",\"phoneMask\":[\"+672-1-**-***\"]},{\"country\":\"AG\",\"language\":\"en\",\"firstDay\":null,\"zone\":\"America/Antigua\",\"phoneCode\":\"1-268\",\"phoneMask\":[\"+1-268-***-****\"]},{\"country\":\"AR\",\"language\":\"es\",\"firstDay\":\"Su\",\"zone\":\"America/Argentina/Buenos_Aires\",\"phoneCode\":\"54\",\"phoneMask\":[\"+54-***-***-****\"]},{\"country\":\"AM\",\"language\":\"hy\",\"firstDay\":\"Mo\",\"zone\":\"Asia/Yerevan\",\"phoneCode\":\"374\",\"phoneMask\":[\"+374-**-***-***\"]},{\"country\":\"AW\",\"language\":\"nl\",\"firstDay\":null,\"zone\":\"America/Curacao\",\"phoneCode\":\"297\",\"phoneMask\":[\"+297-***-****\"]},{\"country\":\"AU\",\"language\":\"en\",\"firstDay\":\"Mo\",\"zone\":\"Australia/Sydney\",\"phoneCode\":\"61\",\"phoneMask\":[\"+61-*-****-****\"]},{\"country\":\"AT\",\"language\":\"de\",\"firstDay\":\"Mo\",\"zone\":\"Europe/Vienna\",\"phoneCode\":\"43\",\"phoneMask\":[\"+43-***-***-****\",\"+43-***-***-*****\"]},{\"country\":\"AZ\",\"language\":\"az\",\"firstDay\":\"Mo\",\"zone\":\"Asia/Baku\",\"phoneCode\":\"994\",\"phoneMask\":\"+994-**-***-**-**\"},{\"country\":\"BS\",\"language\":\"en\",\"firstDay\":null,\"zone\":\"America/Nassau\",\"phoneCode\":\"1-242\",\"phoneMask\":\"+1-242-***-****\"},{\"country\":\"BH\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"zone\":\"Asia/Bahrain\",\"phoneCode\":\"973\",\"phoneMask\":\"+973-****-****\"},{\"country\":\"BD\",\"language\":\"bn\",\"firstDay\":null,\"zone\":\"Asia/Dhaka\",\"phoneCode\":\"880\",\"phoneMask\":\"+880-**-***-***\"},{\"country\":\"BB\",\"language\":\"en\",\"firstDay\":null,\"zone\":\"America/Barbados\",\"phoneCode\":\"1-246\",\"phoneMask\":\"+1-246-***-****\"},{\"country\":\"BY\",\"language\":\"be\",\"firstDay\":\"Mo\",\"zone\":\"Europe/Minsk\",\"phoneCode\":\"375\",\"phoneMask\":\"+375-**-***-**-**\"},{\"country\":\"BE\",\"language\":\"nl\",\"firstDay\":\"Mo\",\"zone\":\"Europe/Brussels\",\"phoneCode\":\"32\",\"phoneMask\":\"+32-***-***-***\"},{\"country\":\"BZ\",\"language\":\"en\",\"firstDay\":\"Su\",\"zone\":\"America/Belize\",\"phoneCode\":\"501\",\"phoneMask\":\"+501-***-****\"},{\"country\":\"BJ\",\"language\":\"fr\",\"firstDay\":null,\"zone\":\"Africa/Lagos\",\"phoneCode\":\"229\",\"phoneMask\":\"+229-**-**-****\"},{\"country\":\"BM\",\"language\":\"en\",\"firstDay\":null,\"zone\":\"Atlantic/Bermuda\",\"phoneCode\":\"1-441\",\"phoneMask\":\"+1-441-***-****\"},{\"country\":\"BT\",\"language\":\"dz\",\"firstDay\":null,\"zone\":\"Asia/Thimphu\",\"phoneCode\":\"975\",\"phoneMask\":[\"+975-*-***-***\",\"+975-17-***-***\"]},{\"country\":\"BO\",\"language\":\"es\",\"firstDay\":\"Su\",\"zone\":\"America/La_Paz\",\"phoneCode\":\"591\",\"phoneMask\":\"+591-*-***-****\"},{\"country\":\"BA\",\"language\":\"bs\",\"firstDay\":null,\"zone\":\"Europe/Belgrade\",\"phoneCode\":\"387\",\"phoneMask\":[\"+387-**-****\",\"+387-**-*****\"]},{\"country\":\"BW\",\"language\":\"en\",\"firstDay\":null,\"zone\":\"Africa/Maputo\",\"phoneCode\":\"267\",\"phoneMask\":\"+267-**-***-***\"},{\"country\":\"BR\",\"language\":\"pt\",\"firstDay\":\"Su\",\"zone\":\"America/Sao_Paulo\",\"phoneCode\":\"55\",\"phoneMask\":[\"+55-**-****-****\",\"+55-**-*****-****\"]},{\"country\":\"IO\",\"language\":\"en\",\"firstDay\":null,\"zone\":\"Indian/Chagos\",\"phoneCode\":\"246\",\"phoneMask\":\"+246-***-****\"},{\"country\":\"VG\",\"language\":\"en\",\"firstDay\":null,\"zone\":\"America/Port_of_Spain\",\"phoneCode\":\"1-284\",\"phoneMask\":\"+1-284-***-****\"},{\"country\":\"BN\",\"language\":\"ms\",\"firstDay\":\"Mo\",\"zone\":\"Asia/Brunei\",\"phoneCode\":\"673\",\"phoneMask\":\"+673-***-****\"},{\"country\":\"BG\",\"language\":\"bg\",\"firstDay\":\"Mo\",\"zone\":\"Europe/Sofia\",\"phoneCode\":\"359\",\"phoneMask\":\"+359-***-***-***\"},{\"country\":\"BF\",\"language\":\"fr\",\"firstDay\":null,\"zone\":\"Africa/Abidjan\",\"phoneCode\":\"226\",\"phoneMask\":\"+226-**-**-****\"},{\"country\":\"BI\",\"language\":\"fr\",\"firstDay\":null,\"zone\":\"Africa/Maputo\",\"phoneCode\":\"257\",\"phoneMask\":\"+257-**-**-****\"},{\"country\":\"KH\",\"language\":\"km\",\"firstDay\":null,\"zone\":\"Asia/Phnom_Penh\",\"phoneCode\":\"855\",\"phoneMask\":\"+855-**-***-***\"},{\"country\":\"CM\",\"phoneCode\":\"237\",\"zone\":\"Africa/Lagos\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+237-****-****\"},{\"country\":\"CA\",\"phoneCode\":\"1\",\"zone\":\"America/Toronto\",\"language\":\"en\",\"firstDay\":\"Su\",\"phoneMask\":[\"+1-204-***-****\",\"+1-226-***-****\",\"+1-236-***-****\",\"+1-249-***-****\",\"+1-250-***-****\",\"+1-257-***-****\",\"+1-263-***-****\",\"+1-289-***-****\",\"+1-306-***-****\",\"+1-343-***-****\",\"+1-354-***-****\",\"+1-365-***-****\",\"+1-367-***-****\",\"+1-368-***-****\",\"+1-382-***-****\",\"+1-403-***-****\",\"+1-416-***-****\",\"+1-418-***-****\",\"+1-428-***-****\",\"+1-431-***-****\",\"+1-437-***-****\",\"+1-438-***-****\",\"+1-450-***-****\",\"+1-468-***-****\",\"+1-474-***-****\",\"+1-506-***-****\",\"+1-514-***-****\",\"+1-519-***-****\",\"+1-548-***-****\",\"+1-579-***-****\",\"+1-581-***-****\",\"+1-584-***-****\",\"+1-587-***-****\",\"+1-604-***-****\",\"+1-613-***-****\",\"+1-639-***-****\",\"+1-647-***-****\",\"+1-672-***-****\",\"+1-683-***-****\",\"+1-705-***-****\",\"+1-709-***-****\",\"+1-742-***-****\",\"+1-753-***-****\",\"+1-778-***-****\",\"+1-780-***-****\",\"+1-782-***-****\",\"+1-807-***-****\",\"+1-819-***-****\",\"+1-825-***-****\",\"+1-867-***-****\",\"+1-873-***-****\",\"+1-879-***-****\",\"+1-902-***-****\",\"+1-905-***-****\",\"+1-942-***-****\"]},{\"country\":\"CV\",\"phoneCode\":\"238\",\"zone\":\"Atlantic/Cape_Verde\",\"language\":\"pt\",\"firstDay\":null,\"phoneMask\":\"+238-***-**-**\"},{\"country\":\"KY\",\"phoneCode\":\"1-345\",\"zone\":\"America/Cayman\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-345-***-****\"},{\"country\":\"CF\",\"phoneCode\":\"236\",\"zone\":\"Africa/Lagos\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+236-**-**-****\"},{\"country\":\"TD\",\"phoneCode\":\"235\",\"zone\":\"Africa/Ndjamena\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+235-**-**-**-**\"},{\"country\":\"CL\",\"phoneCode\":\"56\",\"zone\":\"America/Santiago\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":\"+56-*-****-****\"},{\"country\":\"CN\",\"phoneCode\":\"86\",\"zone\":\"Asia/Shanghai\",\"language\":\"zh\",\"firstDay\":\"Su\",\"phoneMask\":[\"+86-***-****-***\",\"+86-***-****-****\",\"+86-**-*****-*****\"]},{\"country\":\"CX\",\"phoneCode\":\"61\",\"zone\":\"Indian/Christmas\",\"language\":\"en\",\"firstDay\":null},{\"country\":\"CC\",\"phoneCode\":\"61\",\"zone\":\"Indian/Cocos\",\"language\":\"ms\",\"firstDay\":null},{\"country\":\"CO\",\"phoneCode\":\"57\",\"zone\":\"America/Bogota\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":\"+57-***-***-****\"},{\"country\":\"KM\",\"phoneCode\":\"269\",\"zone\":\"Indian/Comoro\",\"language\":\"ar\",\"firstDay\":null,\"phoneMask\":\"+269-**-*****\"},{\"country\":\"CK\",\"phoneCode\":\"682\",\"zone\":\"Pacific/Rarotonga\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+682-**-***\"},{\"country\":\"CR\",\"phoneCode\":\"506\",\"zone\":\"America/Costa_Rica\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":\"+506-****-****\"},{\"country\":\"HR\",\"phoneCode\":\"385\",\"zone\":\"Europe/Belgrade\",\"language\":\"hr\",\"firstDay\":\"Mo\",\"phoneMask\":\"+385-**-***-***\"},{\"country\":\"CU\",\"phoneCode\":\"53\",\"zone\":\"America/Havana\",\"language\":\"es\",\"firstDay\":null,\"phoneMask\":\"+53-*-***-****\"},{\"country\":\"CW\",\"phoneCode\":\"599\",\"zone\":\"America/Curacao\",\"language\":\"nl\",\"firstDay\":null,\"phoneMask\":\"+599-***-****\"},{\"country\":\"CY\",\"phoneCode\":\"357\",\"zone\":\"Asia/Nicosia\",\"language\":\"el\",\"firstDay\":null,\"phoneMask\":\"+357-**-***-***\"},{\"country\":\"CZ\",\"phoneCode\":\"420\",\"zone\":\"Europe/Prague\",\"language\":\"cs\",\"languageAlternative\":[\"cz\"],\"firstDay\":\"Mo\",\"phoneMask\":\"+420-***-***-***\"},{\"country\":\"CD\",\"phoneCode\":\"243\",\"zone\":\"Africa/Lagos\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+243-***-***-***\"},{\"country\":\"DK\",\"phoneCode\":\"45\",\"zone\":\"Europe/Copenhagen\",\"language\":\"da\",\"firstDay\":\"Mo\",\"phoneMask\":\"+45-**-**-**-**\"},{\"country\":\"DJ\",\"phoneCode\":\"253\",\"zone\":\"Africa/Djibouti\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+253-**-**-**-**\"},{\"country\":\"DM\",\"phoneCode\":\"1-767\",\"zone\":\"America/Port_of_Spain\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-767-***-****\"},{\"country\":\"DO\",\"phoneCode\":\"1-809\",\"zone\":\"North America\",\"language\":\"America/Santo_Domingo\",\"firstDay\":\"Su\",\"phoneMask\":[\"+1-809-***-****\",\"+1-829-***-****\",\"+1-849-***-****\"]},{\"country\":\"TL\",\"phoneCode\":\"670\",\"zone\":\"Asia/Dili\",\"language\":\"tet\",\"firstDay\":null,\"phoneMask\":[\"+670-***-****\",\"+670-77-*-*****\",\"+670-78-*-*****\"]},{\"country\":\"EC\",\"phoneCode\":\"593\",\"zone\":\"America/Guayaquil\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":[\"+593-*-***-****\",\"+593-**-***-****\"]},{\"country\":\"EG\",\"phoneCode\":\"20\",\"zone\":\"Africa/Cairo\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":\"+20-***-***-****\"},{\"country\":\"SV\",\"phoneCode\":\"503\",\"zone\":\"America/El_Salvador\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":\"+503-**-**-****\"},{\"country\":\"GQ\",\"phoneCode\":\"240\",\"zone\":\"Africa/Lagos\",\"language\":\"es\",\"firstDay\":null,\"phoneMask\":\"+240-**-***-****\"},{\"country\":\"ER\",\"phoneCode\":\"291\",\"zone\":\"Africa/Asmara\",\"language\":\"aa\",\"firstDay\":null,\"phoneMask\":\"+291-*-***-***\"},{\"country\":\"EE\",\"phoneCode\":\"372\",\"zone\":\"Europe/Tallinn\",\"language\":\"et\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+372-***-****\",\"+372-****-****\"]},{\"country\":\"ET\",\"phoneCode\":\"251\",\"zone\":\"Africa/Addis_Ababa\",\"language\":\"am\",\"firstDay\":null,\"phoneMask\":\"+251-**-***-****\"},{\"country\":\"FK\",\"phoneCode\":\"500\",\"zone\":\"Atlantic/Stanley\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+500-*****\"},{\"country\":\"FO\",\"phoneCode\":\"298\",\"zone\":\"Atlantic/Faroe\",\"language\":\"fo\",\"firstDay\":null,\"phoneMask\":\"+298-***-***\"},{\"country\":\"FJ\",\"phoneCode\":\"679\",\"zone\":\"Pacific/Fiji\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+679-**-*****\"},{\"country\":\"FI\",\"phoneCode\":\"358\",\"zone\":\"Europe/Helsinki\",\"language\":\"fi\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+358-***-***-**-*\",\"+358-***-***-**-**\"]},{\"country\":\"FR\",\"phoneCode\":\"33\",\"zone\":\"Europe/Paris\",\"language\":\"fr\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+33-***-***-***\",\"+262-*****-****\",\"+508-**-****\",\"+590-***-***-***\"]},{\"country\":\"PF\",\"phoneCode\":\"689\",\"zone\":\"Pacific/Tahiti\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+689-**-**-**\"},{\"country\":\"GA\",\"phoneCode\":\"241\",\"zone\":\"Africa/Lagos\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+241-*-**-**-**\"},{\"country\":\"GM\",\"phoneCode\":\"220\",\"zone\":\"Africa/Abidjan\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+220-***-**-**\"},{\"country\":\"GE\",\"phoneCode\":\"995\",\"zone\":\"Asia/Tbilisi\",\"language\":\"ka\",\"firstDay\":\"Mo\",\"phoneMask\":\"+995-***-***-***\"},{\"country\":\"DE\",\"phoneCode\":\"49\",\"zone\":\"Europe/Berlin\",\"language\":\"de\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+49-***-***\",\"+49-***-***-****\",\"+49-****-***-****\"]},{\"country\":\"GH\",\"phoneCode\":\"233\",\"zone\":\"Africa/Accra\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+233-***-***-***\"},{\"country\":\"GI\",\"phoneCode\":\"350\",\"zone\":\"Europe/Gibraltar\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+350-***-*****\"},{\"country\":\"GR\",\"phoneCode\":\"30\",\"zone\":\"Europe/Athens\",\"language\":\"el\",\"firstDay\":\"Mo\",\"phoneMask\":\"+30-***-***-****\"},{\"country\":\"GL\",\"phoneCode\":\"299\",\"zone\":\"America/Godthab\",\"language\":\"kl\",\"firstDay\":null,\"phoneMask\":\"+299-**-**-**\"},{\"country\":\"GD\",\"phoneCode\":\"1-473\",\"zone\":\"America/Port_of_Spain\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-473-***-****\"},{\"country\":\"GU\",\"phoneCode\":\"1-671\",\"zone\":\"Pacific/Guam\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-671-***-****\"},{\"country\":\"GT\",\"phoneCode\":\"502\",\"zone\":\"America/Guatemala\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":\"+502-*-***-****\"},{\"country\":\"GG\",\"phoneCode\":\"44-1481\",\"zone\":\"Europe/London\",\"language\":\"en\",\"firstDay\":null},{\"country\":\"GN\",\"phoneCode\":\"224\",\"zone\":\"Africa/Abidjan\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+224-**-***-***\"},{\"country\":\"GW\",\"phoneCode\":\"245\",\"zone\":\"Africa/Bissau\",\"language\":\"pt\",\"firstDay\":null,\"phoneMask\":\"+245-*-******\"},{\"country\":\"GY\",\"phoneCode\":\"592\",\"zone\":\"America/Guyana\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+592-***-****\"},{\"country\":\"HT\",\"phoneCode\":\"509\",\"zone\":\"America/Port-au-Prince\",\"language\":\"ht\",\"firstDay\":null,\"phoneMask\":\"+509-**-**-****\"},{\"country\":\"HN\",\"phoneCode\":\"504\",\"zone\":\"America/Tegucigalpa\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":\"+504-****-****\"},{\"country\":\"HK\",\"phoneCode\":\"852\",\"zone\":\"Asia/Hong_Kong\",\"language\":\"zh\",\"firstDay\":\"Su\",\"phoneMask\":\"+852-****-****\"},{\"country\":\"HU\",\"phoneCode\":\"36\",\"zone\":\"Europe/Budapest\",\"language\":\"hu\",\"firstDay\":\"Mo\",\"phoneMask\":\"+36-***-***-***\",\"nameFormat\":\"lf\"},{\"country\":\"IS\",\"phoneCode\":\"354\",\"zone\":\"Atlantic/Reykjavik\",\"language\":\"is\",\"firstDay\":\"Mo\",\"phoneMask\":\"+354-***-****\"},{\"country\":\"IN\",\"phoneCode\":\"91\",\"zone\":\"Asia/Kolkata\",\"language\":\"en\",\"firstDay\":\"Mo\",\"phoneMask\":\"+91-****-***-***\"},{\"country\":\"ID\",\"phoneCode\":\"62\",\"zone\":\"Asia/Jakarta\",\"language\":\"id\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+62-**-***-**\",\"+62-**-***-***\",\"+62-**-***-****\",\"+62-8-**-***-***\",\"+62-8-**-***-****\",\"+62-8-**-***-**-***\"]},{\"country\":\"IR\",\"phoneCode\":\"98\",\"zone\":\"Asia/Tehran\",\"language\":\"fa\",\"firstDay\":\"Sa\",\"phoneMask\":\"+98-***-***-****\"},{\"country\":\"IQ\",\"phoneCode\":\"964\",\"zone\":\"Asia/Baghdad\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":\"+964-***-***-****\"},{\"country\":\"IE\",\"firstDay\":\"Mo\",\"language\":\"en\",\"phoneCode\":\"353\",\"phoneMask\":\"+353-***-***-***\",\"zone\":\"Europe/Dublin\"},{\"country\":\"IM\",\"firstDay\":null,\"language\":\"Pound\",\"phoneCode\":\"44-1624\",\"zone\":\"Isle of Man\"},{\"country\":\"IL\",\"firstDay\":\"Su\",\"language\":\"he\",\"languageAlternative\":[\"il\"],\"phoneCode\":\"972\",\"phoneMask\":[\"+972-*-***-****\",\"+972-5-*-***-****\"],\"zone\":\"Asia/Jerusalem\"},{\"country\":\"IT\",\"firstDay\":\"Mo\",\"language\":\"it\",\"phoneCode\":\"39\",\"phoneMask\":\"+39-***-****-***\",\"zone\":\"Europe/Rome\"},{\"country\":\"CI\",\"phoneCode\":\"225\",\"zone\":\"Africa/Abidjan\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+225-**-***-***\"},{\"country\":\"JM\",\"phoneCode\":\"1-876\",\"zone\":\"America/Jamaica\",\"language\":\"en\",\"firstDay\":\"Su\",\"phoneMask\":\"+1-876-***-****\"},{\"country\":\"JP\",\"phoneCode\":\"81\",\"zone\":\"Asia/Tokyo\",\"language\":\"ja\",\"firstDay\":\"Su\",\"phoneMask\":[\"+81-***-***-***\",\"+81-**-****-****\"],\"nameFormat\":\"lf\"},{\"country\":\"JE\",\"phoneCode\":\"44-1534\",\"zone\":\"Europe/London\",\"language\":\"en\",\"firstDay\":null},{\"country\":\"JO\",\"phoneCode\":\"962\",\"zone\":\"Asia/Amman\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":\"+962-*-****-****\"},{\"country\":\"KZ\",\"phoneCode\":\"7\",\"zone\":\"Asia/Almaty\",\"language\":\"kk\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+7-6-**-***-**-**\",\"+7-7-**-***-**-**\"],\"nameFormat\":\"lf\"},{\"country\":\"KE\",\"phoneCode\":\"254\",\"zone\":\"Africa/Nairobi\",\"language\":\"en\",\"firstDay\":\"Su\",\"phoneMask\":\"+254-***-******\"},{\"country\":\"KI\",\"phoneCode\":\"686\",\"zone\":\"Pacific/Tarawa\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+686-**-***\"},{\"country\":\"XK\",\"phoneCode\":\"383\",\"zone\":\"Europe/Belgrade\",\"language\":\"sq\",\"firstDay\":\"Mo\"},{\"country\":\"KW\",\"phoneCode\":\"965\",\"zone\":\"Asia/Kuwait\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":\"+965-****-****\"},{\"country\":\"KG\",\"phoneCode\":\"996\",\"zone\":\"Asia/Bishkek\",\"language\":\"ky\",\"firstDay\":\"Mo\",\"phoneMask\":\"+996-***-***-***\"},{\"country\":\"LA\",\"phoneCode\":\"856\",\"zone\":\"Asia/Vientiane\",\"language\":\"lo\",\"firstDay\":null,\"phoneMask\":[\"+856-**-***-***\",\"+856-20-**-***-***\"]},{\"country\":\"LV\",\"phoneCode\":\"371\",\"zone\":\"Europe/Riga\",\"language\":\"lv\",\"firstDay\":\"Mo\",\"phoneMask\":\"+371-**-***-***\"},{\"country\":\"LB\",\"phoneCode\":\"961\",\"zone\":\"Asia/Beirut\",\"language\":\"ar\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+961-*-***-***\",\"+961-**-***-***\"]},{\"country\":\"LS\",\"phoneCode\":\"266\",\"zone\":\"Africa/Johannesburg\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+266-*-***-****\"},{\"country\":\"LR\",\"phoneCode\":\"231\",\"zone\":\"Africa/Monrovia\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+231-**-***-***\"},{\"country\":\"LY\",\"phoneCode\":\"218\",\"zone\":\"Africa/Tripoli\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":[\"+218-**-***-***\",\"+218-21-***-****\"]},{\"country\":\"LI\",\"phoneCode\":\"423\",\"zone\":\"Europe/Zurich\",\"language\":\"de\",\"firstDay\":null,\"phoneMask\":\"+423-***-***-****\"},{\"country\":\"LT\",\"phoneCode\":\"370\",\"zone\":\"Europe/Vilnius\",\"language\":\"lt\",\"firstDay\":\"Mo\",\"phoneMask\":\"+370-***-**-***\"},{\"country\":\"LU\",\"phoneCode\":\"352\",\"zone\":\"Europe/Luxembourg\",\"language\":\"lb\",\"firstDay\":\"Mo\",\"phoneMask\":\"+352-***-***-***\"},{\"country\":\"MO\",\"phoneCode\":\"853\",\"zone\":\"Asia/Macau\",\"language\":\"zh\",\"firstDay\":null,\"phoneMask\":\"+853-****-****\"},{\"country\":\"MK\",\"phoneCode\":\"389\",\"zone\":\"Europe/Belgrade\",\"language\":\"mk\",\"firstDay\":\"Mo\",\"phoneMask\":\"+389-**-***-***\"},{\"country\":\"MG\",\"phoneCode\":\"261\",\"zone\":\"Indian/Antananarivo\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+261-**-**-*****\"},{\"country\":\"MW\",\"phoneCode\":\"265\",\"zone\":\"Africa/Maputo\",\"language\":\"ny\",\"firstDay\":null,\"phoneMask\":[\"+265-*-****-****\",\"+265-1-***-***\"]},{\"country\":\"MY\",\"phoneCode\":\"60\",\"zone\":\"Asia/Kuala_Lumpur\",\"language\":\"ms\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+60-*-***-***\",\"+60-**-***-***\",\"+60-**-***-****\",\"+60-***-***-***\"]},{\"country\":\"MV\",\"phoneCode\":\"960\",\"zone\":\"Indian/Maldives\",\"language\":\"dv\",\"firstDay\":null,\"phoneMask\":\"+960-***-****\"},{\"country\":\"ML\",\"phoneCode\":\"223\",\"zone\":\"Africa/Abidjan\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+223-**-**-****\"},{\"country\":\"MT\",\"phoneCode\":\"356\",\"zone\":\"Europe/Malta\",\"language\":\"mt\",\"firstDay\":null,\"phoneMask\":\"+356-****-****\"},{\"country\":\"MH\",\"phoneCode\":\"692\",\"zone\":\"Pacific/Majuro\",\"language\":\"mh\",\"firstDay\":null,\"phoneMask\":\"+692-***-****\"},{\"country\":\"MR\",\"phoneCode\":\"222\",\"zone\":\"Africa/Abidjan\",\"language\":\"ar\",\"firstDay\":null,\"phoneMask\":\"+222-**-**-****\"},{\"country\":\"MU\",\"phoneCode\":\"230\",\"zone\":\"Indian/Mauritius\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+230-***-****\"},{\"country\":\"YT\",\"phoneCode\":\"262\",\"zone\":\"Indian/Mayotte\",\"language\":\"fr\",\"firstDay\":null},{\"country\":\"MX\",\"phoneCode\":\"52\",\"zone\":\"America/Mexico_City\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":[\"+52-**-**-****\",\"+52-***-***-****\"]},{\"country\":\"FM\",\"phoneCode\":\"691\",\"zone\":\"Pacific/Pohnpei\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+691-***-****\"},{\"country\":\"MD\",\"phoneCode\":\"373\",\"zone\":\"Europe/Chisinau\",\"language\":\"ro\",\"firstDay\":null,\"phoneMask\":\"+373-****-****\"},{\"country\":\"MC\",\"phoneCode\":\"377\",\"zone\":\"Europe/Monaco\",\"language\":\"fr\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+377-**-***-***\",\"+377-***-***-***\"]},{\"country\":\"MN\",\"phoneCode\":\"976\",\"zone\":\"Asia/Ulaanbaatar\",\"language\":\"mn\",\"firstDay\":\"Mo\",\"phoneMask\":\"+976-**-**-****\"},{\"country\":\"ME\",\"phoneCode\":\"382\",\"zone\":\"Europe/Belgrade\",\"language\":\"sr\",\"firstDay\":null,\"phoneMask\":\"+382-**-***-***\"},{\"country\":\"MS\",\"phoneCode\":\"1-664\",\"zone\":\"America/Port_of_Spain\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-664-***-****\"},{\"country\":\"MA\",\"phoneCode\":\"212\",\"zone\":\"Africa/Casablanca\",\"language\":\"ar\",\"firstDay\":\"Mo\",\"phoneMask\":\"+212-**-****-***\"},{\"country\":\"MZ\",\"phoneCode\":\"258\",\"zone\":\"Africa/Maputo\",\"language\":\"pt\",\"firstDay\":null,\"phoneMask\":\"+258-**-***-***\"},{\"country\":\"MM\",\"phoneCode\":\"95\",\"zone\":\"Asia/Rangoon\",\"language\":\"my\",\"firstDay\":null,\"phoneMask\":[\"+95-***-***\",\"+95-*-***-***\",\"+95-**-***-***\"]},{\"country\":\"NA\",\"phoneCode\":\"264\",\"zone\":\"Africa/Windhoek\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+264-**-***-****\"},{\"country\":\"NR\",\"phoneCode\":\"674\",\"zone\":\"Pacific/Nauru\",\"language\":\"na\",\"firstDay\":null,\"phoneMask\":\"+674-***-****\"},{\"country\":\"NP\",\"phoneCode\":\"977\",\"zone\":\"Asia/Kathmandu\",\"language\":\"ne\",\"firstDay\":null,\"phoneMask\":\"+977-**-***-***\"},{\"country\":\"NL\",\"phoneCode\":\"31\",\"zone\":\"Europe/Amsterdam\",\"language\":\"nl\",\"firstDay\":\"Mo\",\"phoneMask\":\"+31-**-***-****\"},{\"country\":\"AN\",\"phoneCode\":\"599\",\"zone\":\"America/Curacao\",\"language\":\"nl\",\"firstDay\":null,\"phoneMask\":[\"+599-***-****\",\"+599-9-***-****\"]},{\"country\":\"NC\",\"phoneCode\":\"687\",\"zone\":\"Pacific/Noumea\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+687-**-****\"},{\"country\":\"NZ\",\"phoneCode\":\"64\",\"zone\":\"Pacific/Auckland\",\"language\":\"en\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+64-**-***-***\",\"+64-***-***-***\",\"+64-***-***-****\"]},{\"country\":\"NI\",\"phoneCode\":\"505\",\"zone\":\"America/Managua\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":\"+505-****-****\"},{\"country\":\"NE\",\"phoneCode\":\"227\",\"zone\":\"Africa/Lagos\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+227-**-**-****\"},{\"country\":\"NG\",\"phoneCode\":\"234\",\"zone\":\"Africa/Lagos\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":[\"+234-**-***-**\",\"+234-**-***-***\",\"+234-***-***-****\"]},{\"country\":\"NU\",\"phoneCode\":\"683\",\"zone\":\"Pacific/Niue\",\"language\":\"niu\",\"firstDay\":null,\"phoneMask\":\"+683-****\"},{\"country\":\"KP\",\"phoneCode\":\"850\",\"zone\":\"Asia/Pyongyang\",\"language\":\"ko\",\"firstDay\":null,\"phoneMask\":[\"+850-***-***\",\"+850-**-***-***\",\"+850-****-****\",\"+850-***-****-***\",\"+850-****-*************\",\"+850-191-***-****\"]},{\"country\":\"MP\",\"phoneCode\":\"1-670\",\"zone\":\"Pacific/Saipan\",\"language\":\"fil\",\"firstDay\":null,\"phoneMask\":\"+1-670-***-****\"},{\"country\":\"NO\",\"phoneCode\":\"47\",\"zone\":\"Europe/Oslo\",\"language\":\"no\",\"firstDay\":\"Mo\",\"phoneMask\":\"+47-***-**-***\"},{\"country\":\"OM\",\"phoneCode\":\"968\",\"zone\":\"Asia/Muscat\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":\"+968-**-***-***\"},{\"country\":\"PK\",\"phoneCode\":\"92\",\"zone\":\"Asia/Karachi\",\"language\":\"ur\",\"firstDay\":\"Mo\",\"phoneMask\":\"+92-***-***-****\"},{\"country\":\"PW\",\"phoneCode\":\"680\",\"zone\":\"Pacific/Palau\",\"language\":\"pau\",\"firstDay\":null,\"phoneMask\":\"+680-***-****\"},{\"country\":\"PS\",\"phoneCode\":\"970\",\"zone\":\"Asia/Hebron\",\"language\":\"ar\",\"firstDay\":null,\"phoneMask\":\"+970-**-***-****\"},{\"country\":\"PA\",\"phoneCode\":\"507\",\"zone\":\"America/Panama\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":\"+507-***-****\"},{\"country\":\"PG\",\"phoneCode\":\"675\",\"zone\":\"Pacific/Port_Moresby\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+675-***-**-***\"},{\"country\":\"PY\",\"phoneCode\":\"595\",\"zone\":\"America/Asuncion\",\"language\":\"es\",\"firstDay\":\"Mo\",\"phoneMask\":\"+595-***-***-***\"},{\"country\":\"PE\",\"phoneCode\":\"51\",\"zone\":\"America/Lima\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":\"+51-***-***-***\"},{\"country\":\"PH\",\"phoneCode\":\"63\",\"zone\":\"Asia/Manila\",\"language\":\"tl\",\"firstDay\":\"Su\",\"phoneMask\":\"+63-***-***-****\"},{\"country\":\"PN\",\"phoneCode\":\"64\",\"zone\":\"Pacific/Pitcairn\",\"language\":\"en\",\"firstDay\":null},{\"country\":\"PL\",\"phoneCode\":\"48\",\"zone\":\"Europe/Warsaw\",\"language\":\"pl\",\"firstDay\":\"Mo\",\"phoneMask\":\"+48-***-***-***\"},{\"country\":\"PT\",\"phoneCode\":\"351\",\"zone\":\"Europe/Lisbon\",\"language\":\"pt\",\"firstDay\":\"Mo\",\"phoneMask\":\"+351-**-***-****\"},{\"country\":\"PR\",\"phoneCode\":\"1-787\",\"zone\":\"San Juan\",\"language\":\"Dollar\",\"firstDay\":\"Su\"},{\"country\":\"QA\",\"phoneCode\":\"974\",\"zone\":\"Asia/Qatar\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":\"+974-****-****\"},{\"country\":\"CG\",\"phoneCode\":\"242\",\"zone\":\"Africa/Lagos\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+242-**-***-****\"},{\"country\":\"RE\",\"phoneCode\":\"262\",\"zone\":\"Indian/Reunion\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+262-*****-****\"},{\"country\":\"RO\",\"phoneCode\":\"40\",\"zone\":\"Europe/Bucharest\",\"language\":\"ro\",\"firstDay\":\"Mo\",\"phoneMask\":\"+40-**-***-****\"},{\"country\":\"RU\",\"phoneCode\":\"7\",\"phoneWithin\":\"8\",\"zone\":\"Europe/Moscow\",\"language\":\"ru\",\"firstDay\":\"Mo\",\"phoneMask\":\"+7-***-***-**-**\",\"nameFormat\":\"lsf\"},{\"country\":\"RW\",\"phoneCode\":\"250\",\"zone\":\"Africa/Maputo\",\"language\":\"rw\",\"firstDay\":null,\"phoneMask\":\"+250-***-***-***\"},{\"country\":\"BL\",\"phoneCode\":\"590\",\"zone\":\"America/Port_of_Spain\",\"language\":\"fr\",\"firstDay\":null},{\"country\":\"SH\",\"phoneCode\":\"290\",\"zone\":\"Africa/Abidjan\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+290-****\"},{\"country\":\"KN\",\"phoneCode\":\"1-869\",\"zone\":\"America/Port_of_Spain\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-869-***-****\"},{\"country\":\"LC\",\"phoneCode\":\"1-758\",\"zone\":\"America/Port_of_Spain\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-758-***-****\"},{\"country\":\"MF\",\"phoneCode\":\"590\",\"zone\":\"America/Port_of_Spain\",\"language\":\"fr\",\"firstDay\":null},{\"country\":\"PM\",\"phoneCode\":\"508\",\"zone\":\"America/Miquelon\",\"language\":\"fr\",\"firstDay\":null},{\"country\":\"VC\",\"phoneCode\":\"1-784\",\"zone\":\"America/Port_of_Spain\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-784-***-****\"},{\"country\":\"WS\",\"phoneCode\":\"685\",\"zone\":\"Pacific/Apia\",\"language\":\"sm\",\"firstDay\":null,\"phoneMask\":\"+685-**-****\"},{\"country\":\"SM\",\"phoneCode\":\"378\",\"zone\":\"Europe/Rome\",\"language\":\"it\",\"firstDay\":null,\"phoneMask\":\"+378-****-******\"},{\"country\":\"ST\",\"phoneCode\":\"239\",\"zone\":\"Africa/Abidjan\",\"language\":\"pt\",\"firstDay\":null,\"phoneMask\":\"+239-**-*****\"},{\"country\":\"SA\",\"phoneCode\":\"966\",\"zone\":\"Asia/Riyadh\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":[\"+966-*-***-****\",\"+966-5-****-****\"]},{\"country\":\"SN\",\"phoneCode\":\"221\",\"zone\":\"Africa/Abidjan\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+221-**-***-****\"},{\"country\":\"RS\",\"phoneCode\":\"381\",\"zone\":\"Europe/Belgrade\",\"language\":\"sr\",\"firstDay\":\"Mo\",\"phoneMask\":\"+381-**-***-****\"},{\"country\":\"SC\",\"phoneCode\":\"248\",\"zone\":\"Indian/Mahe\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+248-*-***-***\"},{\"country\":\"SL\",\"phoneCode\":\"232\",\"zone\":\"Africa/Abidjan\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+232-**-******\"},{\"country\":\"SG\",\"phoneCode\":\"65\",\"zone\":\"Asia/Singapore\",\"language\":\"cmn\",\"firstDay\":\"Mo\",\"phoneMask\":\"+65-****-****\"},{\"country\":\"SX\",\"phoneCode\":\"1-721\",\"zone\":\"America/Curacao\",\"language\":\"nl\",\"firstDay\":null,\"phoneMask\":\"+1-721-***-****\"},{\"country\":\"SK\",\"phoneCode\":\"421\",\"zone\":\"Europe/Prague\",\"language\":\"sk\",\"firstDay\":\"Mo\",\"phoneMask\":\"+421-***-***-***\"},{\"country\":\"SI\",\"phoneCode\":\"386\",\"zone\":\"Europe/Belgrade\",\"language\":\"sl\",\"firstDay\":null,\"phoneMask\":\"+386-**-***-***\"},{\"country\":\"SB\",\"phoneCode\":\"677\",\"zone\":\"Pacific/Guadalcanal\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":[\"+677-*****\",\"+677-***-****\"]},{\"country\":\"SO\",\"phoneCode\":\"252\",\"zone\":\"Africa/Mogadishu\",\"language\":\"so\",\"firstDay\":null,\"phoneMask\":[\"+252-*-***-***\",\"+252-**-***-***\"]},{\"country\":\"ZA\",\"phoneCode\":\"27\",\"zone\":\"Africa/Johannesburg\",\"language\":\"zu\",\"firstDay\":\"Su\",\"phoneMask\":\"+27-**-***-****\"},{\"country\":\"KR\",\"phoneCode\":\"82\",\"zone\":\"Asia/Seoul\",\"language\":\"ko\",\"firstDay\":\"Su\",\"phoneMask\":[\"+82-**-***-****\",\"+82-**-***-****-**\"],\"nameFormat\":\"lf\"},{\"country\":\"SS\",\"phoneCode\":\"211\",\"zone\":\"Africa/Khartoum\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+211-**-***-****\"},{\"country\":\"ES\",\"phoneCode\":\"34\",\"zone\":\"Europe/Madrid\",\"language\":\"es\",\"firstDay\":\"Mo\",\"phoneMask\":\"+34-***-***-***\"},{\"country\":\"LK\",\"phoneCode\":\"94\",\"zone\":\"Asia/Colombo\",\"language\":\"si\",\"firstDay\":null,\"phoneMask\":\"+94-**-***-****\"},{\"country\":\"SD\",\"phoneCode\":\"249\",\"zone\":\"Africa/Khartoum\",\"language\":\"ar\",\"firstDay\":null,\"phoneMask\":\"+249-**-***-****\"},{\"country\":\"SR\",\"phoneCode\":\"597\",\"zone\":\"America/Paramaribo\",\"language\":\"nl\",\"firstDay\":null,\"phoneMask\":[\"+597-***-***\",\"+597-***-****\"]},{\"country\":\"SJ\",\"phoneCode\":\"47\",\"zone\":\"Europe/Oslo\",\"language\":\"no\",\"firstDay\":null},{\"country\":\"SZ\",\"phoneCode\":\"268\",\"zone\":\"Africa/Johannesburg\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+268-**-**-****\"},{\"country\":\"SE\",\"phoneCode\":\"46\",\"zone\":\"Europe/Stockholm\",\"language\":\"sv\",\"firstDay\":\"Mo\",\"phoneMask\":\"+46-**-***-****\"},{\"country\":\"CH\",\"phoneCode\":\"41\",\"zone\":\"Europe/Zurich\",\"language\":\"de\",\"firstDay\":\"Mo\",\"phoneMask\":\"+41-**-***-****\"},{\"country\":\"SY\",\"phoneCode\":\"963\",\"zone\":\"Asia/Damascus\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":\"+963-**-****-***\"},{\"country\":\"TW\",\"phoneCode\":\"886\",\"zone\":\"Asia/Taipei\",\"language\":\"zh\",\"firstDay\":\"Su\",\"phoneMask\":[\"+886-****-****\",\"+886-*-****-****\"]},{\"country\":\"TJ\",\"phoneCode\":\"992\",\"zone\":\"Asia/Dushanbe\",\"language\":\"tg\",\"firstDay\":null,\"phoneMask\":\"+992-**-***-****\"},{\"country\":\"TZ\",\"phoneCode\":\"255\",\"zone\":\"Africa/Dar_es_Salaam\",\"language\":\"sw\",\"firstDay\":null,\"phoneMask\":\"+255-**-***-****\"},{\"country\":\"TH\",\"phoneCode\":\"66\",\"zone\":\"Asia/Bangkok\",\"language\":\"th\",\"firstDay\":\"Mo\",\"phoneMask\":\"+66-**-***-****\"},{\"country\":\"TG\",\"phoneCode\":\"228\",\"zone\":\"Africa/Abidjan\",\"language\":\"fr\",\"firstDay\":null,\"phoneMask\":\"+228-**-***-***\"},{\"country\":\"TK\",\"phoneCode\":\"690\",\"zone\":\"Pacific/Fakaofo\",\"language\":\"tkl\",\"firstDay\":null,\"phoneMask\":\"+690-****\"},{\"country\":\"TO\",\"phoneCode\":\"676\",\"zone\":\"Pacific/Tongatapu\",\"language\":\"to\",\"firstDay\":null,\"phoneMask\":\"+676-*****\"},{\"country\":\"TT\",\"phoneCode\":\"1-868\",\"zone\":\"America/Port_of_Spain\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-868-***-****\"},{\"country\":\"TN\",\"phoneCode\":\"216\",\"zone\":\"Africa/Tunis\",\"language\":\"ar\",\"firstDay\":\"Mo\",\"phoneMask\":\"+216-**-***-***\"},{\"country\":\"TR\",\"phoneCode\":\"90\",\"zone\":\"Europe/Istanbul\",\"language\":\"tr\",\"firstDay\":\"Mo\",\"phoneMask\":\"+90-***-***-****\"},{\"country\":\"TM\",\"phoneCode\":\"993\",\"zone\":\"Asia/Ashgabat\",\"language\":\"tk\",\"firstDay\":null,\"phoneMask\":\"+993-*-***-****\"},{\"country\":\"TC\",\"phoneCode\":\"1-649\",\"zone\":\"America/Grand_Turk\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-649-***-****\"},{\"country\":\"TV\",\"phoneCode\":\"688\",\"zone\":\"Pacific/Funafuti\",\"language\":\"tvl\",\"firstDay\":null,\"phoneMask\":[\"+688-2-****\",\"+688-90-****\"]},{\"country\":\"VI\",\"phoneCode\":\"1-340\",\"zone\":\"America/Port_of_Spain\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+1-340-***-****\"},{\"country\":\"UG\",\"phoneCode\":\"256\",\"zone\":\"Africa/Kampala\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+256-***-***-***\"},{\"country\":\"UA\",\"phoneCode\":\"380\",\"zone\":\"Europe/Kiev\",\"language\":\"uk\",\"languageAlternative\":[\"ua\"],\"firstDay\":\"Mo\",\"phoneMask\":\"+380-**-***-**-**\"},{\"country\":\"AE\",\"phoneCode\":\"971\",\"zone\":\"Asia/Dubai\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":[\"+971-*-***-****\",\"+971-5-*-***-****\"]},{\"country\":\"UY\",\"phoneCode\":\"598\",\"zone\":\"America/Montevideo\",\"language\":\"es\",\"firstDay\":\"Mo\",\"phoneMask\":\"+598-*-***-**-**\"},{\"country\":\"UZ\",\"phoneCode\":\"998\",\"zone\":\"Asia/Tashkent\",\"language\":\"uz\",\"firstDay\":\"Mo\",\"phoneMask\":\"+998-**-***-****\"},{\"country\":\"VU\",\"phoneCode\":\"678\",\"zone\":\"Pacific/Efate\",\"language\":\"bi\",\"firstDay\":null,\"phoneMask\":[\"+678-*****\",\"+678-**-*****\"]},{\"country\":\"VA\",\"phoneCode\":\"379\",\"zone\":\"Europe/Rome\",\"language\":\"la\",\"firstDay\":null,\"phoneMask\":\"+39-6-698-*****\"},{\"country\":\"VE\",\"phoneCode\":\"58\",\"zone\":\"America/Caracas\",\"language\":\"es\",\"firstDay\":\"Su\",\"phoneMask\":\"+58-***-***-****\"},{\"country\":\"VN\",\"phoneCode\":\"84\",\"zone\":\"Asia/Ho_Chi_Minh\",\"language\":\"vi\",\"firstDay\":\"Mo\",\"phoneMask\":[\"+84-**-****-***\",\"+84-***-****-***\"],\"nameFormat\":\"fsl\"},{\"country\":\"WF\",\"phoneCode\":\"681\",\"zone\":\"Pacific/Wallis\",\"language\":\"wls\",\"firstDay\":null,\"phoneMask\":\"+681-**-****\"},{\"country\":\"EH\",\"phoneCode\":\"212\",\"zone\":\"Africa/El_Aaiun\",\"language\":\"ar\",\"firstDay\":null},{\"country\":\"YE\",\"phoneCode\":\"967\",\"zone\":\"Asia/Aden\",\"language\":\"ar\",\"firstDay\":\"Sa\",\"phoneMask\":[\"+967-*-***-***\",\"+967-**-***-***\",\"+967-***-***-***\"]},{\"country\":\"ZM\",\"phoneCode\":\"260\",\"zone\":\"Africa/Maputo\",\"language\":\"en\",\"firstDay\":null,\"phoneMask\":\"+260-**-***-****\"},{\"country\":\"ZW\",\"phoneCode\":\"263\",\"zone\":\"Africa/Maputo\",\"language\":\"en\",\"firstDay\":\"Su\",\"phoneMask\":\"+263-*-******\"},{\"country\":\"GF\",\"phoneCode\":\"594\",\"zone\":\"America/Cayenne\",\"language\":\"fr\",\"firstDay\":\"Mo\",\"phoneMask\":\"+594-*****-****\"},{\"country\":\"MQ\",\"phoneCode\":\"596\",\"zone\":\"America/Martinique\",\"language\":\"fr\",\"firstDay\":\"Mo\",\"phoneMask\":\"+596-***-**-**-**\"},{\"country\":\"NF\",\"phoneCode\":\"672-3\",\"zone\":\"Pacific/Norfolk\",\"language\":\"en\",\"firstDay\":\"Mo\",\"phoneMask\":\"+672-3-**-***\"},{\"country\":\"IC\",\"phoneCode\":\"3428\",\"zone\":\"Europe/Berlin\",\"language\":\"es\",\"firstDay\":\"Mo\"}]");
//#endregion
//#region ../functional-basic/dist/library.js
function t(e) {
	return !!(e && typeof e == "object");
}
function n(e) {
	return t(e) && !Array.isArray(e);
}
function r(e, n, r) {
	if (t(e)) {
		let t = [], i = (e, i, a) => {
			let o = n(e, i, a);
			(r || o !== void 0) && t.push(o);
		};
		if (Array.isArray(e)) e.forEach((t, n) => i(t, n, e));
		else if (e instanceof Map) e.forEach((t, n) => i(t, n, e));
		else if (e instanceof Set) e.forEach((t) => i(t, t, e));
		else for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && i(e[t], t, e);
		return t;
	}
	return [];
}
function i(e) {
	return Array.isArray(e);
}
function a(e) {
	return String(e == null ? "" : e);
}
function o(e, n = "=", s = "&", c) {
	return r(e, (r, l) => {
		let u = encodeURIComponent(a(l).trim());
		if (u !== "") {
			let l = c ? `${c}[${i(e) ? "" : u}]` : u;
			return t(r) ? o(r, n, s, l) : `${l}${n}${encodeURIComponent(a(r))}`;
		}
	}).sort().join(s);
}
function s() {
	return typeof window < "u" && !!window.document;
}
function c(e) {
	return e == null;
}
function l(e, t) {
	if (e) {
		if (t && e === "0") return !0;
		switch (typeof e) {
			case "function":
			case "symbol": return !0;
			case "object": return Array.isArray(e) ? e.length > 0 : e instanceof RegExp ? !0 : e instanceof Map || e instanceof Set ? e.size > 0 : Object.values(e).some((e) => !c(e));
			case "string": return ![
				"",
				"undefined",
				"null",
				"0",
				"false",
				"[]"
			].includes(e.trim());
			default: return !!e;
		}
	}
	return !1;
}
function u() {
	return !s() || typeof navigator > "u" || navigator.onLine;
}
function d(e) {
	return typeof e == "string";
}
function f(e, t) {
	return Math.floor(Math.random() * (t - e + 1) + e);
}
function ee(e) {
	return new Promise((t) => setTimeout(t, e));
}
var p = /^-?[0-9]+(\.[0-9]+)?$/;
function m(e) {
	switch (typeof e) {
		case "number": return Number.isFinite(e);
		case "bigint": return !0;
		case "string": return p.test(e.trim());
		default: return !1;
	}
}
var h = /[^-+\d., ]+/g, g = /( [0-9]{3}[ ,.]|[0-9] [0-9])/, te = / /g, _ = /,/g, ne = /,[0-9]{3}[,.]/, re = /[.][0-9]{3}[,.]/, ie = /[.]/g;
function v(e) {
	if (typeof e == "number") return Number.isFinite(e) && e || 0;
	if (!e) return 0;
	let t = e.replace(h, "");
	return t = g.test(t) ? t.replace(te, "").replace(_, ".") : ne.test(t) ? t.replace(_, "") : re.test(t) ? t.replace(ie, "").replace(_, ".") : t.replace(_, "."), parseFloat(t) || 0;
}
function y(e, t) {
	return c(e) ? !1 : Array.isArray(t) ? t.includes(e) : m(e) && m(t) ? v(e) === v(t) : e === t;
}
var ae = {
	"<": "&lt;",
	">": "&gt;",
	"&": "&amp;"
};
function oe(e) {
	return String(e).replace(/[<>&]/g, (e) => {
		var t;
		return (t = ae == null ? void 0 : ae[e]) == null ? e : t;
	});
}
function b(e) {
	return e instanceof Function || typeof e == "function";
}
function x(e, ...t) {
	return b(e) ? e(...t) : e;
}
function se() {
	return s() && location.href.startsWith("data:");
}
function S(e) {
	"@babel/helpers - typeof";
	return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, S(e);
}
function ce(e, t) {
	if (S(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (S(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function le(e) {
	var t = ce(e, "string");
	return S(t) == "symbol" ? t : t + "";
}
function C(e, t, n) {
	return (t = le(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var ue = class {
	constructor(e) {
		C(this, "handlers", []), e && this.addList(e);
	}
	has(e) {
		return !!this.get(e);
	}
	get(e) {
		return this.handlers.find((t) => t.group === e);
	}
	add(e, t) {
		let n = this.get(e);
		return n ? n.handlers.push(t) : this.handlers.push({
			group: e,
			handlers: [t]
		}), this;
	}
	addList(e) {
		return e.forEach((e) => e.handlers.forEach((t) => this.add(e.group, t))), this;
	}
	on(e) {
		var t;
		let n = (t = this.get(e.group)) == null ? this.get(void 0) : t;
		return n && n.handlers.forEach((t) => t(e)), this.toConsole(e), this;
	}
	toConsole(e) {
		return console.error(`Error Center: ${e.code}`), console.error("Error Center/message: ", e.message), console.error("Error Center/details", e.details), this;
	}
}, de = class {
	constructor(e, t = new ue()) {
		C(this, "causes", []), this.handler = t, e && this.addList(e);
	}
	has(e, t) {
		return !!this.get(e, t);
	}
	get(e, t) {
		return this.causes.find((n) => n.group === t && n.code === e);
	}
	add(e) {
		return this.causes.unshift(e), this;
	}
	addList(e) {
		return this.causes.unshift(...e), this;
	}
	addHandler(e, t) {
		return this.handler.add(e, t), this;
	}
	addHandlerList(e) {
		return this.handler.addList(e), this;
	}
	on(e) {
		return this.handler.on(this.assign(e)), this;
	}
	assign(e) {
		let t = this.get(e.code, e.group);
		if (t) {
			var n, r;
			return ((n = t.priority) == null ? 500 : n) > ((r = e.priority) == null ? 500 : r) ? {
				...e,
				...t
			} : {
				...t,
				...e
			};
		}
		return e;
	}
}, fe = [
	{
		group: "api",
		code: "cacheClear",
		label: "Cache Clearing Error",
		message: "An error occurred during background cache cleaning."
	},
	{
		group: "api",
		code: "cacheGet",
		label: "Cache Get Error",
		message: "Failed to retrieve data from the cache."
	},
	{
		group: "api",
		code: "cacheRemove",
		label: "Cache Remove Error",
		message: "Failed to remove data from the cache."
	},
	{
		group: "api",
		code: "cacheSet",
		label: "Cache Set Error",
		message: "Failed to save data to cache."
	},
	{
		group: "api",
		code: "forbidden",
		label: "Forbidden",
		message: "You do not have the necessary permissions to access this resource."
	},
	{
		group: "api",
		code: "notFound",
		label: "Resource Not Found",
		message: "The requested resource could not be found on the server."
	},
	{
		group: "api",
		code: "offline",
		label: "No Internet Connection",
		message: "Your device is currently offline. Please check your network settings."
	},
	{
		group: "api",
		code: "server",
		label: "Internal Server Error",
		message: "Something went wrong on our end. We are working to fix it."
	},
	{
		group: "api",
		code: "timeout",
		label: "Request Timeout",
		message: "The request took too long to complete. Please check your connection."
	},
	{
		group: "api",
		code: "unauthorized",
		label: "Unauthorized access",
		message: "Your session has expired, or you do not have permission to access this resource."
	},
	{
		group: "api",
		code: "unknown",
		label: "Unknown Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "broadcast",
		code: "error",
		label: "Broadcast Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "clipboard",
		code: "error",
		label: "Clipboard Error",
		message: "An unexpected error occurred while accessing the clipboard."
	},
	{
		group: "hydration",
		code: "error",
		label: "Hydration Error",
		message: "An error occurred during data hydration."
	},
	{
		group: "intl",
		code: "datetime",
		label: "Intl Datetime Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "intl",
		code: "invalid",
		label: "Invalid Date",
		message: "The provided date is invalid or in an incorrect format."
	},
	{
		group: "intl",
		code: "display",
		label: "Intl Display Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "intl",
		code: "number",
		label: "Intl Number Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "intl",
		code: "plural",
		label: "Intl Plural Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "intl",
		code: "relative",
		label: "Intl Relative Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "share",
		code: "error",
		label: "Share Error",
		message: "An unexpected error occurred during sharing."
	},
	{
		group: "storage",
		code: "context",
		label: "Context Missing Error",
		message: "Storage context is missing (is init() called?). Isolation failed: data will not be saved for this request."
	},
	{
		group: "storage",
		code: "error",
		label: "Storage Error",
		message: "An unexpected error occurred. Please try again later."
	},
	{
		group: "transformation",
		code: "error",
		label: "Transformation Error",
		message: "An error occurred during data transformation."
	},
	{
		group: "translate",
		code: "error",
		label: "Translate Error",
		message: "An error occurred while loading translations."
	}
], w = class {
	static getItem() {
		return this.item;
	}
	static has(e, t) {
		return this.getItem().has(e, t);
	}
	static get(e, t) {
		return this.getItem().get(e, t);
	}
	static add(e) {
		this.getItem().add(e);
	}
	static addList(e) {
		this.getItem().addList(e);
	}
	static addHandler(e, t) {
		this.getItem().addHandler(e, t);
	}
	static addHandlerList(e) {
		this.getItem().addHandlerList(e);
	}
	static on(e) {
		this.getItem().on(e);
	}
};
C(w, "item", new de(fe));
function pe(e, t) {
	return `<script id="${e.replace(/"/g, "&quot;")}" type="application/json">${JSON.stringify(t).replace(/<\/(script)>/gi, "<\\/$1>")}<\/script>`;
}
function me(e, t, n = !0) {
	if (typeof document < "u") {
		let t = document.getElementById(e);
		if (t) try {
			let e = JSON.parse(t.textContent || "");
			return n && t.remove(), e;
		} catch (t) {
			w.on({
				group: "hydration",
				code: "error",
				details: {
					id: e,
					error: t
				}
			});
		}
	}
	return t;
}
var he = "__ui:server-storage__", ge = "__ui:server:storage:id__", T = class {
	static init(e) {
		return this.listener || (this.listener = e), this;
	}
	static reset() {
		this.storage = void 0, this.listener = void 0;
	}
	static has(e) {
		return e in this.getStorage(!1, `has:${e}`);
	}
	static get(e, t, n = !1) {
		let r = this.getStorage(void 0, `get:${e}`);
		if (e in r) return r[e].value;
		if (t) return this.set(e, t, n);
	}
	static set(e, t, n = !1) {
		let r = this.getStorage(void 0, `set:${e}`), i = t();
		return r[e] = {
			value: i,
			hydration: n
		}, i;
	}
	static setErrorStatus(e) {
		this.hideError = e;
	}
	static remove(e) {
		let t = this.getStorage();
		e in t && delete t[e];
	}
	static toString() {
		return pe(ge, this.getDataForHydration());
	}
	static getStorage(e = !0, t) {
		var n;
		if (s()) return this.getStorageDom();
		let r = (n = this.listener) == null ? void 0 : n.call(this);
		if (!r) {
			var i;
			return this.hideError || w.on({
				group: "storage",
				code: "context",
				details: { status: t }
			}), e && !this.storage && (this.storage = {}), (i = this.storage) == null ? {} : i;
		}
		return he in r || (r[he] = {}), r[he];
	}
	static getStorageDom() {
		if (!this.storage) {
			let e = me(ge, {});
			this.storage = {}, r(e, (e, t) => {
				this.storage[t] = {
					value: e,
					hydration: !0
				};
			});
		}
		return this.storage;
	}
	static getDataForHydration() {
		let e = this.getStorage(void 0, "hydration"), t = {};
		return r(e, (e, n) => {
			e.hydration && (t[n] = e.value);
		}), t;
	}
};
C(T, "storage", void 0), C(T, "listener", void 0), C(T, "hideError", void 0);
var _e = "ui-storage", ve = () => T.get("__ui:data-storage__", () => ({})), E = class {
	static setPrefix(e) {
		_e = e;
	}
	constructor(e, t = !1, n = w.getItem()) {
		C(this, "value", void 0), C(this, "age", void 0), this.name = e, this.isSession = t, this.errorCenter = n;
		let r = `${t ? "session" : "storage"}#${e}`, i = ve();
		if (r in i) return i[r];
		this.make(), i[r] = this;
	}
	get(e, t) {
		if (!c(this.value) && this.isCache(t)) return this.value;
		if (e !== void 0) return this.set(e);
	}
	set(e) {
		if (this.value = x(e), this.age = Date.now(), this.value === void 0) this.remove();
		else {
			var t;
			(t = this.getMethod()) == null || t.setItem(this.getIndex(), oe(JSON.stringify({
				value: this.value,
				age: this.age
			})));
		}
		return this.value;
	}
	remove() {
		var e;
		return this.value = void 0, this.age = void 0, (e = this.getMethod()) == null || e.removeItem(this.getIndex()), this;
	}
	update() {
		return this.make(), this;
	}
	isCache(e) {
		return c(e) || this.age && this.age + e * 1e3 >= Date.now();
	}
	getMethod() {
		if (s() && !se()) {
			var e, t;
			let n = this.isSession ? (e = window) == null ? void 0 : e.sessionStorage : (t = window) == null ? void 0 : t.localStorage;
			if (n) return n;
		}
	}
	getIndex() {
		return `${_e}__${this.name}`;
	}
	getValue() {
		var e, t;
		let n = (e = this.getMethod()) == null || (t = e.getItem) == null ? void 0 : t.call(e, this.getIndex());
		if (n) try {
			return JSON.parse(n);
		} catch (e) {
			this.errorCenter.on({
				group: "storage",
				code: "error",
				details: e
			});
		}
	}
	make() {
		let e = this.getValue();
		return e ? (this.value = e.value, this.age = e.age) : (this.value = void 0, this.age = void 0), this;
	}
}, ye = "__ui:geo-code__", be$1 = class {
	constructor() {
		C(this, "storage", new E(ye)), C(this, "location", void 0), C(this, "item", void 0), C(this, "language", void 0), C(this, "timezone", (/* @__PURE__ */ new Date()).getTimezoneOffset()), this.location = this.findLocation(), this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location);
	}
	get() {
		return this.item;
	}
	getCountry() {
		return this.item.country;
	}
	getLanguage() {
		return this.language;
	}
	getStandard() {
		return this.getItem().standard;
	}
	getFirstDay() {
		return this.item.firstDay;
	}
	getLocation() {
		return this.location;
	}
	getItem() {
		return {
			...this.item,
			language: this.language,
			standard: `${this.language}-${this.item.country}`
		};
	}
	getList() {
		return e;
	}
	getByCode(e) {
		var t;
		let n;
		return e && (/([A-Z]{2}-[a-z]{2})|([a-z]{2}-[A-Z]{2})/.test(e) && (n = this.getByCodeFull(e)), !n && /[a-z]{2}/.test(e) && (n = this.getByLanguage(this.toLanguage(e))), !n && /[A-Z]{2}/.test(e) && (n = this.getByCountry(this.toCountry(e)))), this.toFull((t = n) == null ? this.getList()[0] : t);
	}
	getByCodeFull(e) {
		return this.getList().find((t) => y(e, [`${t.language}-${t.country}`, `${t.country}-${t.language}`]));
	}
	getByCountry(e) {
		return this.getList().find((t) => {
			var n;
			return t.country === e || (t == null || (n = t.countryAlternative) == null ? void 0 : n.includes(e));
		});
	}
	getByLanguage(e) {
		return this.getList().find((t) => {
			var n;
			return t.language === e || (t == null || (n = t.languageAlternative) == null ? void 0 : n.includes(e));
		});
	}
	getTimezone() {
		return this.timezone;
	}
	getTimezoneFormat() {
		let e = Math.abs(Math.trunc(this.timezone / 60)).toString().padStart(2, "0"), t = Math.abs(this.timezone % 60).toString().padStart(2, "0");
		return this.timezone >= 0 ? `-${e}:${t}` : `+${e}:${t}`;
	}
	find(e) {
		return this.getByCode(e);
	}
	toStandard(e) {
		return `${e.language}-${e.country}`;
	}
	set(e, t) {
		this.location = e, this.item = this.getByCode(this.location), this.language = this.findLanguage(this.location), t && this.storage.set(this.location);
	}
	setTimezone(e) {
		this.timezone = e;
	}
	findLocation() {
		var e;
		return s() && (this.storage.get() || ((e = document.querySelector("html")) == null ? void 0 : e.lang) || navigator.language || navigator.languages[0] || "en-GB") || "en-GB";
	}
	findLanguage(e) {
		return e && /[a-z]{2}/.test(e) ? this.toLanguage(e) : this.item.language;
	}
	toCountry(e) {
		return e.replace(/[^A-Z]+/g, "");
	}
	toLanguage(e) {
		return e.replace(/[^a-z]+/g, "");
	}
	toFull(e) {
		return {
			...e,
			standard: this.toStandard(e),
			firstDay: (e == null ? void 0 : e.firstDay) || "Mo"
		};
	}
}, D = class {
	static getObject() {
		return T.get("__ui:geo-instance__", () => new be$1());
	}
	static get() {
		return this.getObject().get();
	}
	static getCountry() {
		return this.getObject().getCountry();
	}
	static getLanguage() {
		return this.getObject().getLanguage();
	}
	static getStandard() {
		return this.getObject().getStandard();
	}
	static getFirstDay() {
		return this.getObject().getFirstDay();
	}
	static getLocation() {
		return this.getObject().getLocation();
	}
	static getItem() {
		return this.getObject().getItem();
	}
	static getList() {
		return this.getObject().getList();
	}
	static getByCode(e) {
		return this.getObject().getByCode(e);
	}
	static getByCodeFull(e) {
		return this.getObject().getByCodeFull(e);
	}
	static getByCountry(e) {
		return this.getObject().getByCountry(e);
	}
	static getByLanguage(e) {
		return this.getObject().getByLanguage(e);
	}
	static getTimezone() {
		return this.getObject().getTimezone();
	}
	static getTimezoneFormat() {
		return this.getObject().getTimezoneFormat();
	}
	static find(e) {
		return this.getObject().find(e);
	}
	static toStandard(e) {
		return this.getObject().toStandard(e);
	}
	static set(e, t) {
		this.getObject().set(e, t);
	}
	static setTimezone(e) {
		this.getObject().setTimezone(e);
	}
};
function O(e) {
	return s() && e === window;
}
function k(e) {
	if (!s()) return d(e) ? void 0 : e;
	if (O(e)) return document.body;
	if (d(e)) {
		var t;
		return (t = document.querySelector(e)) == null ? void 0 : t;
	}
	return e;
}
function xe$1(e) {
	return O(e) ? e : k(e);
}
function Se(e) {
	var t;
	return (e == null ? void 0 : e.isConnected) || !!((t = k(e)) != null && t.closest("html"));
}
function A(e) {
	return Array.isArray(e) ? e : [e];
}
var Ce = class {
	constructor(e, n = ["click"], r, i, a) {
		C(this, "element", void 0), C(this, "elementControl", void 0), C(this, "elementControlEdit", void 0), C(this, "type", void 0), C(this, "listenerRecent", (e) => {
			if (Se(this.elementControl)) {
				var n, r;
				(n = this.listener) == null || n.call(this.element, e, this.detail), t(this.options) && (r = this.options) != null && r.once && this.stop();
			} else this.stop();
		}), C(this, "activity", !1), C(this, "activityItems", []), this.listener = r, this.options = i, this.detail = a, this.element = xe$1(e), this.elementControl = k(e), this.type = A(n);
	}
	isActive() {
		return this.activity;
	}
	getElement() {
		return this.element;
	}
	setElement(e) {
		let t = xe$1(e);
		return this.elementControlEdit || (this.elementControl = k(e)), this.element = t, this.reset(), this;
	}
	setElementControl(e) {
		return this.elementControl = k(e), this.elementControlEdit = !c(this.elementControl), this.elementControlEdit || (this.elementControl = k(this.element)), this;
	}
	setType(e) {
		return this.type = A(e), this.reset(), this;
	}
	setListener(e) {
		return this.listener = e, this;
	}
	setOptions(e) {
		return this.options = e, this.reset(), this;
	}
	setDetail(e) {
		return this.detail = e, this;
	}
	dispatch(e = this.detail) {
		return this.type.forEach((t) => {
			var n;
			return (n = this.element) == null ? void 0 : n.dispatchEvent(new CustomEvent(t, { detail: e }));
		}), this;
	}
	start() {
		return !this.activity && s() && (this.activity = !0, this.activityItems = [], this.type.forEach((e) => {
			this.element && !(e === "resize" && this.makeResize()) && !(e === "scroll-sync" && this.makeScroll()) && (this.element.addEventListener(e, this.listenerRecent, this.options), this.activityItems.push({
				element: this.element,
				type: e
			}));
		})), this;
	}
	stop() {
		return this.activity && (this.activity = !1, this.activityItems.forEach(({ element: e, type: t, listener: n, observer: r }) => {
			r ? r.disconnect() : n ? e?.removeEventListener(t, n) : e?.removeEventListener(t, this.listenerRecent);
		})), this;
	}
	toggle(e) {
		return e ? this.start() : this.stop();
	}
	reset() {
		return this.activity && (this.stop(), this.start()), this;
	}
	isObserver() {
		return s() && "ResizeObserver" in window;
	}
	makeResize() {
		if (this.element && this.element instanceof HTMLElement && this.element !== document.body && this.isObserver()) {
			let e = new ResizeObserver((e) => this.listenerRecent(e == null ? void 0 : e[0]));
			return e.observe(this.element), this.activityItems.push({
				element: this.element,
				type: "resize",
				observer: e
			}), !0;
		}
		return !1;
	}
	makeScroll() {
		if (this.element) {
			let e = !1, t = (t) => {
				e || (e = !0, requestAnimationFrame(() => {
					this.listenerRecent(t), e = !1;
				}));
			};
			return this.element.addEventListener("scroll", t, this.options), this.element.addEventListener("resize", t, this.options), this.activityItems.push({
				element: this.element,
				type: "scroll",
				listener: t
			}, {
				element: this.element,
				type: "resize",
				listener: t
			}), !0;
		}
		return !1;
	}
}, we = "ui-loading", Te = class {
	constructor(e = we) {
		C(this, "value", 0), C(this, "event", void 0), C(this, "registrationList", []), this.eventName = e, s() && (this.event = new Ce(window, this.eventName));
	}
	is() {
		return this.value > 0;
	}
	get() {
		return this.value;
	}
	show() {
		this.value++, this.dispatch();
	}
	hide() {
		this.is() && (this.value--, this.dispatch());
	}
	registrationEvent(e, t) {
		if (s()) {
			let n = new Ce(window, this.eventName, e).setElementControl(t).start();
			this.registrationList.push({
				item: n,
				listener: e,
				element: t
			});
		}
	}
	unregistrationEvent(e, t) {
		this.registrationList = this.registrationList.filter((n) => n.listener === e && n.element === t ? (n.item.stop(), !1) : !0);
	}
	dispatch() {
		var e;
		(e = this.event) == null || e.dispatch({ loading: this.is() });
	}
}, j = class {
	static is() {
		return this.getItem().is();
	}
	static get() {
		return this.getItem().get();
	}
	static getItem() {
		return T.get("__ui:loading-instance__", () => new Te());
	}
	static show() {
		this.getItem().show();
	}
	static hide() {
		this.getItem().hide();
	}
	static registrationEvent(e, t) {
		this.getItem().registrationEvent(e, t);
	}
	static unregistrationEvent(e, t) {
		this.getItem().unregistrationEvent(e, t);
	}
}, Ee, De = 1440 * 60, M = class {
	static init(e, t, n, r) {
		this.getListener = e, this.setListener = t, this.removeListener = n, r && (this.cacheStepAgeClearOld = r, this.stepAgeClearOld = r);
	}
	static reset() {
		this.items = void 0, this.getListener = void 0, this.setListener = void 0, this.removeListener = void 0, this.stepAgeClearOld = this.cacheStepAgeClearOld;
	}
	static async get(e) {
		let t = await this.getItemOrListener(e);
		return this.clearOld().catch((e) => {
			w.on({
				group: "api",
				code: "cacheClear",
				details: e
			});
		}), t == null ? void 0 : t.value;
	}
	static async getByFetch(e) {
		if (!this.isCache(e)) return;
		let t = this.generateKey(e);
		return await this.get(t);
	}
	static async set(e, t, n = De) {
		let r = {
			value: t,
			age: n,
			cacheAge: Date.now()
		};
		await this.setItemOrListener(e, r);
	}
	static async setByFetch(e, t) {
		if (this.isCache(e)) {
			let n = this.generateKey(e);
			await this.set(n, t, e.cache);
		}
	}
	static async remove(e) {
		await this.removeItemOrListener(e);
	}
	static isCache(e) {
		let { cache: t, enableClientCache: n } = e;
		return s() && !n ? !1 : !!t;
	}
	static isAge(e) {
		return e ? e.age ? e.age * 1e3 + e.cacheAge >= Date.now() : !0 : !1;
	}
	static isItem(e) {
		return e in this.getList();
	}
	static generateKey(e) {
		return JSON.stringify({
			api: e.api,
			auth: e.auth,
			method: e.method,
			path: e.path,
			pathFull: e.pathFull,
			request: e.request,
			toData: e.toData,
			cacheId: e.cacheId
		});
	}
	static async getItemOrListener(e) {
		let t = this.getListener ? await this.getListener(e) : this.getList()[e];
		if (this.isAge(t)) return t;
	}
	static getList() {
		return this.items || (this.items = {}), this.items;
	}
	static async setItemOrListener(e, t) {
		let n = this.setListener ? await this.setListener(e, t) : !1;
		this.getList()[e] = {
			...t,
			value: n ? void 0 : t.value
		};
	}
	static async removeItemOrListener(e) {
		this.removeListener && await this.removeListener(e), this.isItem(e) && delete this.getList()[e];
	}
	static async clearOld() {
		if (!(this.stepAgeClearOld-- > 0) && (this.stepAgeClearOld = this.cacheStepAgeClearOld, this.items)) for (let e in this.items) {
			let t = this.items[e];
			this.isAge(t) || await this.removeItemOrListener(e);
		}
	}
};
Ee = M, C(M, "items", void 0), C(M, "getListener", void 0), C(M, "setListener", void 0), C(M, "removeListener", void 0), C(M, "cacheStepAgeClearOld", 16384), C(M, "stepAgeClearOld", Ee.cacheStepAgeClearOld);
var Oe = class {
	constructor() {
		C(this, "value", void 0);
	}
	get() {
		return this.value;
	}
	getStatus() {
		var e;
		return (e = this.get()) == null ? void 0 : e.status;
	}
	getStatusText() {
		var e;
		return (e = this.get()) == null ? void 0 : e.statusText;
	}
	getStatusType() {
		var e;
		return (e = this.get()) == null ? void 0 : e.lastStatus;
	}
	getCode() {
		var e;
		return (e = this.get()) == null ? void 0 : e.lastCode;
	}
	getError() {
		var e;
		return (e = this.get()) == null ? void 0 : e.error;
	}
	getResponse() {
		var e;
		return (e = this.get()) == null ? void 0 : e.lastResponse;
	}
	getMessage() {
		var e;
		return ((e = this.get()) == null ? void 0 : e.lastMessage) || "";
	}
	set(e) {
		return "status" in e && this.setValue("status", e.status), "statusText" in e && this.setValue("statusText", e.statusText), "error" in e && this.setValue("error", e.error), "lastResponse" in e && this.setValue("lastResponse", e.lastResponse), "lastMessage" in e && this.setValue("lastMessage", e.lastMessage), "lastStatus" in e && this.setValue("lastStatus", e.lastStatus), "lastCode" in e && this.setValue("lastCode", e.lastCode), this;
	}
	setStatus(e, t) {
		return this.set({
			status: e,
			statusText: t
		}), this;
	}
	setError(e) {
		return this.set({ error: e }), this;
	}
	setLastResponse(e) {
		return e && n(e) && ("message" in e && this.setLastMessage(String(e.message)), "status" in e && this.setLastStatus(String(e.status)), "code" in e && this.setLastCode(String(e.code))), this.set({ lastResponse: e }), this;
	}
	setLastStatus(e) {
		return this.set({ lastStatus: e }), this;
	}
	setLastCode(e) {
		return this.set({ lastCode: e }), this;
	}
	setLastMessage(e) {
		return this.set({ lastMessage: e }), this;
	}
	setValue(e, t) {
		this.value || (this.value = {}), this.value[e] = t;
	}
}, ke = [
	"success",
	"status",
	"code",
	"message"
], Ae = class {
	constructor(e, t, n) {
		C(this, "data", void 0), C(this, "dataMod", void 0), this.apiFetch = e, this.query = t, this.end = n;
	}
	async init() {
		return this.data = await this.readData(), this;
	}
	get() {
		return this.dataMod || (this.dataMod = this.initData()), this.dataMod;
	}
	getAndStatus(e) {
		let t = this.get();
		return t && n(t) ? {
			...t,
			statusObject: e.get()
		} : t;
	}
	getData() {
		return this.data;
	}
	async readData() {
		var e;
		let { queryReturn: t } = this.apiFetch, n = this.query;
		return t ? await t(n) : "data" in this.end ? this.end.data : ((e = n.headers.get("Content-Type")) == null ? "" : e).includes("application/json") ? await n.json() : { data: await n.text() };
	}
	initData() {
		let { toData: e = !0 } = this.apiFetch, t = this.getData();
		return t ? !e || !t || !n(t) || !("data" in t) ? t : t.data !== null && typeof t.data != "object" || i(t.data) ? t.data : this.initItem(t) : {};
	}
	initItem(e) {
		let t = { ...e.data };
		return ke.forEach((n) => {
			n in e && !(n in t) && (t[n] = e[n]);
		}), t;
	}
}, N = /* @__PURE__ */ function(e) {
	return e.delete = "DELETE", e.get = "GET", e.post = "POST", e.put = "PUT", e.patch = "PATCH", e;
}({}), je$1 = class {
	constructor() {
		C(this, "value", void 0);
	}
	is() {
		return !!this.value;
	}
	get() {
		return this.value;
	}
	request(e) {
		let t = this.get();
		if (l(t)) {
			if (e instanceof FormData) this.addByFormData(e, t);
			else if (n(e)) return {
				...t,
				...e
			};
		}
		return e;
	}
	set(e) {
		return this.value = e, this;
	}
	addByFormData(e, t) {
		return Object.entries(t).forEach(([t, n]) => {
			e.has(t) || e.set(t, n);
		}), this;
	}
}, Me$1 = class {
	constructor() {
		C(this, "headers", {});
	}
	get(e, t = "application/json;charset=UTF-8") {
		if (e === null) return;
		let r = { ...this.headers };
		return n(e) && Object.assign(r, e), l(t) && (r["Content-Type"] = t), r;
	}
	getByRequest(e, t, n = "application/json;charset=UTF-8") {
		return e instanceof FormData ? this.get(t, null) : this.get(t, n);
	}
	set(e) {
		return n(e) && (this.headers = e), this;
	}
}, Ne$1 = "__ui:api:hydration:id__", Pe$1 = class {
	constructor() {
		C(this, "list", []);
	}
	initResponse(e) {
		s() && e.add(this.getListByClient());
	}
	toClient(e, t) {
		let { path: n, method: r = N.get, request: i, global: a = r === N.get } = e;
		!a || !n || s() || this.list.push({
			path: n,
			method: r,
			request: i,
			response: t
		});
	}
	toString() {
		return pe(Ne$1, this.list);
	}
	getListByClient() {
		return me(Ne$1, []);
	}
}, Fe$1 = class {
	constructor() {
		C(this, "callback", void 0), C(this, "callbackEnd", void 0), C(this, "loading", !1);
	}
	async make(e, t) {
		if (e && this.callback) return this.go(t);
	}
	async makeEnd(e, t, n) {
		return e && this.callbackEnd ? await this.callbackEnd(t, n) : {};
	}
	set(e) {
		return this.callback = e, this;
	}
	setEnd(e) {
		return this.callbackEnd = e, this;
	}
	async go(e, t = 32) {
		return new Promise((n) => {
			this.loading && t > 0 ? setTimeout(() => this.go(e, t - 1).then(n), 160) : this.callback ? (this.loading = !0, this.callback(e).then(() => {
				this.loading = !1, n();
			}).catch(() => {
				this.loading = !1, n();
			})) : n();
		});
	}
};
async function Ie$1(e, ...t) {
	let n = x(e, ...t);
	return n instanceof Promise ? await n : n;
}
var Le = "d-response-loading", Re = class {
	constructor(e) {
		C(this, "first", []), C(this, "response", []), C(this, "loading", void 0), C(this, "devMode", !1), this.requestDefault = e;
	}
	get(e = "", t, n, r) {
		return this.response.find((i) => !this.isDisable(i) && this.isPath(i, e) && t === i.method && this.isFirst(i, r) && this.isResponse(i, n) ? (this.isDevMode(r) && console.warn(`Response type: ${i.path}`), this.first.push(i), !0) : !1);
	}
	getList() {
		return this.response.filter((e) => e.isForGlobal !== !0);
	}
	add(e) {
		return this.response.push(...A(e)), this;
	}
	setDevMode(e) {
		return this.devMode = e, this;
	}
	async emulator(e) {
		let t = this.readData(e);
		if (t) {
			let { path: n = "", devMode: r = !1 } = e, i = await this.fetch(t.response, t.request);
			return this.isDevMode(r) && console.warn("Response data:", n, t.request, i), i;
		}
	}
	emulatorAsync(e) {
		let t = this.readData(e);
		if (t) return this.fetchAsync(t.response);
	}
	isDisable(e) {
		return !!x(e == null ? void 0 : e.disable);
	}
	isPath(e, t) {
		return t === e.path || !!(e.path instanceof RegExp && e.path.test(t));
	}
	isDevMode(e) {
		return e || this.devMode;
	}
	isFirst(e, t) {
		return this.first.indexOf(e) === -1 || this.isDevMode(t);
	}
	isResponse(e, t) {
		let r = this.requestDefault.request(e == null ? void 0 : e.request);
		return t === r || r === "*any" || l(t) && l(r) && n(t) && n(r) && !(t instanceof FormData) && !(r instanceof FormData) && Object.values(t).length === Object.values(r).length && Object.entries(r).every(([e, n]) => n === (t == null ? void 0 : t[e]) || n === "*any");
	}
	readData(e) {
		if (!s()) return;
		let { path: t = "", method: n = N.get, global: r = n === N.get, devMode: i = !1 } = e;
		if (r || this.isDevMode(i)) {
			let r = this.requestDefault.request(e.request), a = this.get(t, n, r, i);
			if (a) return {
				response: a,
				request: r
			};
		}
	}
	fetch(e, t) {
		return this.startResponseLoading(), new Promise((n) => {
			Ie$1(b(e.response) ? e.response(t) : e.response).then((t) => {
				e != null && e.lag ? (j.show(), setTimeout(() => {
					this.stopResponseLoading(), n(t), j.hide();
				}, f(0, 2e3))) : (this.stopResponseLoading(), n(t));
			});
		});
	}
	fetchAsync(e) {
		return e.response;
	}
	startResponseLoading() {
		this.loading && clearTimeout(this.loading), s() && document.body.classList.add(Le);
	}
	stopResponseLoading() {
		s() && (this.loading = setTimeout(() => {
			this.loading = void 0, document.body.classList.remove(Le);
		}, 2400));
	}
}, ze = class {
	constructor(e = "/api/", t = {}) {
		C(this, "headers", void 0), C(this, "requestDefault", void 0), C(this, "status", void 0), C(this, "response", void 0), C(this, "preparation", void 0), C(this, "loading", void 0), C(this, "errorCenter", void 0), C(this, "hydration", void 0), C(this, "timeout", 16e3), C(this, "origin", void 0), this.url = e;
		let { headersClass: n = Me$1, requestDefaultClass: r = je$1, statusClass: i = Oe, responseClass: a = Re, preparationClass: o = Fe$1, loadingClass: s = j.getItem(), errorCenterClass: c = w.getItem(), hydrationClass: l = Pe$1 } = t;
		this.headers = new n(), this.requestDefault = new r(), this.status = new i(), this.response = new a(this.requestDefault), this.preparation = new o(), this.loading = s, this.errorCenter = c, this.hydration = new l(), this.hydration.initResponse(this.response);
	}
	isLocalhost() {
		return s() && typeof location < "u" && location.hostname === "localhost";
	}
	getStatus() {
		return this.status;
	}
	getResponse() {
		return this.response;
	}
	getHydration() {
		return this.hydration;
	}
	getOrigin() {
		return this.origin && /^\//.test(this.url) ? `${this.origin}${this.url}` : this.url;
	}
	getUrl(e, t = !0) {
		return `${t ? this.getOrigin() : ""}${e}`.replace("{locale}", D.getLocation()).replace("{country}", D.getCountry()).replace("{language}", D.getLanguage());
	}
	getBody(e = {}, t = N.get) {
		if (e instanceof FormData) return e;
		if (t !== N.get && l(e)) return d(e) ? e : JSON.stringify(e);
	}
	getBodyForGet(e, t = "", n = N.get) {
		if (n === N.get) {
			let n = t.match(/\?/) ? "&" : "?", r = typeof e == "object" ? o(e) : e;
			if (l(r)) return `${n}${r}`;
		}
		return "";
	}
	getHydrationScript() {
		return this.hydration.toString();
	}
	setHeaders(e) {
		return this.headers.set(e), this;
	}
	setRequestDefault(e) {
		return this.requestDefault.set(e), this;
	}
	setUrl(e) {
		return this.url = e, this;
	}
	setPreparation(e) {
		return this.preparation.set(e), this;
	}
	setEnd(e) {
		return this.preparation.setEnd(e), this;
	}
	setTimeout(e) {
		return this.timeout = e, this;
	}
	setOrigin(e) {
		return this.origin = e, this;
	}
	async request(e) {
		return d(e) ? await this.fetch({ path: e }) : await this.fetch(e);
	}
	get(e) {
		return this.request({
			...e,
			method: N.get
		});
	}
	post(e) {
		return this.request({
			...e,
			method: N.post
		});
	}
	put(e) {
		return this.request({
			...e,
			method: N.put
		});
	}
	patch(e) {
		return this.request({
			...e,
			method: N.patch
		});
	}
	delete(e) {
		return this.request({
			...e,
			method: N.delete
		});
	}
	getRetryDelay(e, t) {
		return f(t, t + e * t);
	}
	async fetch(e, t = 0) {
		let { api: n = !0, path: r = "", hideError: i = !1, hideLoading: a = !1, retry: o = 0, retryDelay: s = 64, globalPreparation: c = !0, globalEnd: l = !0, endResetLimit: u = 8 } = e, d = this.getUrl(r, n), f = await this.response.emulator(e);
		if (f) return f;
		let p = await M.getByFetch(e);
		if (p) return this.hydration.toClient(e, p), p;
		let m = new Oe(), h;
		a || this.loading.show();
		try {
			await this.preparation.make(c, e);
			let { query: n, timeoutId: r } = await this.makeQuery(e, d);
			r && clearTimeout(r);
			let f = await this.preparation.makeEnd(l, n, e);
			if (m.setStatus(n.status, n.statusText), this.status.setStatus(n.status, n.statusText), !i && n.status >= 400 && this.makeErrorQuery(n), f != null && f.reset && t < u || t < o) return await ee(this.getRetryDelay(t, s)), a || this.loading.hide(), await this.fetch(e, t + 1);
			h = new Ae(e, n, f), await h.init();
		} catch (e) {
			throw i || this.makeError(e), m.setError(String(e)), this.status.setError(String(e)), a || this.loading.hide(), e;
		}
		m.setLastResponse(h.getData()), this.status.setLastResponse(h.getData());
		let g = h.getAndStatus(m);
		return a || this.loading.hide(), this.hydration.toClient(e, g), await M.setByFetch(e, g), g;
	}
	async makeQuery(e, t) {
		let n = this.requestDefault.request(e.request), { pathFull: r = void 0, method: i = N.get, headers: a = {}, type: o = "application/json;charset=UTF-8", init: s = {} } = e, c = r == null ? t : r, l = `${c}${this.getBodyForGet(n, c, i)}`, u = this.headers.getByRequest(e.request, a, o), d = {
			...s,
			method: i,
			body: this.getBody(n, i)
		};
		if (u) {
			var f;
			d.headers = {
				...u,
				...(f = s.headers) == null ? {} : f
			};
		}
		let ee = this.initController(e, d);
		return {
			query: await fetch(l, d),
			timeoutId: ee
		};
	}
	makeError(e, t = "api") {
		switch (e.name) {
			case "TimeoutError":
				this.errorCenter.on({
					group: t,
					code: "timeout",
					details: e
				});
				break;
			case "AbortError": break;
			default: u() ? this.errorCenter.on({
				group: t,
				code: "unknown",
				details: e
			}) : this.errorCenter.on({
				group: t,
				code: "offline",
				details: e
			});
		}
	}
	makeErrorQuery(e) {
		switch (e.status) {
			case 401:
				this.errorCenter.on({
					group: "api",
					code: "unauthorized",
					details: e
				});
				break;
			case 403:
				this.errorCenter.on({
					group: "api",
					code: "forbidden",
					details: e
				});
				break;
			case 404:
				this.errorCenter.on({
					group: "api",
					code: "notFound",
					details: e
				});
				break;
			case 500:
				this.errorCenter.on({
					group: "api",
					code: "server",
					details: e
				});
				break;
			default: this.errorCenter.on({
				group: "api-server",
				code: String(e.status),
				details: e
			});
		}
	}
	initController(e, t) {
		let { timeout: n = this.timeout, controller: r } = e;
		if (n && !r && typeof AbortSignal < "u" && typeof AbortSignal.timeout == "function") {
			t.signal = AbortSignal.timeout(n);
			return;
		}
		if (!n && r) {
			t.signal = r.signal;
			return;
		}
		if (n) {
			let e = r == null ? new AbortController() : r;
			return t.signal = e.signal, setTimeout(() => {
				e.abort(new DOMException("Timeout", "TimeoutError"));
			}, n);
		}
	}
}, P = class {
	static isLocalhost() {
		return this.getItem().isLocalhost();
	}
	static getItem() {
		return T.get("__ui:api-instance__", () => new ze());
	}
	static getStatus() {
		return this.getItem().getStatus();
	}
	static getResponse() {
		return this.getItem().getResponse();
	}
	static getHydration() {
		return this.getItem().getHydration();
	}
	static getHydrationScript() {
		return this.getItem().getHydrationScript();
	}
	static getOrigin() {
		return this.getItem().getOrigin();
	}
	static getUrl(e, t = !0) {
		return this.getItem().getUrl(e, t);
	}
	static getBody(e = {}, t = N.get) {
		return this.getItem().getBody(e, t);
	}
	static getBodyForGet(e, t = "", n = N.get) {
		return this.getItem().getBodyForGet(e, t, n);
	}
	static setHeaders(e) {
		this.getItem().setHeaders(e);
	}
	static setRequestDefault(e) {
		this.getItem().setRequestDefault(e);
	}
	static setUrl(e) {
		this.getItem().setUrl(e);
	}
	static setPreparation(e) {
		this.getItem().setPreparation(e);
	}
	static setEnd(e) {
		this.getItem().setEnd(e);
	}
	static setTimeout(e) {
		this.getItem().setTimeout(e);
	}
	static setOrigin(e) {
		this.getItem().setOrigin(e);
	}
	static setConfig(e) {
		e && n(e) && (e.urlRoot && this.setUrl(e.urlRoot), e.headers && this.setHeaders(e.headers), e.requestDefault && this.setRequestDefault(e.requestDefault), e.preparation && this.setPreparation(e.preparation), e.end && this.setEnd(e.end), e.timeout && this.setTimeout(e.timeout), e.origin && this.setOrigin(e.origin));
	}
	static async request(e) {
		return this.getItem().request(e);
	}
	static get(e) {
		return this.getItem().get(e);
	}
	static post(e) {
		return this.getItem().post(e);
	}
	static put(e) {
		return this.getItem().put(e);
	}
	static patch(e) {
		return this.getItem().patch(e);
	}
	static delete(e) {
		return this.getItem().delete(e);
	}
};
function F(e, n = !0, r = !0) {
	var a;
	if (d(e)) return r ? e.trim() : e;
	if (c(e)) return "";
	if (i(e) && !e.some((e) => t(e)) && n) return e.join(",");
	if (t(e)) try {
		return JSON.stringify(e);
	} catch (t) {
		return String(e);
	}
	return e === !0 ? "1" : e === !1 ? "0" : (a = e == null ? void 0 : e.toString()) == null ? "" : a;
}
function Ge(e, t, n) {
	let r = F(e);
	if (!n || n <= 0) return r.split(t);
	let i = r.split(t, n), a = r.split(t);
	return i.length === a.length ? i : (i.pop(), [...i, a.slice(n - 1).join(t)]);
}
function Ke(e, t = !1) {
	if (typeof e == "string") {
		let r = e.trim();
		switch (r) {
			case "undefined": return;
			case "null": return null;
			case "true": return !0;
			case "false": return !1;
			default:
				var n;
				if (/^[{[]/.exec(r)) try {
					return JSON.parse(r);
				} catch (e) {
					w.on({
						group: "transformation",
						code: "error",
						details: e
					});
				}
				else if (/^-?[0-9]+\.[0-9]+$/.exec(r)) return parseFloat(r);
				else if (/^-?[0-9]+$/.exec(r)) return parseInt(r, 10);
				else if (t && s() && typeof ((n = window) == null ? void 0 : n[r]) == "function") return window[r];
		}
	}
	return e;
}
var qe = "__ui:cookie-block__", Je = class {
	constructor() {
		C(this, "storage", new E(qe));
	}
	get() {
		var e;
		return (e = this.storage.get()) == null ? !1 : e;
	}
	set(e) {
		this.storage.set(e);
	}
}, Ye = class {
	static getItem() {
		return T.get("__ui:cookie-block__", () => new Je());
	}
	static get() {
		return this.getItem().get();
	}
	static set(e) {
		this.getItem().set(e);
	}
}, Xe = "__ui:cookie-storage__", I = class {
	static init(e, t, n) {
		this.getListener = e, this.getListenerRaw = t, this.setListener = n;
	}
	static reset() {
		this.getListener = void 0, this.getListenerRaw = void 0, this.setListener = void 0;
	}
	static get(e, t) {
		var n, r;
		let i = (n = (r = this.getListener) == null ? void 0 : r.call(this, e)) == null ? this.initItems()[e] : n;
		return i === void 0 && t !== void 0 ? this.set(e, t) : Ke(i);
	}
	static set(e, t, n) {
		let r = x(t);
		if (Ye.get()) return r;
		let i = F(r, !1);
		return this.setListener ? this.setListener(e, i, this.format(e, i, n), n) : (this.initItems()[e] = i === "" ? void 0 : r, this.hasDom() && (document.cookie = this.format(e, i, n))), r;
	}
	static remove(e) {
		this.set(e, "", { age: -1 });
	}
	static update() {
		s() && (T.remove(Xe), this.initItems());
	}
	static format(e, t, n) {
		return [
			`${encodeURIComponent(e)}=${encodeURIComponent(t)}`,
			this.toMaxAge(t, n == null ? void 0 : n.age),
			this.toSameSite(n == null ? void 0 : n.sameSite),
			this.toPath(n == null ? void 0 : n.path),
			this.toDomain(n == null ? void 0 : n.domain),
			this.toSecure(n == null ? void 0 : n.secure),
			this.toHttpOnly(n == null ? void 0 : n.httpOnly),
			this.toPartitioned(n == null ? void 0 : n.partitioned),
			...this.toArguments(n == null ? void 0 : n.arguments)
		].filter(Boolean).join("; ");
	}
	static hasDom() {
		return s() && !se();
	}
	static parse(e) {
		let t = {};
		for (let n of e.split(";")) {
			let [e, r] = Ge(n.trim(), "=", 2);
			e && l(r) && (t[e] = r);
		}
		return t;
	}
	static initItems() {
		return T.get(Xe, () => {
			var e;
			if (this.hasDom()) return this.parse(document.cookie);
			let t = (e = this.getListenerRaw) == null ? void 0 : e.call(this);
			return l(t) ? this.parse(t) : {};
		});
	}
	static toMaxAge(e, t) {
		return `Max-Age=${encodeURIComponent(e === "" ? -1 : t == null ? 10080 * 60 : t)}`;
	}
	static toSameSite(e) {
		return `SameSite=${encodeURIComponent(e == null ? "Strict" : e)}`;
	}
	static toPath(e) {
		return `Path=${encodeURIComponent(e == null ? "/" : e)}`;
	}
	static toDomain(e) {
		return e ? `Domain=${encodeURIComponent(e)}` : void 0;
	}
	static toSecure(e) {
		return e ? "Secure" : void 0;
	}
	static toHttpOnly(e) {
		return e ? "HttpOnly" : void 0;
	}
	static toPartitioned(e) {
		return e ? "Partitioned" : void 0;
	}
	static toArguments(e) {
		return e === void 0 ? [] : Array.isArray(e) ? e : Object.entries(e).map(([e, t]) => `${e}=${F(t)}`);
	}
};
C(I, "getListener", void 0), C(I, "getListenerRaw", void 0), C(I, "setListener", void 0);
function L$1(e) {
	var t, n, r, i, a, o, s, l;
	if (e instanceof Date) return e;
	if (c(e)) return /* @__PURE__ */ new Date();
	if (typeof e == "number") return new Date(e);
	let u = e, d = D.getTimezoneFormat().trim();
	e.replace(/^([\s\S]+)([-+]\d{2}:?\d{2})$/, (e, t, n) => (u = t, d = n.trim(), e));
	let f = (t = (n = (r = (i = (a = (o = (s = (l = /^\d{4}\d{2}\d{2}$/.exec(u) && `${u.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")}T00:00:00`) == null ? /^\d{4}\d{2}$/.exec(u) && `${u.replace(/^(\d{4})(\d{2})$/, "$1-$2")}-01T00:00:00` : l) == null ? /^\d{4}\d{2}\d{2} \d{2}:\d{2}:\d{2}$/.exec(u) && u.replace(/^(\d{4})(\d{2})(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, "$1-$2-$3T$4:$5:$6") : s) == null ? /^\d{4}-\d{2}-\d{2}$/.exec(u) && `${u}T00:00:00` : o) == null ? /^\d{4}-\d{2}$/.exec(u) && `${u}-01T00:00:00` : a) == null ? /^\d{4}$/.exec(u) && `${u}-01-01T00:00:00` : i) == null ? /^\d{2}:\d{2}$/.exec(u) && `2000-01-01T${u}:00` : r) == null ? /^\d{2}:\d{2}:\d{2}$/.exec(u) && `2000-01-01T${u}` : n) == null ? u.replace(" ", "T") : t;
	return /* @__PURE__ */ new Date(`${f.trim()}${d}`);
}
function $e(e, t) {
	return r(e, (e) => e == null ? void 0 : e[t], !0);
}
var R$1 = class e {
	static isItem(e = D.getLocation()) {
		return this.getLocation(e) in B;
	}
	static getLocation(e = D.getLocation()) {
		if (e in z$1) return z$1[e];
		let t = D.find(e);
		return z$1[e] = t.standard, t.standard;
	}
	static getInstance(t = D.getLocation()) {
		let n = this.getLocation(t);
		return n in B ? B[n] : new e(t);
	}
	constructor(e = D.getLocation(), t = w.getItem()) {
		C(this, "geo", void 0), this.errorCenter = t, this.geo = D.find(e);
		let n = this.getLocation();
		if (n in B) return B[n];
		z$1[e] = n, B[n] = this;
	}
	getLocation() {
		return this.geo.standard;
	}
	getFirstDay() {
		return this.geo.firstDay;
	}
	display(e, t) {
		var n, r;
		let i = { type: "language" }, a;
		t && (typeof t == "string" ? i.type = t : i = {
			...i,
			...t
		});
		try {
			typeof Intl < "u" && (e ? a = new Intl.DisplayNames(this.getLocation(), i).of(e) : i.type === "language" ? a = new Intl.DisplayNames(this.getLocation(), i).of(this.geo.language) : i.type === "region" && (a = new Intl.DisplayNames(this.getLocation(), i).of(this.geo.country)));
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "display",
				details: e
			});
		}
		return (n = (r = a) == null ? e : r) == null ? "" : n;
	}
	languageName(e, t) {
		let n = {
			type: "language",
			style: t
		};
		return this.display(D.getByCode(e).language, n);
	}
	countryName(e, t) {
		let n = {
			type: "region",
			style: t
		};
		return this.display(e, n);
	}
	fullName(e, t, n, r) {
		var i, a;
		let o = (i = (a = this.geo) == null ? void 0 : a.nameFormat) == null ? "fl" : i, s = r ? t[0].toUpperCase() + "." : t, c = r ? (n == null ? void 0 : n[0].toUpperCase()) + "." : n, l;
		switch (o) {
			case "fsl":
				l = `${s}${c ? ` ${c}` : ""} ${e}`;
				break;
			case "lf":
				l = `${e} ${s}`;
				break;
			case "lsf":
				l = `${e}${c ? ` ${c}` : ""} ${s}`;
				break;
			default:
				l = `${s} ${e}`;
				break;
		}
		return l;
	}
	number(e, t) {
		var n, r;
		return ((n = this.numberObject(t)) == null || (r = n.format) == null ? void 0 : r.call(n, v(e))) || e.toString();
	}
	decimal() {
		var e, t, n;
		return ((e = this.numberObject()) == null || (t = e.formatToParts) == null || (t = t.call(e, 1.2)) == null || (n = t.find) == null || (n = n.call(t, (e) => e.type === "decimal")) == null ? void 0 : n.value) || ".";
	}
	currency(e, t, n = !1) {
		let r = {
			style: "currency",
			currencyDisplay: "symbol",
			...typeof t == "string" ? { currency: t } : t || {}
		}, i = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]{3})$/i, (...e) => (r.currency = String(e[2]).toUpperCase(), String(e[1])));
		if (n) {
			let t = this.numberObject(r);
			return t ? $e(t.formatToParts(v(e)).filter((e) => ["literal", "currency"].indexOf(e.type) === -1), "value").join("") : e.toString();
		} else if ("currency" in r) return this.number(typeof e == "number" ? e : i, r);
		else return this.number(typeof e == "number" ? e : i, {
			...r,
			style: "decimal"
		});
	}
	currencySymbol(e, t = "symbol") {
		var n, r, i;
		return ((n = this.numberObject({
			style: "currency",
			currencyDisplay: t,
			currency: e
		})) == null || (r = n.formatToParts) == null || (r = r.call(n, 100)) == null || (i = r.find) == null || (i = i.call(r, (e) => e.type === "currency")) == null ? void 0 : i.value) || e;
	}
	unit(e, t) {
		let n = {
			style: "unit",
			...typeof t == "string" ? { unit: t } : t || {}
		}, r = e.toString().replace(/^([\S\s]+[\d ])([a-zA-Z]+)$/i, (...e) => (n.unit = String(e[2]).toLowerCase(), String(e[1])));
		return this.number(r, n);
	}
	sizeFile(e, t = "byte") {
		let n = v(e);
		if (n > 1024 && d(t)) switch (t) {
			case "byte": return this.sizeFile(n / 1024, "kilobyte");
			case "kilobyte": return this.sizeFile(n / 1024, "megabyte");
			case "megabyte": return this.sizeFile(n / 1024, "gigabyte");
			case "gigabyte": return this.sizeFile(n / 1024, "terabyte");
			case "terabyte": return this.sizeFile(n / 1024, "petabyte");
		}
		return this.unit(e, t);
	}
	percent(e, t) {
		return this.number(e, {
			style: "percent",
			...t || {}
		});
	}
	percentBy100(e, t) {
		return this.percent(v(e) / 100, t);
	}
	plural(e, t, n, r) {
		var i;
		let a = v(e), o = t.split("|");
		if (o.length > 1) try {
			if (typeof Intl < "u") {
				var s;
				let e = new Intl.PluralRules(this.getLocation(), n).select(a), t;
				switch (e) {
					case "zero":
						t = o[o.length - 1];
						break;
					case "one":
						t = o == null ? void 0 : o[0];
						break;
					case "two":
						t = o == null ? void 0 : o[1];
						break;
					case "few":
						t = o != null && o[3] ? o == null ? void 0 : o[2] : o == null ? void 0 : o[1];
						break;
					case "many":
						t = (o == null ? void 0 : o[3]) || (o == null ? void 0 : o[2]) || (o == null ? void 0 : o[1]);
						break;
					case "other":
						t = o.length === 6 ? o[o.length - 2] : o[o.length - 1];
						break;
				}
				return `${this.number(a, r)} ${(s = t) == null ? "" : s}`.trim();
			}
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "plural",
				details: e
			});
		}
		return `${this.number(a, r)} ${(i = o == null ? void 0 : o[0]) == null ? "" : i}`.trim();
	}
	date(e, t, n, r) {
		let i = L$1(e), a = typeof n == "string", o = this.dateOptions(t, a ? n : "short");
		return r && (o.hour12 = !1), a || Object.assign(o, n), i.toLocaleString(this.getLocation(), o);
	}
	relative(e, t, n) {
		let r = L$1(e), i = n || /* @__PURE__ */ new Date(), a = {
			numeric: "auto",
			...typeof t == "string" ? { style: t } : t || {}
		}, o = "second", s = (r.getTime() - i.getTime()) / 1e3;
		return Math.abs(s) >= 60 && (o = "minute", s /= 60, Math.abs(s) >= 60 && (o = "hour", s /= 60, Math.abs(s) >= 24 && (o = "day", s /= 24, Math.abs(s) >= 30 && (o = "month", s /= 30, Math.abs(s) >= 12 && (o = "year", s /= 12))))), this.relativeByValue(s, o, a);
	}
	relativeLimit(e, t, n, r, i, a, o) {
		let s = L$1(e), c = n || /* @__PURE__ */ new Date(), l = new Date(c), u = new Date(c);
		return l.setDate(c.getDate() - t), u.setDate(c.getDate() + t), s >= l && s <= u ? this.relative(s, r, c) : this.date(s, a, i, o);
	}
	relativeByValue(e, t, n) {
		let r = {
			numeric: "auto",
			...typeof n == "string" ? { style: n } : n || {}
		};
		try {
			if (this.hasIntl() && Intl.RelativeTimeFormat !== void 0) return new Intl.RelativeTimeFormat(this.getLocation(), r).format(Math.round(v(e)), t);
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "relative",
				details: e
			});
		}
		return "";
	}
	month(e, t) {
		try {
			if (this.hasIntlDateTimeFormat()) return Intl.DateTimeFormat(this.getLocation(), { month: t || "long" }).format(L$1(e));
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "datetime",
				details: e
			});
		}
		return "";
	}
	months(e) {
		let t = [{
			label: "",
			value: void 0
		}];
		try {
			if (this.hasIntlDateTimeFormat()) {
				let n = /* @__PURE__ */ new Date(), r = new Intl.DateTimeFormat(this.getLocation(), { month: e || "long" });
				for (let e = 0; e < 12; e++) n.setMonth(e), t.push({
					label: r.format(n).replace(/^./, (e) => e.toUpperCase()),
					value: e + 1
				});
			}
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "datetime",
				details: e
			});
		}
		return t;
	}
	weekday(e, t) {
		try {
			if (this.hasIntlDateTimeFormat()) return new Intl.DateTimeFormat(this.getLocation(), { weekday: t || "long" }).format(L$1(e));
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "datetime",
				details: e
			});
		}
		return "";
	}
	weekdays(e) {
		let t = [{
			label: "",
			value: void 0
		}];
		try {
			if (this.hasIntlDateTimeFormat()) {
				let n = /* @__PURE__ */ new Date(), r = new Intl.DateTimeFormat(this.getLocation(), { weekday: e || "long" }), i = n.getDay() + (this.geo.firstDay === "Mo" ? -1 : 1);
				n.setDate(n.getDate() - i);
				for (let e = 0; e < 7; e++) t.push({
					label: r.format(n).replace(/^./, (e) => e.toUpperCase()),
					value: n.getDay()
				}), n.setDate(n.getDate() + 1);
			}
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "datetime",
				details: e
			});
		}
		return t;
	}
	time(e) {
		return this.date(e, "time");
	}
	sort(e, t = (e, t) => [e, t]) {
		if (this.hasIntl() && Intl.Collator !== void 0) {
			let n = new Intl.Collator(this.getLocation());
			return e.sort((e, r) => n.compare(...t(e, r)));
		}
		return e;
	}
	hasIntl() {
		return typeof Intl < "u";
	}
	hasIntlDateTimeFormat() {
		return this.hasIntl() && Intl.DateTimeFormat !== void 0;
	}
	numberObject(e) {
		try {
			if (this.hasIntl() && Intl.NumberFormat !== void 0) return new Intl.NumberFormat(this.getLocation(), e);
		} catch (e) {
			this.errorCenter.on({
				group: "intl",
				code: "number",
				details: e
			});
		}
	}
	dateOptions(e, t = "short") {
		let n = {};
		return [
			"full",
			"datetime",
			"date",
			void 0,
			"year-month",
			"year"
		].indexOf(e) !== -1 && (n.year = "numeric"), [
			"full",
			"datetime",
			"date",
			void 0,
			"year-month",
			"month",
			"day-month"
		].indexOf(e) !== -1 && (n.month = t), [
			"full",
			"datetime",
			"date",
			void 0,
			"day",
			"day-month"
		].indexOf(e) !== -1 && (n.day = "2-digit"), e !== void 0 && ([
			"full",
			"datetime",
			"time",
			"hour-minute",
			"hour"
		].indexOf(e) !== -1 && (n.hour = "2-digit"), [
			"full",
			"datetime",
			"time",
			"hour-minute",
			"minute"
		].indexOf(e) !== -1 && (n.minute = "2-digit"), [
			"full",
			"time",
			"second"
		].indexOf(e) !== -1 && (n.second = "2-digit")), n;
	}
}, z$1 = {}, B = {};
function V(e, n) {
	var r;
	if (!l(n, !0)) return;
	let i = Ge(n, ".", 2), a = i[0];
	return a && e != null && e[a] && t(e[a]) && i != null && i[1] ? V(e[a], i[1]) : (r = e == null ? void 0 : e[a]) == null ? void 0 : r;
}
C(class e {
	constructor(e = D.getLocation()) {
		this.code = e;
	}
	get(t = this.code) {
		let n = D.find(t);
		if (n) {
			var r;
			let t = this.getCountry(n);
			return {
				language: this.getLanguage(n),
				country: t,
				standard: n.standard,
				icon: (r = e.flags) == null ? void 0 : r[n.country],
				label: t,
				value: n.country
			};
		}
	}
	getFlag(e = this.code) {
		var t;
		return (t = this.get(e)) == null ? void 0 : t.icon;
	}
	getList(e) {
		return r(this.getCodes(e), (e) => this.get(e));
	}
	getNational(t) {
		return r(this.getList(t), (t) => {
			let n = new e(t.standard).get(t.standard);
			return {
				...t,
				description: n == null ? void 0 : n.country,
				nationalLanguage: n == null ? void 0 : n.language,
				nationalCountry: n == null ? void 0 : n.country
			};
		});
	}
	setCode(e) {
		return this.code = e, this;
	}
	getLocation() {
		return new R$1(this.code);
	}
	getCodes(t) {
		return t == null ? Object.keys(e.flags) : t;
	}
	getLanguage(e) {
		return this.getLocation().languageName(e.language);
	}
	getCountry(e) {
		return this.getLocation().countryName(e.country);
	}
}, "flags", {
	AD: "f-ad",
	AE: "f-ae",
	AF: "f-af",
	AG: "f-ag",
	AI: "f-ai",
	AL: "f-al",
	AM: "f-am",
	AN: "f-an",
	AO: "f-ao",
	AQ: "f-aq",
	AR: "f-ar",
	AS: "f-as",
	AT: "f-at",
	AU: "f-au",
	AW: "f-aw",
	AZ: "f-az",
	BA: "f-ba",
	BB: "f-bb",
	BD: "f-bd",
	BE: "f-be",
	BF: "f-bf",
	BG: "f-bg",
	BH: "f-bh",
	BI: "f-bi",
	BJ: "f-bj",
	BL: "f-bl",
	BM: "f-bm",
	BN: "f-bn",
	BO: "f-bo",
	BR: "f-br",
	BS: "f-bs",
	BT: "f-bt",
	BW: "f-bw",
	BY: "f-by",
	BZ: "f-bz",
	CA: "f-ca",
	CC: "f-cc",
	CD: "f-cd",
	CF: "f-cf",
	CG: "f-cg",
	CH: "f-ch",
	CI: "f-ci",
	CK: "f-ck",
	CL: "f-cl",
	CM: "f-cm",
	CN: "f-cn",
	CO: "f-co",
	CR: "f-cr",
	CU: "f-cu",
	CV: "f-cv",
	CW: "f-cw",
	CX: "f-cx",
	CY: "f-cy",
	CZ: "f-cz",
	DE: "f-de",
	DJ: "f-dj",
	DK: "f-dk",
	DM: "f-dm",
	DZ: "f-dz",
	EC: "f-ec",
	EE: "f-ee",
	EG: "f-eg",
	EH: "f-eh",
	ER: "f-er",
	ES: "f-es",
	ET: "f-et",
	FI: "f-fi",
	FJ: "f-fj",
	FK: "f-fk",
	FM: "f-fm",
	FO: "f-fo",
	FR: "f-fr",
	GA: "f-ga",
	GB: "f-gb",
	GD: "f-gd",
	GE: "f-ge",
	GF: "f-gf",
	GG: "f-gg",
	GH: "f-gh",
	GI: "f-gi",
	GL: "f-gl",
	GM: "f-gm",
	GN: "f-gn",
	GQ: "f-gq",
	GR: "f-gr",
	GT: "f-gt",
	GU: "f-gu",
	GW: "f-gw",
	GY: "f-gy",
	HK: "f-hk",
	HN: "f-hn",
	HR: "f-hr",
	HT: "f-ht",
	HU: "f-hu",
	ID: "f-id",
	IE: "f-ie",
	IL: "f-il",
	IM: "f-im",
	IN: "f-in",
	IO: "f-io",
	IQ: "f-iq",
	IR: "f-ir",
	IS: "f-is",
	IT: "f-it",
	JE: "f-je",
	JM: "f-jm",
	JO: "f-jo",
	JP: "f-jp",
	KE: "f-ke",
	KG: "f-kg",
	KH: "f-kh",
	KI: "f-ki",
	KM: "f-km",
	KN: "f-kn",
	KP: "f-kp",
	KR: "f-kr",
	KW: "f-kw",
	KY: "f-ky",
	KZ: "f-kz",
	LA: "f-la",
	LB: "f-lb",
	LC: "f-lc",
	LI: "f-li",
	LK: "f-lk",
	LR: "f-lr",
	LS: "f-ls",
	LT: "f-lt",
	LU: "f-lu",
	LV: "f-lv",
	LY: "f-ly",
	MA: "f-ma",
	MC: "f-mc",
	MD: "f-md",
	ME: "f-me",
	MF: "f-mf",
	MG: "f-mg",
	MH: "f-mh",
	MK: "f-mk",
	ML: "f-ml",
	MM: "f-mm",
	MN: "f-mn",
	MO: "f-mo",
	MP: "f-mp",
	MQ: "f-mq",
	MR: "f-mr",
	MS: "f-ms",
	MT: "f-mt",
	MU: "f-mu",
	MV: "f-mv",
	MW: "f-mw",
	MX: "f-mx",
	MY: "f-my",
	MZ: "f-mz",
	NA: "f-na",
	NC: "f-nc",
	NE: "f-ne",
	NF: "f-nf",
	NG: "f-ng",
	NI: "f-ni",
	NL: "f-nl",
	NO: "f-no",
	NP: "f-np",
	NR: "f-nr",
	NU: "f-nu",
	NZ: "f-nz",
	OM: "f-om",
	PA: "f-pa",
	PE: "f-pe",
	PF: "f-pf",
	PG: "f-pg",
	PH: "f-ph",
	PK: "f-pk",
	PL: "f-pl",
	PM: "f-pm",
	PN: "f-pn",
	PR: "f-pr",
	PS: "f-ps",
	PT: "f-pt",
	PW: "f-pw",
	PY: "f-py",
	QA: "f-qa",
	RE: "f-re",
	RO: "f-ro",
	RS: "f-rs",
	RU: "f-ru",
	RW: "f-rw",
	SA: "f-sa",
	SB: "f-sb",
	SC: "f-sc",
	SD: "f-sd",
	SE: "f-se",
	SG: "f-sg",
	SH: "f-sh",
	SI: "f-si",
	SJ: "f-sj",
	SK: "f-sk",
	SL: "f-sl",
	SM: "f-sm",
	SN: "f-sn",
	SO: "f-so",
	SR: "f-sr",
	SS: "f-ss",
	ST: "f-st",
	SV: "f-sv",
	SX: "f-sx",
	SY: "f-sy",
	SZ: "f-sz",
	TC: "f-tc",
	TD: "f-td",
	TG: "f-tg",
	TH: "f-th",
	TJ: "f-tj",
	TK: "f-tk",
	TL: "f-tl",
	TM: "f-tm",
	TN: "f-tn",
	TO: "f-to",
	TR: "f-tr",
	TT: "f-tt",
	TV: "f-tv",
	TW: "f-tw",
	TZ: "f-tz",
	UA: "f-ua",
	UG: "f-ug",
	US: "f-us",
	UY: "f-uy",
	UZ: "f-uz",
	VA: "f-va",
	VC: "f-vc",
	VE: "f-ve",
	VG: "f-vg",
	VI: "f-vi",
	VN: "f-vn",
	VU: "f-vu",
	WF: "f-wf",
	WS: "f-ws",
	YE: "f-ye",
	YT: "f-yt",
	ZA: "f-za",
	ZM: "f-zm",
	ZW: "f-zw"
});
var it = class {
	static get(e) {
		return this.getList().find((t) => e === t.value);
	}
	static getByPhone(e) {
		let t = this.toNumber(e), n = [""], r = this.getMap(), i;
		for (let e of t) if (n[n.length - 1] += e, e in r) {
			var a, o, s;
			(a = r[e]) != null && a.value && (i = r[e], n.push("")), r = (o = (s = r[e]) == null ? void 0 : s.next) == null ? {} : o;
		} else break;
		return i ? (n.pop(), {
			item: i,
			phone: t.join("").slice(n.join("").length)
		}) : {
			item: void 0,
			phone: t.join("")
		};
	}
	static getByCode(e) {
		let t = this.get(e);
		if (t) {
			var n;
			return (n = this.getByPhone(t.phone.toString())) == null ? void 0 : n.item;
		}
	}
	static getList() {
		var e;
		return this.list || this.makeList(), (e = this.list) == null ? [] : e;
	}
	static getMap() {
		var e;
		return this.map || this.makeMap(), (e = this.map) == null ? {} : e;
	}
	static toMask(e, t) {
		if (l(e) && Array.isArray(t) && t.length > 0) {
			let n = this.removeZero(e), r = n.length;
			for (let e of t) if (this.getUnnecessaryLength(e) === r) return this.toStandard(n, e);
		}
	}
	static removeZero(e) {
		return e.match(/^0/) ? e.replace(/^0/, "") : e.match(/^89/) ? e.replace(/^8/, "") : e;
	}
	static getWithinSymbol(e) {
		switch (e) {
			case 4:
			case "4": return "$";
			case 8:
			case "8": return "~";
		}
		return "=";
	}
	static getUnnecessaryLength(e) {
		var t, n;
		return (t = (n = e.match(/\*/g)) == null ? void 0 : n.length) == null ? 0 : t;
	}
	static makeList() {
		let e = r(D.getList(), (e) => {
			if (e != null && e.phoneMask) return {
				phone: (e == null ? void 0 : e.phoneCode) && Number(e.phoneCode.replace(/[^0-9]+/g, "")) || void 0,
				within: (e == null ? void 0 : e.phoneWithin) || 0,
				mask: A(e.phoneMask),
				value: e.country
			};
		});
		this.list = e.sort((e, t) => e.phone - t.phone);
	}
	static makeMap() {
		this.map = {}, this.getList().forEach((e) => {
			e.mask.forEach((t) => {
				let n = this.map, r;
				if (this.toNumber(t).forEach((e) => {
					var t;
					e in n || (n[e] = {
						items: [],
						info: void 0,
						value: void 0,
						mask: [],
						maskFull: [],
						next: {}
					}), r = n[e], n = (t = r == null ? void 0 : r.next) == null ? {} : t;
				}), r) {
					r.value === void 0 && (r.info = e, r.value = e.value);
					let n = this.toWithin(t, e.within);
					r.mask.push(n), r.maskFull.push(n.replace(/\d/gi, "*")), r.items.push(e);
				}
			});
		});
	}
	static toNumber(e) {
		return e.replace(/\D+/gi, "").split("");
	}
	static toStandard(e, t) {
		let n = 0;
		return t.replace(/\*/gi, () => String(e[n++]));
	}
	static toWithin(e, t) {
		return e.replace(/\*/, this.getWithinSymbol(t));
	}
};
C(it, "list", void 0), C(it, "map", void 0);
var ct$1 = 320, lt = "--LOAD--", ut = class {
	static is(e) {
		return e in this.icons || this.getName(e) in this.icons;
	}
	static async get(e, t = "", n = 1e3 * 60 * 3) {
		let r = this.getRaw(e, t);
		return typeof r == "string" ? r === lt && n > 0 ? (await this.wait(), this.get(e, t, n - ct$1)) : r : b(r) ? await r() : await r;
	}
	static getAsync(e, t = "") {
		let n = this.getRaw(e, t);
		return typeof n == "string" && n !== lt ? n : "";
	}
	static getNameList() {
		return r(this.icons, (e, t) => t.replace(/^@/, ""));
	}
	static getUrlGlobal() {
		return `${P.isLocalhost(), ""}${this.url}`;
	}
	static add(e, t) {
		this.icons[this.getName(e)] = t;
	}
	static addLoad(e) {
		this.icons[this.getName(e)] = lt;
	}
	static addGlobal(e, t) {
		this.icons[this.getName(e)] = `${this.getUrlGlobal()}${t}`;
	}
	static addByList(e) {
		r(e, (e, t) => this.add(t, e));
	}
	static setUrl(e) {
		this.url = e;
	}
	static setConfig(e) {
		e.url && this.setUrl(e.url), e.list && this.addByList(e.list);
	}
	static getName(e) {
		return `@${e}`;
	}
	static getRaw(e, t = "") {
		var n, r, i, a;
		return (n = (r = (i = this.icons) == null ? void 0 : i[this.getName(e)]) == null ? (a = this.icons) == null ? void 0 : a[e] : r) == null ? `${e.replace(/^@/, t || this.url)}.svg` : n;
	}
	static wait() {
		return new Promise((e) => setTimeout(() => e(), ct$1));
	}
};
C(ut, "icons", {}), C(ut, "url", "/icons/");
function dt$1(e, t, n) {
	var r, i;
	return (r = (i = k(e)) == null ? void 0 : i[t]) == null ? n : r;
}
function ft(e, n, i) {
	let a = k(e);
	if (a) {
		let e = dt$1(a, n);
		if (t(e) && t(i)) r(i, (t, n) => {
			e[n] = x(t);
		});
		else {
			let e = x(i);
			!(n in a) && typeof e == "string" ? a.setAttribute(n.toString(), e) : a[n] = e;
		}
	}
	return a;
}
function W$1(e, t = "div", i, a) {
	if (!s()) return;
	let o = document.createElement(t);
	return typeof i == "function" ? i(o) : n(i) && r(i, (e, t) => {
		ft(o, t, e);
	}), e?.insertBefore(o, a == null ? null : a), o;
}
var pt$1 = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function G$1(e) {
	return String(e).replace(/[&<>"']/g, (e) => {
		var t;
		return (t = pt$1 == null ? void 0 : pt$1[e]) == null ? e : t;
	});
}
var K$1 = class {
	constructor(e, t = !1) {
		C(this, "items", {}), this.listMeta = e, this.isProperty = t, this.update();
	}
	getListMeta() {
		return this.listMeta;
	}
	get(e) {
		var t;
		return (t = this.items[e]) == null ? "" : t;
	}
	getItems() {
		return this.items;
	}
	html() {
		return r(this.listMeta, (e) => this.toHtmlString(e)).join("");
	}
	set(e, t) {
		return this.setItem(e, t).setMeta(e), this;
	}
	setByList(e) {
		return r(e, (e, t) => this.set(t, String(e))), this;
	}
	getAttributeName() {
		return this.isProperty ? "property" : "name";
	}
	findMetaElement(e) {
		if (!s()) return;
		let t = `meta[${this.getAttributeName()}="${e}"]`;
		return document.querySelector(t) || void 0;
	}
	setItem(e, t) {
		return this.items[e] = t, this;
	}
	setMeta(e) {
		var t;
		if (!s()) return this;
		let n = (t = this.items[e]) == null ? "" : t;
		if (e === "title") return document.title = n, this;
		let r = this.findMetaElement(e);
		if (r) return r.content = n, this;
		let i = { content: n };
		return this.isProperty ? i.property = e : i.name = e, W$1(document.head, "meta", i), this;
	}
	toHtmlString(e) {
		var t;
		let n = (t = this.items[e]) == null ? "" : t;
		if (e === "title") return "";
		let r = G$1(n);
		return r ? `<meta ${this.getAttributeName()}="${e}" content="${r}">` : "";
	}
	toHtmlTitle(e) {
		return oe(e);
	}
	update() {
		return this.listMeta.forEach((e) => {
			var t, n;
			this.items[e] = (t = (n = this.findMetaElement(e)) == null ? void 0 : n.content) == null ? "" : t;
		}), this;
	}
}, q$1 = /* @__PURE__ */ function(e) {
	return e.title = "title", e.description = "description", e.keywords = "keywords", e.canonical = "canonical", e.robots = "robots", e.author = "author", e;
}({}), J$1 = /* @__PURE__ */ function(e) {
	return e.title = "og:title", e.type = "og:type", e.url = "og:url", e.image = "og:image", e.description = "og:description", e.locale = "og:locale", e.siteName = "og:site_name", e.localeAlternate = "og:locale:alternate", e.imageUrl = "og:image:url", e.imageSecureUrl = "og:image:secure_url", e.imageType = "og:image:type", e.imageWidth = "og:image:width", e.imageHeight = "og:image:height", e.imageAlt = "og:image:alt", e.video = "og:video", e.videoUrl = "og:video:url", e.videoSecureUrl = "og:video:secure_url", e.videoType = "og:video:type", e.videoWidth = "og:video:width", e.videoHeight = "og:video:height", e.audio = "og:audio", e.audioSecureUrl = "og:audio:secure_url", e.audioType = "og:audio:type", e.articlePublishedTime = "article:published_time", e.articleModifiedTime = "article:modified_time", e.articleExpirationTime = "article:expiration_time", e.articleAuthor = "article:author", e.articleSection = "article:section", e.articleTag = "article:tag", e.bookAuthor = "book:author", e.bookIsbn = "book:isbn", e.bookReleaseDate = "book:release_date", e.bookTag = "book:tag", e.musicDuration = "music:duration", e.musicAlbum = "music:album", e.musicAlbumDisc = "music:album:disc", e.musicAlbumTrack = "music:album:track", e.musicMusician = "music:musician", e.musicSong = "music:song", e.musicSongDisc = "music:song:disc", e.musicSongTrack = "music:song:track", e.musicReleaseDate = "music:release_date", e.musicCreator = "music:creator", e.videoActor = "video:actor", e.videoActorRole = "video:actor:role", e.videoDirector = "video:director", e.videoWriter = "video:writer", e.videoDuration = "video:duration", e.videoReleaseDate = "video:release_date", e.videoTag = "video:tag", e.videoSeries = "video:series", e.profileFirstName = "profile:first_name", e.profileLastName = "profile:last_name", e.profileUsername = "profile:username", e.profileGender = "profile:gender", e.productBrand = "product:brand", e.productAvailability = "product:availability", e.productCondition = "product:condition", e.productPriceAmount = "product:price:amount", e.productPriceCurrency = "product:price:currency", e.productRetailerItemId = "product:retailer_item_id", e.productCategory = "product:category", e.productEan = "product:ean", e.productIsbn = "product:isbn", e.productMfrPartNo = "product:mfr_part_no", e.productUpc = "product:upc", e.productWeightValue = "product:weight:value", e.productWeightUnits = "product:weight:units", e.productColor = "product:color", e.productMaterial = "product:material", e.productPattern = "product:pattern", e.productAgeGroup = "product:age_group", e.productGender = "product:gender", e;
}({}), Y$1 = /* @__PURE__ */ function(e) {
	return e.card = "twitter:card", e.site = "twitter:site", e.creator = "twitter:creator", e.url = "twitter:url", e.title = "twitter:title", e.description = "twitter:description", e.image = "twitter:image", e.imageAlt = "twitter:image:alt", e.imageSrc = "twitter:image:src", e.imageWidth = "twitter:image:width", e.imageHeight = "twitter:image:height", e.label1 = "twitter:label1", e.data1 = "twitter:data1", e.label2 = "twitter:label2", e.data2 = "twitter:data2", e.appNameIphone = "twitter:app:name:iphone", e.appIdIphone = "twitter:app:id:iphone", e.appUrlIphone = "twitter:app:url:iphone", e.appNameIpad = "twitter:app:name:ipad", e.appIdIpad = "twitter:app:id:ipad", e.appUrlIpad = "twitter:app:url:ipad", e.appNameGooglePlay = "twitter:app:name:googleplay", e.appIdGooglePlay = "twitter:app:id:googleplay", e.appUrlGooglePlay = "twitter:app:url:googleplay", e.player = "twitter:player", e.playerWidth = "twitter:player:width", e.playerHeight = "twitter:player:height", e.playerStream = "twitter:player:stream", e.playerStreamContentType = "twitter:player:stream:content_type", e;
}({}), xt = class extends K$1 {
	constructor() {
		super(Object.values(J$1), !0);
	}
	getTitle() {
		return this.get(J$1.title);
	}
	getType() {
		return this.get(J$1.type);
	}
	getUrl() {
		return this.get(J$1.url);
	}
	getImage() {
		return this.get(J$1.image);
	}
	getDescription() {
		return this.get(J$1.description);
	}
	getLocale() {
		return this.get(J$1.locale);
	}
	getSiteName() {
		return this.get(J$1.siteName);
	}
	setTitle(e) {
		return this.set(J$1.title, e);
	}
	setType(e) {
		return this.set(J$1.type, e);
	}
	setUrl(e) {
		return this.set(J$1.url, e);
	}
	setImage(e) {
		return this.set(J$1.image, e);
	}
	setDescription(e) {
		return this.set(J$1.description, e);
	}
	setLocale(e) {
		return this.set(J$1.locale, e);
	}
	setSiteName(e) {
		return this.set(J$1.siteName, e);
	}
}, St = class extends K$1 {
	constructor() {
		super(Object.values(Y$1));
	}
	getCard() {
		return this.get(Y$1.card);
	}
	getSite() {
		return this.get(Y$1.site);
	}
	getCreator() {
		return this.get(Y$1.creator);
	}
	getUrl() {
		return this.get(Y$1.url);
	}
	getTitle() {
		return this.get(Y$1.title);
	}
	getDescription() {
		return this.get(Y$1.description);
	}
	getImage() {
		return this.get(Y$1.image);
	}
	setCard(e) {
		return this.set(Y$1.card, e), this;
	}
	setSite(e) {
		return this.set(Y$1.site, e), this;
	}
	setCreator(e) {
		return this.set(Y$1.creator, e), this;
	}
	setUrl(e) {
		return this.set(Y$1.url, e), this;
	}
	setTitle(e) {
		return this.set(Y$1.title, e), this;
	}
	setDescription(e) {
		return this.set(Y$1.description, e), this;
	}
	setImage(e) {
		return this.set(Y$1.image, e), this;
	}
}, Ct = class extends K$1 {
	constructor() {
		super(Object.values(q$1)), C(this, "suffix", void 0), C(this, "og", void 0), C(this, "twitter", void 0), this.og = new xt(), this.twitter = new St();
	}
	getOg() {
		return this.og;
	}
	getTwitter() {
		return this.twitter;
	}
	getTitle() {
		let e = this.get(q$1.title);
		return !l(e) && s() && (e = document.title), e.replace(this.getSuffix(), "").trim();
	}
	getKeywords() {
		return this.get(q$1.keywords);
	}
	getDescription() {
		return this.get(q$1.description);
	}
	getImage() {
		return this.og.getImage();
	}
	getCanonical() {
		return this.get(q$1.canonical);
	}
	getRobots() {
		return this.get(q$1.robots);
	}
	getAuthor() {
		return this.get(q$1.author);
	}
	getSiteName() {
		return this.og.getSiteName();
	}
	getLocale() {
		return this.og.getLocale();
	}
	setTitle(e) {
		let t = l(e) ? `${e}${this.getSuffix()}` : this.suffix ? this.suffix : "";
		return s() && (document.title = t), this.set(q$1.title, t), this.og.setTitle(t), this.twitter.setTitle(t), this;
	}
	setKeywords(e) {
		return this.set(q$1.keywords, A(e).join(", ")), this;
	}
	setDescription(e) {
		return this.set(q$1.description, e), this;
	}
	setImage(e) {
		return this.og.setImage(e), this.twitter.setImage(e), this;
	}
	setCanonical(e) {
		return this.set(q$1.canonical, e), this.og.setUrl(e), this.twitter.setUrl(e), this;
	}
	setRobots(e) {
		return this.set(q$1.robots, e), this;
	}
	setAuthor(e) {
		return this.set(q$1.author, e), this;
	}
	setSiteName(e) {
		return this.og.setSiteName(e), this.twitter.setSite(e), this;
	}
	setLocale(e) {
		return this.og.setLocale(e), this;
	}
	setSuffix(e) {
		this.suffix = e;
	}
	html() {
		return `${super.html()}${this.og.html()}${this.twitter.html()}`;
	}
	htmlTitle() {
		return this.toHtmlTitle(this.get(q$1.title));
	}
	getSuffix() {
		return l(this.suffix) ? ` - ${this.suffix}` : "";
	}
}, wt = class {
	static getItem() {
		return T.get("__ui:meta-instance__", () => new Ct());
	}
	static getOg() {
		return this.getItem().getOg();
	}
	static getTwitter() {
		return this.getItem().getTwitter();
	}
	static getTitle() {
		return this.getItem().getTitle();
	}
	static getKeywords() {
		return this.getItem().getKeywords();
	}
	static getDescription() {
		return this.getItem().getDescription();
	}
	static getImage() {
		return this.getItem().getImage();
	}
	static getCanonical() {
		return this.getItem().getCanonical();
	}
	static getRobots() {
		return this.getItem().getRobots();
	}
	static getAuthor() {
		return this.getItem().getAuthor();
	}
	static getSiteName() {
		return this.getItem().getSiteName();
	}
	static getLocale() {
		return this.getItem().getLocale();
	}
	static setTitle(e) {
		return this.getItem().setTitle(e), this;
	}
	static setKeywords(e) {
		return this.getItem().setKeywords(e), this;
	}
	static setDescription(e) {
		return this.getItem().setDescription(e), this;
	}
	static setImage(e) {
		return this.getItem().setImage(e), this;
	}
	static setCanonical(e) {
		return this.getItem().setCanonical(e), this;
	}
	static setRobots(e) {
		return this.getItem().setRobots(e), this;
	}
	static setAuthor(e) {
		return this.getItem().setAuthor(e), this;
	}
	static setSiteName(e) {
		return this.getItem().setSiteName(e), this;
	}
	static setLocale(e) {
		return this.getItem().setLocale(e), this;
	}
	static setSuffix(e) {
		return this.getItem().setSuffix(e), this;
	}
	static html() {
		return this.getItem().html();
	}
	static htmlTitle() {
		return this.getItem().htmlTitle();
	}
}, Et$1 = class {
	static async is() {
		let e = await this.get();
		return e !== -1 && e <= 8;
	}
	static async get() {
		var e;
		if (!s()) return 0;
		let t = (e = this.getStorage().get()) == null ? -1 : e;
		if (!this.calculate && t === -1) {
			let e = await this.init();
			return this.getStorage().set(e), e;
		}
		return t;
	}
	static getStorage() {
		return new E("__ui:scrollbar__", !0);
	}
	static getCalculate() {
		return this.calculate;
	}
	static createElement() {
		return W$1(document.body, "div", (e) => {
			e.style.height = "24px", e.style.overflowY = "scroll", e.style.position = "fixed", e.style.width = "100%", W$1(e, "div", (e) => {
				e.style.height = "100px";
			});
		});
	}
	static init() {
		return new Promise((e) => {
			this.calculate = !0;
			let t = this.createElement();
			t ? requestAnimationFrame(() => {
				e(t.offsetWidth - t.clientWidth), t.remove(), this.calculate = !1;
			}) : e(0);
		});
	}
};
C(Et$1, "calculate", !1);
var Ot = `___HIGHLIGHT_START_${f(1e5, 999999)}___`, kt = `___HIGHLIGHT_END_${f(1e5, 999999)}___`;
RegExp(`${Ot}|${kt}`, "g");
var Ht = [
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v"
], Ut = RegExp(`%(${Ht.join("|")})`, "g"), Wt = (e, t = {}) => {
	let r = String(e);
	return Array.isArray(t) && e.match(/%[a-z]/) && (r = r.replace(Ut, (e, n) => {
		let r = Ht.indexOf(n);
		if (r !== -1) {
			var i;
			return String((i = t == null ? void 0 : t[r]) == null ? "" : i);
		}
		return e;
	})), n(t) && (r = r.replace(/[[{](.*?)[\]}](.*?)[[{]\/\1[\]}]/g, (e, n, r) => {
		if (n in t) {
			var i;
			return String((i = t[n]) == null ? "" : i).replace(/[[{]content[\]}]/g, () => r);
		}
		return e;
	}), r = r.replace(/[[{](.*?)[\]}]/g, (e, n) => {
		if (n in t) {
			var r;
			return String((r = t[n]) == null ? "" : r);
		}
		return e;
	})), r;
}, Gt = (e) => {
	var t;
	return i(e) ? !0 : !!(e && n(e) && ((e == null ? void 0 : e.status) === "success" || e != null && e.success || !(e == null || (t = e.statusObject) == null) && t.status && /^2/.test(String(e.statusObject.status)) || !("status" in e) && !("success" in e) && !("statusObject" in e) && /^2/.test(String(P.getStatus().getStatus()))));
}, Kt = "global", Jt = class {
	constructor(e, t = () => D.getLanguage(), n = () => D.getLocation()) {
		C(this, "files", {}), C(this, "data", {}), this.language = t, this.location = n, e && this.add(e);
	}
	isFile() {
		return Object.keys(this.files).length > 0 && this.getIndex() !== void 0;
	}
	getLocation() {
		return x(this.location);
	}
	getLanguage() {
		return x(this.language);
	}
	async getList() {
		let e = this.getIndex();
		if (e) {
			var t;
			return (t = this.getByData(e)) == null ? await this.getByFile(e) : t;
		}
	}
	add(e) {
		r(e, (e, t) => {
			b(e) && (this.files[t] = e);
		});
	}
	getIndex() {
		let e = this.getLocation();
		if (e in this.files) return e;
		let t = this.getLanguage();
		if (t in this.files) return t;
		if ("global" in this.files) return Kt;
	}
	getByData(e) {
		if (e in this.data) return this.data[e];
	}
	async getByFile(e) {
		if (e in this.files) {
			let t = await x(this.files[e]);
			return t && (this.data[e] = t), t;
		}
	}
}, Yt = class {
	constructor(e = "/api/translate", t = "list", n = new Jt()) {
		C(this, "data", {}), C(this, "cache", []), C(this, "resolveList", []), C(this, "timeout", void 0), C(this, "isReadApi", !0), this.url = e, this.propsName = t, this.files = n;
	}
	async get(e, t) {
		var n;
		let r = this.getText(e);
		return r ? this.replacement(r, t) : (P.isLocalhost() || await this.add(e), this.replacement((n = this.getText(e)) == null ? e : n));
	}
	getSync(e, t = !1, n) {
		let r = this.getText(e);
		return r ? this.replacement(r, n) : t ? " " : e;
	}
	getList(e) {
		return new Promise((t) => {
			let n = {}, r = 0;
			for (let i of e) {
				let a = Array.isArray(i) ? i[0] : i, o = Array.isArray(i) ? i.slice(1) : void 0;
				this.get(a, o).then((i) => {
					n[a] = i, ++r >= e.length && t(n);
				});
			}
		});
	}
	getListSync(e, t = !1) {
		let n = {};
		for (let r of e) {
			let e = Array.isArray(r) ? r[0] : r, i = Array.isArray(r) ? r.slice(1) : void 0;
			n[e] = this.getSync(e, t, i);
		}
		return n;
	}
	add(e) {
		return new Promise((t) => {
			let n = this.getNamesNone(e);
			n.length > 0 ? (this.cache.push(...n), this.resolveList.push(t), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
				this.timeout = void 0, this.make().then(() => {
					this.resolveList.forEach((e) => e()), this.resolveList = [];
				});
			}, 160)) : t();
		});
	}
	addSync(e) {
		r(e, (e, t) => {
			d(e) && l(e) && (this.data[this.getName(t)] = e);
		});
	}
	async addNormalOrSync(e) {
		if (l(e)) if (P.isLocalhost()) this.addSync(e);
		else {
			let t = Object.keys(e);
			t.length > 0 && await this.add(t);
		}
	}
	addSyncByLocation(e) {
		r(e, (e, t) => r(e, (e, n) => {
			let r = `${t}-${n}`;
			r in this.data || (this.data[r] = e);
		}));
	}
	addSyncByFile(e) {
		this.files.add(e);
	}
	setUrl(e) {
		return this.url = e, this;
	}
	setPropsName(e) {
		return this.propsName = e, this;
	}
	setReadApi(e) {
		return this.isReadApi = e, this;
	}
	hasName(e) {
		return this.getName(e) in this.data || this.getNameByLanguage(e) in this.data || this.getNameByGlobal(e) in this.data;
	}
	getText(e) {
		let t = this.getName(e);
		if (t in this.data) return this.data[t];
		let n = this.getNameByLanguage(e);
		if (n in this.data) return this.data[n];
		let r = this.getNameByGlobal(e);
		if (r in this.data) return this.data[r];
	}
	getName(e) {
		return `${this.files.getLocation()}-${e}`;
	}
	getNameByLanguage(e) {
		return `${this.files.getLanguage()}-${e}`;
	}
	getNameByGlobal(e) {
		return `${Kt}-${e}`;
	}
	getNamesNone(e) {
		let t = [];
		return A(e).forEach((e) => {
			e !== "__TRANSLATE_START__" && e !== "__TRANSLATE_END__" && !this.hasName(e) && t.push(e);
		}), t;
	}
	async getResponse() {
		let e = await P.get({
			api: !1,
			path: this.url,
			request: { [this.propsName]: this.cache },
			toData: !0,
			timeout: 12e3,
			global: !0
		});
		return Gt(e) || w.on({
			group: "translate",
			code: "error",
			details: e
		}), e == null ? {} : e;
	}
	replacement(e, t) {
		return t ? Wt(e, t) : e;
	}
	async make() {
		let e;
		this.files.isFile() ? e = await this.files.getList() : this.isReadApi && (e = await this.getResponse()), e && this.makeList(e);
	}
	makeList(e) {
		this.cache.forEach((t) => {
			var n;
			this.data[this.getName(t)] = (n = e == null ? void 0 : e[t]) == null ? "" : n;
		}), this.cache = [];
	}
}, Xt = class {
	static async get(e, t) {
		return this.getItem().get(e, t);
	}
	static getItem() {
		return this.item || (this.item = new Yt()), this.item;
	}
	static getSync(e, t = !1, n) {
		return this.getItem().getSync(e, t, n);
	}
	static getList(e) {
		return this.getItem().getList(e);
	}
	static getListSync(e, t = !1) {
		return this.getItem().getListSync(e, t);
	}
	static async add(e) {
		await this.getItem().add(e);
	}
	static addSync(e) {
		this.getItem().addSync(e);
	}
	static async addNormalOrSync(e) {
		await this.getItem().addNormalOrSync(e);
	}
	static addSyncByLocation(e) {
		this.getItem().addSyncByLocation(e);
	}
	static addSyncByFile(e) {
		this.getItem().addSyncByFile(e);
	}
	static setUrl(e) {
		this.getItem().setUrl(e);
	}
	static setPropsName(e) {
		this.getItem().setPropsName(e);
	}
	static setReadApi(e) {
		this.getItem().setReadApi(e);
	}
	static setConfig(e) {
		e.url && this.getItem().setUrl(e.url), e.propsName && this.getItem().setPropsName(e.propsName), typeof e.readApi == "boolean" && this.getItem().setReadApi(e.readApi);
	}
};
C(Xt, "item", void 0);
//#endregion
//#region ../functional/dist/library.js
function L(e) {
	"@babel/helpers - typeof";
	return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, L(e);
}
function be(e, t) {
	if (L(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (L(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function xe(e) {
	var t = be(e, "string");
	return L(t) == "symbol" ? t : t + "";
}
function R(e, t, n) {
	return (t = xe(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
var U = class {
	static run(e) {
		return this.getScope().run(e);
	}
	static getScope() {
		return T.get("__ui:effect-scope-global__", () => effectScope(!0));
	}
}, W, G = class {
	static get() {
		return T.get("__ui:geo-ref__", () => shallowRef(D.getItem()));
	}
	static getCountry() {
		return this.country;
	}
	static getLanguage() {
		return this.language;
	}
	static getStandard() {
		return this.standard;
	}
	static getFirstDay() {
		return this.firstDay;
	}
	static set(e) {
		D.set(e, !0), this.get().value = D.getItem();
	}
};
W = G, R(G, "country", computed(() => W.get().value.country)), R(G, "language", computed(() => W.get().value.language)), R(G, "standard", computed(() => W.get().value.standard)), R(G, "firstDay", computed(() => W.get().value.firstDay));
var Q = /* @__PURE__ */ function(e) {
	return e.global = "global", e.provide = "provide", e.local = "local", e;
}({}), at = 1, ot = f(1e5, 999999), st = () => `__execute_use${ot}::${at++}`, ct = () => T.get("__ui:execute-use-global__", () => []);
function $(e, t = Q.provide) {
	let n = st(), r, i = (t) => {
		let n = Object.freeze(e(...t));
		return {
			...n,
			init() {
				return n;
			}
		};
	}, a = (e) => {
		let t = Object.freeze(i(e));
		return provide(n, t), t;
	}, o = (e) => {
		let t = i(e);
		return Object.freeze({
			...t,
			destroyExecute() {
				r = void 0;
			}
		});
	}, s = (...e) => t === Q.provide ? inject(n, void 0) || a(e) : (r || U.run(() => {
		r = o(e);
	}), r);
	return t === Q.global && ct().push(s), s;
}
function dt(e) {
	return $(e, Q.local);
}
dt(() => {
	let e = wt, t = ref(e.getTitle()), n = ref(e.getKeywords()), r = ref(e.getDescription()), i = ref(e.getImage()), a = ref(e.getCanonical()), o = ref(e.getRobots()), s = ref(e.getAuthor()), c = ref(e.getSiteName());
	return watch(t, () => {
		e.setTitle(t.value);
	}), watch(n, () => {
		e.setKeywords(n.value);
	}), watch(r, () => {
		e.setDescription(r.value);
	}), watch(i, () => {
		e.setImage(i.value);
	}), watch(a, () => {
		e.setCanonical(a.value);
	}), watch(o, () => {
		e.setRobots(o.value);
	}), watch(s, () => {
		e.setAuthor(s.value);
	}), watch(c, () => {
		e.setSiteName(c.value);
	}), {
		meta: e,
		title: t,
		keyword: n,
		description: r,
		author: s,
		image: i,
		canonical: a,
		robots: o,
		siteName: c,
		getHtmlMeta: () => e.html(),
		setSuffix: (t) => e.setSuffix(t)
	};
});
function Et(e) {
	if (hasInjectionContext()) {
		let t = inject(e);
		if (t) return t;
	}
}
//#endregion
//#region src/types/nitroAppTypes.ts
/**
* Key used to store the server-side headers object in the Vue app context/
* Ключ, используемый для хранения объекта заголовков в контексте приложения Vue
*/
var NITRO_API_HEADERS = "__ui_server_headers";
//#endregion
//#region src/composables/useHeaders.ts
function useHeaders(name) {
	const headers = Et(NITRO_API_HEADERS);
	if (name && headers) return headers.get(name) ?? void 0;
	return headers;
}
//#endregion
export { useHeaders };

//# sourceMappingURL=component-template.js.map