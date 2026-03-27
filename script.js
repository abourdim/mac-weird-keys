/**
 * Workshop DIY — Template v1.2
 * Themes · i18n · RTL · Log · Toast · Status · Panels · Sound
 * Easter eggs: Konami, Morse, Matrix rain, Debug, Shake report, Time-travel, Typewriter
 */

const $ = id => document.getElementById(id);

/* ═══════ LOGO SVG (injected once) ═══════ */

const LOGO_SVG = `<svg preserveAspectRatio="xMidYMid meet" role="img" aria-label="Workshop DIY" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="77.139885 78.322945 253.991455 136.254120"> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M187.423706,152.869797C187.478333,152.738831,187.655853,152.631668,187.818207,152.631668C188.090317,152.631668,190.483124,151.543793,191.616806,150.904663C191.883423,150.754349,193.032593,149.992432,194.170502,149.211517C197.431274,146.973755,199.240906,146.236755,202.587189,145.783752C203.799835,145.619583,204.629318,145.619736,205.933762,145.784378C212.620331,146.628281,217.423569,150.723984,219.325882,157.203781C219.72139,158.550934,219.771454,162.692093,219.406631,163.88208C218.187943,167.857361,216.579514,170.301239,213.792847,172.411835C209.455261,175.697083,203.83429,176.563141,198.809494,174.720413C197.244873,174.146637,196.144424,173.544434,194.478638,172.350433C191.905991,170.506454,190.53334,169.740753,188.031555,168.754135L187.293335,168.462997L187.308884,160.785461C187.317429,156.56282,187.36911,153.000763,187.423706,152.869797zM208.415588,151.261307L201.927002,151.261307L201.927002,154.5056L208.415588,154.5056L208.415588,151.261307zM195.438385,167.485199L192.194092,167.485199L192.194092,151.263702L195.438385,151.263702L195.438385,167.485199zM214.904205,167.485199L211.659897,167.485199L211.659897,151.263702L214.904205,151.263702L214.904205,167.485199zM201.927002,173.973801L198.682693,173.973801L198.682693,164.240906L205.171295,164.240906L205.171295,160.996597L201.927002,160.996597L201.927002,157.752304L208.415588,157.752304L208.415588,167.485199L201.927002,167.485199L201.927002,173.973801z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M173.301086,159.585083C173.612106,158.491119,173.874039,158.032059,174.626434,157.262268C175.395889,156.475021,176.401733,155.870239,176.941635,155.870239C177.36203,155.870239,177.647339,155.263535,177.647339,154.369537C177.647339,153.240067,178.097351,153.01268,180.332611,153.01268C181.328247,153.01268,182.282974,153.064713,182.454239,153.128311C182.730774,153.231003,182.765625,154.070618,182.765625,160.629913C182.765625,166.947327,182.723099,168.050049,182.471725,168.251938C182.069794,168.574738,178.407364,168.435822,177.965607,168.081009C177.75119,167.908813,177.647324,167.518738,177.647324,166.885712L177.647324,165.94603L176.584106,165.490997C175.198334,164.897919,174.243912,164.070435,173.733398,163.019424C173.265182,162.055481,173.060654,160.43071,173.301086,159.585083z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M153.601929,182.059692C154.740814,179.364502,156.707062,177.959259,159.536469,177.818451C160.701721,177.760437,161.251312,177.831604,162.144165,178.156082C163.450592,178.630859,165.150406,180.036514,165.749542,181.137527L166.150391,181.874146L171.23761,181.874146C175.554565,181.874146,176.349976,181.830872,176.490891,181.588379C176.673401,181.274307,177.547806,179.367874,178.631622,176.921021C179.274582,175.469437,179.523499,174.921753,180.081848,173.730072L180.595093,172.634674L182.95993,172.634674C184.912933,172.634674,185.324768,172.683594,185.324768,172.915649C185.324768,173.07019,185.049423,173.777435,184.712891,174.487305C184.376358,175.197189,183.943024,176.163757,183.749908,176.635269C183.556793,177.106766,183.115692,178.092621,182.769699,178.826065C182.423691,179.559509,182.025787,180.416779,181.885452,180.73111C181.745102,181.045441,181.453796,181.6884,181.238083,182.159897C181.022369,182.631409,180.643311,183.488678,180.395737,184.064957C179.824722,185.394073,179.204605,186.048218,178.254486,186.3237C177.765457,186.465485,175.502716,186.541504,171.771988,186.541504L166.040741,186.541504L165.659912,187.255905C165.138397,188.234222,163.85675,189.437042,162.748398,189.988312C161.961212,190.379837,161.551163,190.446259,159.943237,190.442749C158.273651,190.439087,157.93721,190.378052,156.97731,189.904602C155.279343,189.067123,154.253754,187.938721,153.568604,186.154144C153.151855,185.06868,153.167999,183.086639,153.601929,182.059692z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M153.70961,134.681961C154.933441,131.8022,158.021027,130.114639,160.98288,130.70665C163.119888,131.133804,164.512604,132.063324,165.540604,133.74852L166.13118,134.71666L172.036896,134.724625C179.724121,134.734985,179.189514,134.531769,180.806213,138.05806C181.046387,138.58194,181.506516,139.56781,181.828705,140.248856C182.150894,140.929916,182.572266,141.873413,182.765106,142.34552C182.957932,142.817627,183.418945,143.846344,183.789566,144.631577C184.160187,145.416794,184.582855,146.359299,184.72879,146.726013C184.874741,147.092743,185.068542,147.474228,185.159454,147.573761C185.250381,147.673309,185.324768,147.911697,185.324768,148.103516C185.324768,148.42543,185.139572,148.448166,182.920441,148.398804C180.143387,148.337021,180.601318,148.697861,179.105072,145.392487C178.607056,144.292328,177.979095,142.920685,177.709595,142.344406C177.440109,141.768127,177.087021,140.996597,176.924942,140.629868C176.762878,140.263153,176.561615,139.834503,176.477676,139.677338C176.349091,139.436539,175.522827,139.383606,171.225388,139.340881L166.125702,139.290192L165.734726,140.000244C165.222015,140.931427,163.772217,142.287949,162.807831,142.738846C160.99057,143.588516,158.677109,143.612717,156.992996,142.799698C155.47348,142.066116,154.281479,140.67366,153.456284,138.668228C153.079697,137.753036,153.198425,135.884811,153.70961,134.681961z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M142.359467,157.940231C142.509399,157.475464,142.773041,156.807739,142.945313,156.45639C143.301086,155.73085,144.960602,154.086121,145.719666,153.706772C147.453094,152.840485,150.120728,152.779083,151.897141,153.564621C153.038162,154.069183,154.633179,155.561859,155.143616,156.602798L155.49057,157.310364L162.396606,157.310364L169.302643,157.310364L169.245392,159.621033L169.188141,161.931702L162.336823,161.983459L155.485474,162.035233L154.951477,162.917023C154.333344,163.937775,152.845825,165.267944,151.815979,165.720886C151.320953,165.938599,150.48027,166.037445,149.070404,166.043716C147.337799,166.051422,146.909668,165.986923,146.165497,165.606079C144.226196,164.613617,142.876617,163.016098,142.361877,161.103683C141.998642,159.754135,141.998108,159.060349,142.359467,157.940231z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M259.791718,157.665863L264.87912,148.034195L272.338226,148.034195L263.03244,163.730896L263.03244,174.991974L256.261322,174.991974L256.261322,164.07489L246.792618,148.034195L254.505173,148.034195L259.791718,157.665863z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M240.369812,152.741394L236.495438,152.741394L236.495438,170.284775L240.369812,170.284775L240.369812,174.991974L225.849915,174.991974L225.849915,170.284775L229.724304,170.284775L229.724304,152.741394L225.849915,152.741394L225.849915,148.034195L240.369812,148.034195L240.369812,152.741394z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M330.789734,195.730286L203.964523,195.730286L203.964523,199.334839L330.789734,199.334839L330.789734,195.730286z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M330.789551,203.350861L161.68924,203.350861L161.68924,206.955414L330.789551,206.955414L330.789551,203.350861z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M330.790314,210.972504L77.139885,210.972504L77.139885,214.577057L330.790314,214.577057L330.790314,210.972504z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M199.007599,92.751289L211.076767,107.812828L202.108658,108.433113L193.221268,96.996552L191.912918,99.119194L192.604614,109.090935L185.184021,109.604782L183.137482,80.08474L190.55806,79.571373L191.466415,92.675797L200.002396,78.91729L208.593674,78.322945L199.007599,92.751289z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M234.138016,81.615562C236.040375,81.751511,237.914093,82.153725,239.704468,82.81044C242.302017,83.709618,244.733612,85.0299,246.901871,86.718407L245.150757,93.244476L244.516693,93.074516L244.196808,92.630768C242.70787,90.69416,240.767151,89.152077,238.543442,88.138672C237.43634,87.647743,236.259094,87.333046,235.05455,87.206039C234.227158,87.13401,233.394257,87.239655,232.611099,87.515953C232.1866,87.685104,231.808258,87.952736,231.507553,88.296593C230.788803,89.172775,230.813843,90.439911,231.566635,91.287064C232.032272,91.758965,232.559708,92.165504,233.134735,92.49572C233.880844,92.934601,234.641342,93.348839,235.414795,93.73764L236.692566,94.414246C238.063751,95.136879,239.357956,95.996429,240.555618,96.979881C241.421173,97.700912,242.148926,98.572769,242.70343,99.552994C243.199982,100.455551,243.47139,101.464417,243.494675,102.49408C243.516479,104.315857,243.04805,106.109734,242.138275,107.688644C241.268204,109.142014,239.979233,110.299194,238.440216,111.008636C236.697495,111.816132,234.786774,112.195747,232.867447,112.115822C231.006363,112.044464,229.16304,111.7258,227.386139,111.168236C225.295883,110.581566,223.299759,109.70047,221.458069,108.551567C220.391022,107.90168,219.366867,107.183914,218.391983,106.402733L220.215729,99.607994L220.868774,99.782715L221.294846,100.371597C223.248032,102.98111,225.940598,104.943588,229.023956,106.004974C230.198563,106.381287,231.426422,106.56295,232.65976,106.542908C233.398315,106.50238,234.108765,106.246048,234.70285,105.805771C235.495346,105.106613,235.762222,103.987152,235.3703,103.006096C234.953918,102.254745,234.346375,101.627075,233.608734,101.186172C232.310593,100.437439,230.990005,99.728287,229.648743,99.059662L228.913788,98.6465C227.703781,97.972984,226.583435,97.149826,225.579315,96.196541C224.730804,95.402397,224.063187,94.435135,223.621811,93.360443C223.239136,92.341805,223.078842,91.253273,223.151657,90.167679C223.224899,88.937332,223.518707,87.730194,224.019104,86.603645C224.773438,84.973534,226.068161,83.653664,227.684143,82.867416C229.688202,81.891472,231.914063,81.459724,234.138016,81.615562z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M158.184418,89.408417L158.63797,89.460617C160.159576,89.664032,161.581177,90.331436,162.709152,91.371941C163.457062,92.134872,164.054443,93.031792,164.469971,94.015739C164.905151,94.958809,165.210938,95.956268,165.379028,96.981071C165.586273,98.309639,165.448776,99.669395,164.979736,100.929688C164.526001,102.206253,163.843109,103.389481,162.9646,104.421295L177.202927,111.835213L168.925079,115.537735L156.954742,109.003616L154.522186,110.091713L158.959137,119.99498L152.206207,123.015327L140.106628,96.007126L150.980728,91.143959C152.423172,90.469635,153.929443,89.940933,155.477051,89.56575C156.366608,89.378746,157.27916,89.325714,158.184418,89.408417zM154.518402,95.879517C153.797302,95.981628,153.094345,96.184746,152.429993,96.482941C151.30661,96.954544,150.192154,97.445801,149.086243,97.956879L152.344727,105.230492C153.226166,104.854858,154.099228,104.460068,154.963409,104.046356C155.701569,103.707794,156.398712,103.2864,157.041443,102.79026C157.931732,102.040565,158.426819,100.923943,158.384399,99.761368C158.265366,98.633255,157.799194,97.57048,157.049652,96.718483C156.493423,96.132034,155.708206,95.817314,154.900574,95.857086L154.518402,95.879517z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M272.812744,97.204483L266.643219,106.109734L274.967194,111.866898L281.13623,102.961639L287.252136,107.192093L270.397125,131.522263L264.281219,127.291809L271.751953,116.507477L263.428467,110.75032L255.957245,121.534653L249.841339,117.304688L266.69635,92.974518L272.812744,97.204483z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M123.532295,113.696442L124.230148,113.777771C126.158524,114.073517,128.005737,114.761353,129.657501,115.798744C132.481201,117.587387,134.876709,119.973488,136.675644,122.789276C137.85083,124.63147,138.576599,126.723907,138.794327,128.897644C139.033569,131.465439,138.466858,134.044128,137.172913,136.275513C135.587463,138.969635,133.343018,141.21608,130.649414,142.80484C127.777443,144.458344,124.36438,144.902039,121.164574,144.037842C119.23671,143.51442,117.427086,142.626587,115.833755,141.422424C113.593025,139.763062,111.674324,137.709213,110.171577,135.361511C108.996712,133.520187,108.266281,131.430969,108.038124,129.259201C107.781654,126.690132,108.338432,124.10524,109.629959,121.869064C111.213356,119.173782,113.45533,116.925095,116.146744,115.332764C118.378197,114.032959,120.960136,113.460907,123.532295,113.696442zM120.237076,120.379318L119.887573,120.406281C118.354965,120.610733,116.961685,121.401001,116.000389,122.611092C115.056374,123.703064,114.59684,125.132736,114.727959,126.569733C114.794571,127.523895,115.040863,128.456757,115.453972,129.31958C116.053543,130.618454,116.854576,131.814713,117.827431,132.864029C118.900902,134.079971,120.115646,135.163635,121.446014,136.092072C122.648727,136.917191,124.021584,137.461685,125.463211,137.685394C127.280067,137.943146,129.110855,137.312714,130.383087,135.991302C131.89679,134.496063,132.46991,132.291229,131.875671,130.248962C131.491013,128.764099,130.784729,127.381737,129.806686,126.199554C128.542725,124.617355,127.058746,123.224152,125.399681,122.062111C124.287796,121.300659,123.037567,120.763733,121.719482,120.481628C121.230911,120.390747,120.733513,120.356422,120.237076,120.379318z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M301.601013,126.300751L302.299225,126.387955C304.863129,126.784752,307.239716,127.969833,309.098511,129.778381C311.170715,131.775146,312.75058,134.224945,313.714081,136.935547C314.870911,140.295837,314.546234,143.989166,312.820984,147.096512C311.958069,148.639557,310.845917,150.029465,309.529388,151.210129C307.452698,153.100769,305.048676,154.597107,302.434753,155.626007C300.399414,156.423401,298.204712,156.731628,296.028259,156.525696C293.460388,156.265411,291.037109,155.212799,289.095093,153.514084C286.754761,151.440582,284.981323,148.806931,283.940704,145.859634C282.870056,142.725098,283.092163,139.293045,284.557861,136.322372C285.44342,134.53299,286.664185,132.92984,288.153931,131.599777C290.215515,129.722946,292.602142,128.237671,295.197113,127.216599C297.231812,126.41954,299.424255,126.105988,301.601013,126.300751zM301.796417,133.319016L301.395599,133.345963C299.740631,133.540878,298.142822,134.070938,296.699768,134.903717C295.098816,135.78006,293.62146,136.865036,292.306549,138.130219C291.264404,139.150299,290.465088,140.391296,289.96759,141.761612C289.36438,143.493225,289.630615,145.409592,290.682953,146.911621C291.859528,148.684113,293.91449,149.671082,296.034698,149.48201C297.567047,149.390991,299.06073,148.964966,300.410278,148.234055C302.207336,147.299255,303.861511,146.112946,305.322906,144.710876C306.284607,143.767151,307.052765,142.644867,307.584167,141.407135C308.377655,139.487228,308.077698,137.288376,306.798889,135.650696C305.90625,134.37352,304.502838,133.544434,302.952667,133.378418C302.570068,133.321472,302.182861,133.301575,301.796417,133.319016z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M330.52771,174.938004C330.907135,176.376419,331.109863,177.855667,331.131348,179.343048C331.140991,180.913391,330.788269,182.464722,330.100525,183.876755C329.284912,185.402817,327.990417,186.61911,326.415833,187.338638C324.171936,188.395706,321.654877,188.72998,319.212524,188.295227C317.964203,188.048447,316.787842,187.521973,315.772491,186.755524C314.332245,185.751999,313.161652,184.409088,312.364532,182.845856C311.819153,181.800247,311.407227,180.69043,311.138458,179.542328L310.207031,175.759995L300.801575,178.072845L299.023926,170.85611L327.780579,163.784363L330.52771,174.938004zM315.575714,174.43985L315.699463,174.941345C315.911407,175.872101,316.160706,176.794067,316.446716,177.704803C316.734985,178.68222,317.291321,179.559418,318.052795,180.237213C318.620514,180.667114,319.293762,180.936279,320.001617,181.016113C321.123322,181.060883,322.237854,180.828857,323.248352,180.340271C324.14624,179.851425,324.777618,178.986908,324.96933,177.983337C325.126617,177.021484,325.083862,176.037781,324.843781,175.09317C324.644379,174.164948,324.426147,173.241089,324.189056,172.321732L315.575714,174.43985z"/> <path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M116.693192,163.543213L113.851212,171.179825L95.025467,169.25325L110.58651,179.953522L107.74453,187.590118L77.373581,184.299744L80.062973,177.072876L100.10704,180.173035L83.216843,168.597382L85.788689,161.686646L106.05442,164.191376L88.928635,153.248993L91.548454,146.207825L116.693192,163.543213z"/> </svg>`;


/* ═══════ FOOTER ICON (base64 PNG) ═══════ */

const FOOTER_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABAGlDQ1BpY2MAABiVY2BgPMEABCwGDAy5eSVFQe5OChGRUQrsDxgYgRAMEpOLCxhwA6Cqb9cgai/r4lGHC3CmpBYnA+kPQKxSBLQcaKQIkC2SDmFrgNhJELYNiF1eUlACZAeA2EUhQc5AdgqQrZGOxE5CYicXFIHU9wDZNrk5pckIdzPwpOaFBgNpDiCWYShmCGJwZ3AC+R+iJH8RA4PFVwYG5gkIsaSZDAzbWxkYJG4hxFQWMDDwtzAwbDuPEEOESUFiUSJYiAWImdLSGBg+LWdg4I1kYBC+wMDAFQ0LCBxuUwC7zZ0hHwjTGXIYUoEingx5DMkMekCWEYMBgyGDGQCm1j8/yRb+6wAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH6gMKAjgH2Wn1xgAADEhJREFUeNrtmXtsVNedx7/n3Nfce2eu5+kZezx+MOMZO2PjOOAHBNdAbAR2Uchjo6br7YISqFiiRFrSKIrUAGLdpJtEVTdSkaJVUsRuVEVyE2GSUqALbDYP0WR5WCU2sbFj3MTYBgebuWPPzL1n/wCzxPEjJgmj1c5HOn/NOb97vt9zH7/fb4AMGTJkyJAhQ4YMGTL8f4R8F0FOnDgBURTJ5OQkALCampp06/r+eeutt2Cz2RCNRrPdbvdPNU3ba7PZXnW5XJtLSkp8kiThscceS/c2vx+OHTsGn8+HgoKCQlVVD1JKDQAMAKOUGrIsHwkEAkG73Y4XXngh3dudk1t6BO6++26Ew2HujTfeeFnX9a2Msa8GJQRWq/V3brf7X0zTZABAKQUhBBzHwTCMSZ7nvygtLb0Yj8fZoUOH0u3DwohGoygrKyuUJKkX109++qCUpnieHxcEYWzaGBcEYdRisZzyer0/AICDBw+mW9LCiEQiKC0tXSyK4shsBnyTYbVa31y9erW8ZMmStGnhbmVRfn4+JEkyLl261JRMJv0zzeF5flCSpKMcx3USQroEQThvtVr/SikdAJBlmqbFNM1cXdffGxoa6n3mmWdw9OjRtBmxIB555BEAgNvt/lue58cx7WR5no+53e4tr7/+Or3nnnv4UCjENzU1CY8//rj84IMPyna7/Z8JIQwAs9lsezdv3iysXLky3bIWxtKlS9HQ0CC4XK6tkiR18TyvcxwXkyTprMfj+emGDRvE+vr6r63zer0oKCioEAThrwCYIAiDeXl5d2VnZ6dFxy09AgDw+eefIxKJmGVlZR/ruv6WIAh/UFX13zwez6/Xrl17bHx83Jjp7V5TU4OHH3545P333w8lEomljDErpXRsZGTk8Icffoienp7basB3kgkuFLvdDlmWVwwPD+9PpVIOURR78vLy1iaTye4LFy58bf6KFStgs9m4c+fO+ePxeDiVShUCUE3THLZYLN1Op/PT1tbW0fb2drzyyivpkLQw7rzzTtTX10s2m+3fOY5jPM+bHo/nZwCwY8eOG/Nqa2tx77330kAgUKNp2iuiKHZzHBenlDJCCKOUGjzPfynL8gm73f50KBQKAMC2bdvSLXFuPvroI8iyjOLi4ny/3/83Lpfr4YKCgmWMMbJ7927s3LkTAFBSUpJtt9t3CYIwOPXSnG0QQkyLxXLK7XY379ixg6xevTrdMhfO8PAwQqEQlixZIhYWFq5yuVxtoiheJoSYuCnBEgRhRBCEIUEQhniev0wIMQkhSUEQRlVVPZebm/sQAKxfv37ea36jl2BLSwuWLVtGGGNWURSV6upq9PT0pHJzc3HgwIEFidy2bRueeuopDAwMqPF43BoIBMT6+vqk2+1mbW1t0sWLF9cMDAzsSiQSf+fz+XYxxg5PTEysY4xJAKAoyoVQKPQjURRfttvtr1JKP5yYmPghIaQvOzv7AdM0Px4fH3/W5/Od7OrqGmhtbcXhw4dv7UQ2bdoEl8uFwsLCfE3TfmmxWN4XBOG/FUV5x+12t9TU1Ejl5eULillUVIRgMOizWq1vchx3WlGUQyUlJYX5+fnIycmJiKI4AICpqvrpunXrsh0ORwXHcaNTd4Cqqr1VVVVLwuGwPxqN5ng8nrWU0nFCyEmO42wWi+VOSukVTdPeXLNmjbJ8+fI598PP9WN7eztsNltgcHDwXycnJxunip5kMonJycmVnZ2dRbW1tc/zPJ88efLkvOLz8/ORm5srdXV1rY7H442GYajJZPLLVCrlSCQSffF4XEilUtLU/OlFFgDE4/G8M2fO7GeMpa7PERlj1usGTa0zdV1v7OjoWKbr+p9uyYCGhgYcOXIEyWRy283ipzAMQ47FYv/4wQcfjMZisS6e5+kMYYjVav2yoaHho1OnTqUAuM6cOfMLXdd/ZBiGOiVS13XIsgyv16t0dnaK1xsrs0EAyABMACCEzKjBMAw1Ho83X7ly5U/bt2/HSy+9tDADxsbGUFVV5ezo6Gic6SQAIJVK2cfHx381tZnpMMY4XdePf/LJJ+u7u7tTdrt9aywW22ya5lfyD8MwYJomGGMU8+QmsiwPlJaW/kTX9Yscx5Hh4eHo0NDQXsYYmXZtJBKJOx544AGps7NzVkfprD9cq995QoiEOWCM8ddvw68NABzHcZzT6WTLly+XJiYm6qeLZ4zBNE2YpgnDMDCb2TcvSSQSMV3XRzs6Ojpjsdj52Q6AEKLFYjHBNM1Zg816B+Tk5KCuru5SV1fXx/F4PDqLSSmr1fqBKIqXkslkIhaL6YQQEEJAKQXHcdRms/0lGAymGGPs9OnTV2fZ6A0j5iMej+edPXv2gNVqPffQQw/d//bbb8/l2LxuzmrApk2b0NLSYjgcjt9MTEz8YHJysnD6pkVRfHvx4sWb33333cvd3d1s0aJF5vDwMHw+3415sVgMDQ0NaGlpgcfj+f3k5OSaVCql3Bxnqls01+lTSk1RFEcBmIwxieM4meO4+VL5kZycnMmRkZF5jZ2R++67D4wx+P3+1Yqi/CfHcZcJIaOCIAxpmrbP6/UGnE4ndu3aNW+s8vJyLFu2TPJ4PI/KstwxldzwPD8aCAQqCwoKEIlEakVRHMO0zyCl9Iqqqv01NTUrq6qqSqurq0vr6uoWMcaIzWarpJSO3fwZJISMEkKY3W7fDgBbtmy5NQMA4MUXXwQALF682OlwOCoEQbgrEAjcUVtbqwSDQRw/fvwbx3r22WcBAIsWLaoVBOESACaK4qWSkpKKYDCIcDhcKwjCGACmKEpvcXHxXXa7fS2ldFxV1e7GxsYcURT5rKysXJvNFrDb7XmapjVRSscppX/RNC2qKMo6QsiYIAj9gUCg1Ov1zrmn214NVlZWghCS1d/fv8UwjBJK6ZDD4XiREHJJFMXivr6+38bj8SoAhBAyCIAzDCNHVdXu+vr6Fe+9955L1/XfmaaZhWvPuGiapheAQSkdZIzxALxWq/W5K1eu/LyyspKdOnXqdstcOJs2bQJjDNFo1O1yuX4sy/J/UUpT+N8M8NPm5uZsq9VaQSm9kRnONFRVPRyJRHKKiormve4tN0S+Lffffz+i0agQDoe1aDRquXz5Mvnss89SdXV1eltbW0c4HN6fTCbHDcMoN01TFUXxclFR0at9fX22ZDK5kTFmmR6TEMJkWT7icDi2DQwMfPbcc8+hvb09XRJnp7GxEQDg9Xof1TTtpKZpp3Nzc38GAM8//zwAYNWqVdi6dSv1+/2rFEX5D5vN1lVYWFgty3IzpfQKvloKM0EQLmZlZf0yGAz6srKy8Nprr6Vb5uyEQiFEIhGPJEknADCO42Iej2e9IAhfSVn37dsHAKioqHD4/f573W73L1RV/aMoiv2U0s8lSepVFOW4w+H4p4KCgruam5u5+Yqf7xzGGJ5++mkMDQ2R8+fPE8bYnN/z3bt3AwDcbvdPKKVJXHvjH6murrZVVFTMuGaqT7hu3TqhrKzMEwgEgpqmFZeUlOTX1dWpBw4cQGtr6+0V/sQTT4DjOBQXF+c6nc5tmqa9pmnaPqfT+Q+hUMhjtVpnbE2Vl5ejqqrKpijKIVxrcCRdLtdGAHjyySdvr4hbZc+ePfB4PMjPzy9WFOUYpfTmjo2hKMrBoqKikMfjwdmzZ2+sO378OGRZhs/na+Y4LgaAWSyWP4fD4exgMJgWLbeUB1RWVsLv9/NHjx7do+v6ozP9Oaqq6pt5eXkvM8ZM4NqjYhgGrl69yo2NjW2Px+NNlFKWlZW1fXR09FdNTU145513/m8YEIlEQCkt6unpOZZIJPJnmkMpNTmO+1oZapomMU1TYowRURTP+f3+tYZh9Pb399928cAc5fCcrl0rYBRca0zMiGmaNJlMytOHYRgWxhghhDBRFF/v7e3tLSsrS4t4YJ6W2GxwHAdCyBeU0j4AnpnmCIIwKEnSGdxUklJKQSlliUTiqiAIHVlZWb9RVTUtt/63MmDp0qXYu3fvZafTuSeZTN4x1d66yaCYpmk/37lz529PnjxJGWOglEJVVXi9XiiKYmzcuNGIxWLIy8tLm3jgWxRDPp8PsiwLY2Njfx+LxR43DKMAAOE4blCW5Zc8Hs+ruq4nBwYG0irwezMAADZs2IDS0lLS1tbmNU0zQCmlkiR9UV1dfWF4eJjt378/3foyZMiQIUOGDBkyZMiQIcNM/A+SuM25qDqHNQAAAB50RVh0aWNjOmNvcHlyaWdodABHb29nbGUgSW5jLiAyMDE2rAszOAAAABR0RVh0aWNjOmRlc2NyaXB0aW9uAHNSR0K6kHMHAAAAAElFTkSuQmCC';
/* ═══════ LIGHT THEMES LIST ═══════ */

const LIGHT_THEMES = ['riad', 'medina'];

/* ═══════ APP VERSION ═══════ */

const APP_VERSION = '3.0';

/* ═══════ SOUND EFFECTS ═══════ */

let soundEnabled = false;
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function playSound(type) {
  if (!soundEnabled) return;
  if (!audioCtx) audioCtx = new AudioCtx();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  gain.gain.value = 0.08;
  const t = audioCtx.currentTime;
  switch (type) {
    case 'click':
      osc.frequency.value = 800; osc.type = 'sine';
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      osc.start(t); osc.stop(t + 0.08); break;
    case 'success':
      osc.frequency.value = 523; osc.type = 'sine';
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      osc.start(t); osc.stop(t + 0.3);
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.connect(gain2); gain2.connect(audioCtx.destination);
      gain2.gain.value = 0.08; osc2.frequency.value = 659; osc2.type = 'sine';
      gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
      osc2.start(t + 0.15); osc2.stop(t + 0.4); break;
    case 'error':
      osc.frequency.value = 200; osc.type = 'square';
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      osc.start(t); osc.stop(t + 0.25); break;
  }
}

/* ═══════ i18n ═══════ */

const LANG = {
  en: {
    title: 'Mac Weird Keys', subtitle: '⌨️ Find & copy symbols you can\'t type!',
    disconnected: 'Disconnected', connected: 'Connected',
    mainSection: 'Symbol Grid', mainDesc: 'Click any symbol to see info & copy it',
    sectionA: 'Interactive Keyboard', sectionB: 'Challenge Mode',
    activityLog: 'Activity Log', eventsMsg: 'Events & messages',
    clear: 'Clear', copy: 'Copy', theme: 'Theme',
    settings: '⚙️ Settings', language: 'Language',
    helpSettings: '❓ Help & Settings', settingsTab: '⚙️',
    help: '❓ Help', faq: 'FAQ', howto: 'How-To', wiki: 'Wiki',
    faq_q1: 'What is Mac Weird Keys?', faq_a1: 'An educational app that helps kids find and copy symbols like @, #, {, }, [, ], |, \\, ~ that are hard to type on a Mac keyboard.',
    faq_q2: 'How do I copy a symbol?', faq_a2: 'Click any symbol in the grid and it gets copied to your clipboard automatically. Then paste it anywhere!',
    faq_q3: 'What is X-ray mode?', faq_a3: 'X-ray mode reveals extra details about each symbol — its Unicode name, keyboard shortcut, and usage examples.',
    faq_q4: 'Is my data private?', faq_a4: 'Yes. Everything runs locally in your browser. No data is sent anywhere.',
    howto_1: 'Browse the Symbol Grid to discover weird keys and special characters.',
    howto_2: 'Click any symbol to see its name, shortcut, and copy it to your clipboard.',
    howto_3: 'Open the Interactive Keyboard to see where hidden symbols live on your Mac.',
    howto_4: 'Try Challenge Mode to test your knowledge of special characters!',
    wiki_themes_title: '🎨 Themes', wiki_themes: '8 built-in themes: 6 dark (Mosque, Zellige, Andalus, Space, Jungle, Robot) and 2 light Islamic themes (Riad, Medina).',
    wiki_i18n_title: '⌨️ Modifier Keys', wiki_i18n: 'Mac keyboards use special modifier keys: Option (⌥), Command (⌘), Shift (⇧), Control (⌃). Many symbols require Option or Shift+Option combos.',
    wiki_log_title: '🗺️ Keyboard Layouts', wiki_log: 'Different keyboard layouts (US, UK, French, Arabic) place symbols in different spots. Mac Weird Keys shows you where each symbol hides on your layout.',
    wiki_privacy_title: '🔒 Privacy', wiki_privacy: 'Local-first, privacy-first. All data stays in your browser. No tracking, no analytics, no external calls.',
    working: 'Working…',
    t_mosque: 'Mosque', t_zellige: 'Zellige', t_andalus: 'Andalus',
    t_riad: 'Riad', t_medina: 'Medina',
    t_space: 'Space', t_jungle: 'Jungle', t_robot: 'Robot',
    ready: '🚀 App ready!',
    logCleared: 'Log cleared', copied: 'Copied!', copyFail: 'Copy failed',
    export: 'Export', filterAll: 'All',
    soundEffects: '🔊 Sound effects',
    whisperMode: 'Whisper mode', breathingGuide: 'Breathing guide', dhikrTap: 'Tap',
    musicMode: 'Music reactive', chatPlaceholder: 'Talk to the robot...',
    splashHint: 'tap to skip',
    newVersion: 'UPDATE',
    langChanged: '🌐 Language → English',
    themeChanged: '🎨 Theme →',
    statusReady: 'Ready',
    symbolGrid: 'Symbol Grid',
    symbolGridDesc: 'Click any symbol to see info & copy it',
    symbolInfo: 'Symbol Info',
    interactiveKeyboard: 'Interactive Keyboard',
    azerty: 'AZERTY',
    qwerty: 'QWERTY',
    xrayMode: 'X-Ray Mode',
    keyboardHint: 'Click any key to see its hidden symbols (Option & Shift+Option)',
    macSpecialKeys: 'Mac Special Keys',
    macSecrets: 'Mac Secrets',
    challenge: 'Challenge Mode',
    streak: 'Streak:',
    best: 'Best:',
    nextChallenge: 'Next Challenge',
    cheatSheet: 'Cheat Sheet',
    cheatSheetDesc: 'All weird symbols and how to type them on your Mac',
    copyCheatSheet: 'Copy Cheat Sheet',
    wiki_keys_title: '⌨ Modifier Keys',
    wiki_keys: 'Mac has 4 modifier keys: Command (⌘), Option (⌥), Control (⌃), Shift (⇧). Option is the key to most hidden symbols!',
    wiki_layouts_title: '⌨ Keyboard Layouts',
    wiki_layouts: 'AZERTY is the French layout. QWERTY is the English/US layout. Symbols are in different places!',
    virtualKeyboard: 'Virtual Keyboard',
    vkbHint: 'Click modifier keys to reveal hidden characters, then click a letter',
    macTips: 'Mac Tips',
    macKb: 'Mac',
    windowsKb: 'Windows',
    azertyFr: 'AZERTY FR',
    learnToType: 'Learn to Type',
    fingerZones: 'Finger Zones',
    fingerFinder: 'Finger Finder',
    practiceMode: 'Practice',
    homeRowHint: 'Feel the bumps on F and J! That\'s where your index fingers rest.',
    fingerFinderHint: 'Click any key to see which finger types it!',
    detectiveGame: 'Keyboard Detective',
    findDifferences: 'Find the keys that are different between AZERTY and QWERTY!',
    newGame: 'Reset',
    detectiveWin: 'You found all differences! Amazing detective!',
    advanced: 'Advanced',
    wrongKbSim: 'Wrong Keyboard Simulator',
    wrongKbDesc: 'Type text and see what happens on other keyboard layouts! Ever typed gibberish because the wrong layout was active?',
    simulateMode: 'Simulate',
    decodeMode: 'Decode',
    typingOn: 'Typing on:',
    decodeHint: 'Paste the gibberish text and we\'ll figure out what it was supposed to say!',
    decode: 'Decode',
    decodeResults: 'Possible corrections:',
  },
  fr: {
    title: 'Touches Bizarres Mac', subtitle: '⌨️ Trouve et copie les symboles introuvables !',
    disconnected: 'Déconnecté', connected: 'Connecté',
    mainSection: 'Grille de Symboles', mainDesc: 'Clique sur un symbole pour le copier',
    sectionA: 'Clavier Interactif', sectionB: 'Mode Défi',
    activityLog: 'Journal', eventsMsg: 'Événements et messages',
    clear: 'Effacer', copy: 'Copier', theme: 'Thème',
    settings: '⚙️ Paramètres', language: 'Langue',
    helpSettings: '❓ Aide & Paramètres', settingsTab: '⚙️',
    help: '❓ Aide', faq: 'FAQ', howto: 'Guide', wiki: 'Wiki',
    faq_q1: 'C\'est quoi Touches Bizarres Mac ?', faq_a1: 'Une appli éducative pour trouver et copier les symboles comme @, #, {, }, [, ], |, \\, ~ introuvables sur un clavier Mac.',
    faq_q2: 'Comment copier un symbole ?', faq_a2: 'Clique sur un symbole dans la grille et il est copié automatiquement. Colle-le où tu veux !',
    faq_q3: 'C\'est quoi le mode Rayons X ?', faq_a3: 'Le mode Rayons X révèle des détails sur chaque symbole — son nom Unicode, son raccourci clavier et des exemples.',
    faq_q4: 'Mes données sont privées ?', faq_a4: 'Oui. Tout fonctionne localement dans ton navigateur. Rien n\'est envoyé nulle part.',
    howto_1: 'Parcours la Grille de Symboles pour découvrir les caractères spéciaux.',
    howto_2: 'Clique sur un symbole pour voir son nom, son raccourci et le copier.',
    howto_3: 'Ouvre le Clavier Interactif pour voir où se cachent les symboles sur ton Mac.',
    howto_4: 'Essaie le Mode Défi pour tester tes connaissances des caractères spéciaux !',
    wiki_themes_title: '🎨 Thèmes', wiki_themes: '8 thèmes intégrés : 6 sombres (Mosquée, Zellige, Andalous, Espace, Jungle, Robot) et 2 thèmes islamiques clairs (Riad, Médina).',
    wiki_i18n_title: '⌨️ Touches Modificatrices', wiki_i18n: 'Les claviers Mac utilisent des touches spéciales : Option (⌥), Command (⌘), Shift (⇧), Control (⌃). Beaucoup de symboles nécessitent Option ou Shift+Option.',
    wiki_log_title: '🗺️ Dispositions Clavier', wiki_log: 'Différentes dispositions (US, UK, français, arabe) placent les symboles à des endroits différents. Touches Bizarres Mac te montre où chaque symbole se cache.',
    wiki_privacy_title: '🔒 Confidentialité', wiki_privacy: 'Local-first, privacy-first. Toutes les données restent dans ton navigateur. Pas de tracking, pas d\'analytics.',
    working: 'En cours…',
    t_mosque: 'Mosquée', t_zellige: 'Zellige', t_andalus: 'Andalous',
    t_riad: 'Riad', t_medina: 'Médina',
    t_space: 'Espace', t_jungle: 'Jungle', t_robot: 'Robot',
    ready: '🚀 Application prête !',
    logCleared: 'Journal effacé', copied: 'Copié !', copyFail: 'Échec',
    export: 'Exporter', filterAll: 'Tout',
    soundEffects: '🔊 Effets sonores',
    whisperMode: 'Mode murmure', breathingGuide: 'Guide respiratoire', dhikrTap: 'Tap',
    musicMode: 'Réactif musique', chatPlaceholder: 'Parle au robot...',
    splashHint: 'appuyer pour passer',
    newVersion: 'MAJ',
    langChanged: '🌐 Langue → Français',
    themeChanged: '🎨 Thème →',
    statusReady: 'Prêt',
    symbolGrid: 'Grille de Symboles',
    symbolGridDesc: 'Clique sur un symbole pour le copier',
    symbolInfo: 'Info Symbole',
    interactiveKeyboard: 'Clavier Interactif',
    azerty: 'AZERTY',
    qwerty: 'QWERTY',
    xrayMode: 'Mode Rayon-X',
    keyboardHint: 'Clique sur une touche pour voir ses symboles cachés (Option & Shift+Option)',
    macSpecialKeys: 'Touches Spéciales Mac',
    macSecrets: 'Secrets Mac',
    challenge: 'Mode Défi',
    streak: 'Série :',
    best: 'Record :',
    nextChallenge: 'Défi Suivant',
    cheatSheet: 'Aide-Mémoire',
    cheatSheetDesc: 'Tous les symboles bizarres et comment les taper sur ton Mac',
    copyCheatSheet: 'Copier l\'Aide-Mémoire',
    wiki_keys_title: '⌨ Touches de Modification',
    wiki_keys: 'Le Mac a 4 touches de modification : Commande (⌘), Option (⌥), Contrôle (⌃), Majuscule (⇧). Option est la clé des symboles cachés !',
    wiki_layouts_title: '⌨ Dispositions Clavier',
    wiki_layouts: 'AZERTY est la disposition française. QWERTY est la disposition anglaise/US. Les symboles ne sont pas aux mêmes endroits !',
    virtualKeyboard: 'Clavier Virtuel',
    vkbHint: 'Clique sur les touches de modification pour révéler les caractères cachés',
    macTips: 'Astuces Mac',
    macKb: 'Mac',
    windowsKb: 'Windows',
    azertyFr: 'AZERTY FR',
    learnToType: 'Apprendre à taper',
    fingerZones: 'Zones des doigts',
    fingerFinder: 'Trouve le doigt',
    practiceMode: 'Pratique',
    homeRowHint: 'Sens les bosses sur F et J ! C\'est là que tes index se posent.',
    fingerFinderHint: 'Clique sur une touche pour voir quel doigt l\'utilise !',
    detectiveGame: 'Détective Clavier',
    findDifferences: 'Trouve les touches différentes entre AZERTY et QWERTY !',
    newGame: 'Recommencer',
    detectiveWin: 'Tu as trouvé toutes les différences ! Excellent détective !',
    advanced: 'Avancé',
    wrongKbSim: 'Simulateur de mauvais clavier',
    wrongKbDesc: 'Tape du texte et vois ce qui se passe sur d\'autres claviers ! Tu as déjà tapé du charabia parce que le mauvais clavier était activé ?',
    simulateMode: 'Simuler',
    decodeMode: 'Décoder',
    typingOn: 'Tu tapes sur :',
    decodeHint: 'Colle le texte bizarre et on va trouver ce que ça voulait dire !',
    decode: 'Décoder',
    decodeResults: 'Corrections possibles :',
  },
  ar: {
    title: 'مفاتيح ماك الغريبة', subtitle: '⌨️ اعثر على الرموز وانسخها!',
    disconnected: 'غير متصل', connected: 'متصل',
    mainSection: 'شبكة الرموز', mainDesc: 'اضغط على أي رمز لمعرفته ونسخه',
    sectionA: 'لوحة مفاتيح تفاعلية', sectionB: 'وضع التحدي',
    activityLog: 'سجل النشاط', eventsMsg: 'الأحداث والرسائل',
    clear: 'مسح', copy: 'نسخ', theme: 'المظهر',
    settings: '⚙️ الإعدادات', language: 'اللغة',
    helpSettings: '❓ مساعدة وإعدادات', settingsTab: '⚙️',
    help: '❓ مساعدة', faq: 'أسئلة شائعة', howto: 'كيف تستخدم', wiki: 'ويكي',
    faq_q1: 'ما هو مفاتيح ماك الغريبة؟', faq_a1: 'تطبيق تعليمي يساعد الأطفال على إيجاد ونسخ رموز مثل @، #، {، }، [، ]، |، \\، ~ التي يصعب كتابتها على لوحة مفاتيح ماك.',
    faq_q2: 'كيف أنسخ رمزًا؟', faq_a2: 'اضغط على أي رمز في الشبكة وسيُنسخ تلقائيًا إلى الحافظة. ثم الصقه أينما تريد!',
    faq_q3: 'ما هو وضع الأشعة السينية؟', faq_a3: 'وضع الأشعة السينية يكشف تفاصيل إضافية عن كل رمز — اسمه في يونيكود، اختصار لوحة المفاتيح، وأمثلة استخدام.',
    faq_q4: 'هل بياناتي خاصة؟', faq_a4: 'نعم. كل شيء يعمل محليًا في متصفحك. لا يتم إرسال أي بيانات.',
    howto_1: 'تصفح شبكة الرموز لاكتشاف المفاتيح الغريبة والأحرف الخاصة.',
    howto_2: 'اضغط على أي رمز لمعرفة اسمه واختصاره ونسخه إلى الحافظة.',
    howto_3: 'افتح لوحة المفاتيح التفاعلية لمعرفة أين تختبئ الرموز المخفية على ماك.',
    howto_4: 'جرّب وضع التحدي لاختبار معرفتك بالأحرف الخاصة!',
    wiki_themes_title: '🎨 المظاهر', wiki_themes: '8 مظاهر مدمجة: 6 داكنة (مسجد، زليج، أندلس، فضاء، أدغال، روبوت) و2 مظهرين إسلاميين فاتحين (رياض، مدينة).',
    wiki_i18n_title: '⌨️ مفاتيح التعديل', wiki_i18n: 'تستخدم لوحات مفاتيح ماك مفاتيح تعديل خاصة: Option (⌥)، Command (⌘)، Shift (⇧)، Control (⌃). العديد من الرموز تحتاج Option أو Shift+Option.',
    wiki_log_title: '🗺️ تخطيطات لوحة المفاتيح', wiki_log: 'تخطيطات مختلفة (أمريكي، بريطاني، فرنسي، عربي) تضع الرموز في أماكن مختلفة. مفاتيح ماك الغريبة يُظهر لك أين يختبئ كل رمز.',
    wiki_privacy_title: '🔒 الخصوصية', wiki_privacy: 'محلي أولًا، خصوصية أولًا. كل البيانات تبقى في متصفحك. بدون تتبع، بدون تحليلات.',
    working: 'جارٍ…',
    t_mosque: 'مسجد', t_zellige: 'زليج', t_andalus: 'أندلس',
    t_riad: 'رياض', t_medina: 'مدينة',
    t_space: 'فضاء', t_jungle: 'أدغال', t_robot: 'روبوت',
    ready: '🚀 التطبيق جاهز!',
    logCleared: 'تم مسح السجل', copied: 'تم النسخ!', copyFail: 'فشل النسخ',
    export: 'تصدير', filterAll: 'الكل',
    soundEffects: '🔊 مؤثرات صوتية',
    whisperMode: 'وضع الهمس', breathingGuide: 'دليل التنفس', dhikrTap: 'اضغط',
    musicMode: 'تفاعل موسيقي', chatPlaceholder: 'تحدث مع الروبوت...',
    splashHint: 'انقر للتخطي',
    newVersion: 'تحديث',
    langChanged: '🌐 اللغة ← العربية',
    themeChanged: '🎨 المظهر ←',
    statusReady: 'جاهز',
    symbolGrid: 'شبكة الرموز',
    symbolGridDesc: 'اضغط على أي رمز لمعرفته ونسخه',
    symbolInfo: 'معلومات الرمز',
    interactiveKeyboard: 'لوحة مفاتيح تفاعلية',
    azerty: 'AZERTY',
    qwerty: 'QWERTY',
    xrayMode: 'وضع الأشعة السينية',
    keyboardHint: 'اضغط على أي مفتاح لرؤية رموزه المخفية (Option و Shift+Option)',
    macSpecialKeys: 'مفاتيح ماك الخاصة',
    macSecrets: 'أسرار ماك',
    challenge: 'وضع التحدي',
    streak: 'سلسلة:',
    best: 'أفضل:',
    nextChallenge: 'التحدي التالي',
    cheatSheet: 'ورقة مرجعية',
    cheatSheetDesc: 'كل الرموز الغريبة وطريقة كتابتها على ماك',
    copyCheatSheet: 'نسخ الورقة المرجعية',
    wiki_keys_title: '⌨ مفاتيح التعديل',
    wiki_keys: 'ماك لديه 4 مفاتيح تعديل: الأوامر (⌘)، الخيار (⌥)، التحكم (⌃)، العالي (⇧). مفتاح الخيار هو سر الرموز المخفية!',
    wiki_layouts_title: '⌨ تخطيطات لوحة المفاتيح',
    wiki_layouts: 'AZERTY هو التخطيط الفرنسي. QWERTY هو التخطيط الإنجليزي/الأمريكي. الرموز في أماكن مختلفة!',
    virtualKeyboard: 'لوحة مفاتيح افتراضية',
    vkbHint: 'اضغط على مفاتيح التعديل لكشف الأحرف المخفية',
    macTips: 'نصائح ماك',
    macKb: 'ماك',
    windowsKb: 'ويندوز',
    azertyFr: 'AZERTY FR',
    learnToType: 'تعلم الكتابة',
    fingerZones: 'مناطق الأصابع',
    fingerFinder: 'اكتشف الإصبع',
    practiceMode: 'تدريب',
    homeRowHint: 'حس بالنتوءات على F و J! هنا تستريح أصابع السبابة.',
    fingerFinderHint: 'انقر على أي مفتاح لمعرفة أي إصبع يستخدمه!',
    detectiveGame: 'محقق لوحة المفاتيح',
    findDifferences: 'اعثر على المفاتيح المختلفة بين AZERTY و QWERTY!',
    newGame: 'إعادة',
    detectiveWin: 'وجدت كل الاختلافات! محقق رائع!',
    advanced: 'متقدم',
    wrongKbSim: 'محاكي لوحة المفاتيح الخاطئة',
    wrongKbDesc: 'اكتب نصاً وشاهد ماذا يحدث على لوحات مفاتيح أخرى! هل كتبت رطانة لأن التخطيط الخاطئ كان مفعلاً؟',
    simulateMode: 'محاكاة',
    decodeMode: 'فك التشفير',
    typingOn: 'تكتب على:',
    decodeHint: 'الصق النص الغريب وسنكتشف ما كان يُفترض أن يقول!',
    decode: 'فك التشفير',
    decodeResults: 'التصحيحات الممكنة:',
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const s = LANG[lang];
  if (!s) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (s[k] != null) el.textContent = s[k];
  });
  document.querySelectorAll('[data-i18n-opt]').forEach(opt => {
    const k = opt.dataset.i18nOpt;
    if (s[k] != null) opt.textContent = s[k];
  });
  document.title = `${s.title} — mac-weird-keys`;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  const sel = $('langSelect');
  if (sel) sel.value = lang;
  try { localStorage.setItem('wdiy-lang', lang); } catch {}
  log(s.langChanged, 'info');
}

/* ═══════ THEMES ═══════ */

function setTheme(name) {
  document.documentElement.dataset.theme = name;
  // Toggle shared .light-theme class
  document.documentElement.classList.toggle('light-theme', LIGHT_THEMES.includes(name));
  const sel = $('themeSelect');
  if (sel) sel.value = name;
  const s = LANG[currentLang];
  const label = s['t_' + name] || name;
  try { localStorage.setItem('wdiy-theme', name); } catch {}
  playThemeMelody(name);
  log(`${s.themeChanged} ${label}`, 'info');
}

/* ═══════ LOG ═══════ */

let logContainer;

function log(msg, type = 'info') {
  if (!logContainer) logContainer = $('logContainer');
  if (!logContainer) return;
  const d = document.createElement('div');
  d.className = `log-line ${type}`;
  const fullText = `[${new Date().toLocaleTimeString()}] ${msg}`;

  if (typewriterEnabled) {
    logContainer.appendChild(d);
    typewriterAppend(d, fullText);
  } else {
    d.textContent = fullText;
    logContainer.appendChild(d);
  }

  logContainer.scrollTop = logContainer.scrollHeight;
  if (type === 'success') { playSound('success'); pulseBismillah('success'); setPetState('happy'); }
  else if (type === 'error') { playSound('error'); pulseBismillah('error'); setPetState('sad'); }
  logWithHistory(msg, type);
  applyLogFilter();
  resetPetSleep();
}

function clearLog() {
  if (!logContainer) logContainer = $('logContainer');
  if (logContainer) logContainer.innerHTML = '';
  log(LANG[currentLang].logCleared);
}

async function copyLog() {
  if (!logContainer) logContainer = $('logContainer');
  if (!logContainer) return;
  const t = Array.from(logContainer.children).map(d => d.textContent).join('\n');
  try { await navigator.clipboard.writeText(t); log(LANG[currentLang].copied, 'success'); }
  catch { log(LANG[currentLang].copyFail, 'error'); }
}

/* ═══════ TOAST ═══════ */

let toastTimer = null;

function showToast(msg, autoHideMs = 0) {
  const el = $('toastIndicator'), t = $('toastMessage');
  if (el && t) {
    t.textContent = msg || LANG[currentLang].working;
    el.style.display = 'block';
  }
  if (toastTimer) clearTimeout(toastTimer);
  if (autoHideMs > 0) {
    toastTimer = setTimeout(hideToast, autoHideMs);
  }
}

function hideToast() {
  const el = $('toastIndicator');
  if (el) el.style.display = 'none';
  if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }
}

/* ═══════ STATUS ═══════ */

function setStatus(connected) {
  const pill = $('statusPill'), txt = $('statusText'), s = LANG[currentLang];
  if (txt) txt.textContent = connected ? s.connected : s.disconnected;
  if (pill) pill.classList.toggle('connected', connected);
}

/* ═══════ SPLASH ═══════ */

let splashTimer;

function dismissSplash() {
  const s = $('splash');
  if (!s) return;
  s.classList.add('hidden');
  if (splashTimer) clearTimeout(splashTimer);
  setTimeout(() => s.remove(), 600);
  playSound('click');
}

function initSplash() {
  const s = $('splash');
  if (!s) return;
  const sl = $('splashLogo');
  if (sl) sl.innerHTML = LOGO_SVG;
  splashTimer = setTimeout(dismissSplash, 2500);
}

/* ═══════ LOG FILTERS ═══════ */

let activeLogFilter = 'all';

function initLogFilters() {
  const filters = document.querySelectorAll('.log-filter');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeLogFilter = btn.dataset.filter;
      applyLogFilter();
      playSound('click');
    });
  });
}

function applyLogFilter() {
  if (!logContainer) logContainer = $('logContainer');
  if (!logContainer) return;
  Array.from(logContainer.children).forEach(line => {
    if (activeLogFilter === 'all') { line.style.display = ''; return; }
    line.style.display = line.classList.contains(activeLogFilter) ? '' : 'none';
  });
}

/* ═══════ EXPORT LOG ═══════ */

function exportLog() {
  if (!logContainer) logContainer = $('logContainer');
  if (!logContainer) return;
  const lines = Array.from(logContainer.children).map(d => d.textContent);
  const text = lines.join('\n');
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `log-${new Date().toISOString().slice(0,10)}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  log(LANG[currentLang].copied, 'success');
  playSound('success');
}

/* ═══════ VERSION CHECKER ═══════ */

function checkVersion() {
  try {
    const stored = localStorage.getItem('wdiy-latest-version');
    if (stored && stored !== APP_VERSION) {
      // Show update badge on settings button
      const btn = $('settingsBtn');
      if (btn && !btn.querySelector('.version-update')) {
        const badge = document.createElement('span');
        badge.className = 'version-update';
        badge.textContent = LANG[currentLang].newVersion || 'UPDATE';
        btn.style.position = 'relative';
        badge.style.cssText = 'position:absolute;top:-6px;inset-inline-end:-6px;';
        btn.appendChild(badge);
      }
    }
  } catch {}
}

// Call this from your deployment/CI to set latest version:
// localStorage.setItem('wdiy-latest-version', '1.3');

/* ═══════ APP-TO-APP MESSAGING ═══════ */

const APP_MSG_KEY = 'wdiy-app-msg';

function sendAppMessage(type, data) {
  try {
    const msg = { type, data, from: document.title, ts: Date.now() };
    localStorage.setItem(APP_MSG_KEY, JSON.stringify(msg));
    localStorage.removeItem(APP_MSG_KEY); // triggers storage event on other tabs
  } catch {}
}

function onAppMessage(callback) {
  window.addEventListener('storage', e => {
    if (e.key !== APP_MSG_KEY || !e.newValue) return;
    try {
      const msg = JSON.parse(e.newValue);
      callback(msg);
    } catch {}
  });
}

/* ═══════ KONAMI CODE ═══════ */

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;

function initKonami() {
  document.addEventListener('keydown', e => {
    if (e.key === KONAMI[konamiIdx]) {
      konamiIdx++;
      if (konamiIdx === KONAMI.length) {
        konamiIdx = 0;
        activateRetroTheme();
      }
    } else {
      konamiIdx = 0;
    }
  });
}

function activateRetroTheme() {
  setTheme('retro');
  log('🕹️ KONAMI CODE ACTIVATED — RETRO MODE!', 'success');
  playSound('success');
}

/* ═══════ BISMILLAH HEARTBEAT ═══════ */

function pulseBismillah(type) {
  const bism = document.querySelector('.bismillah');
  if (!bism) return;
  bism.classList.remove('pulse-success', 'pulse-error');
  void bism.offsetWidth; // force reflow
  bism.classList.add(type === 'error' ? 'pulse-error' : 'pulse-success');
  setTimeout(() => bism.classList.remove('pulse-success', 'pulse-error'), 700);
}

/* ═══════ MORSE CODE LOG ═══════ */

const MORSE = {
  'a':'.-','b':'-...','c':'-.-.','d':'-..','e':'.','f':'..-.','g':'--.','h':'....','i':'..','j':'.---',
  'k':'-.-','l':'.-..','m':'--','n':'-.','o':'---','p':'.--.','q':'--.-','r':'.-.','s':'...','t':'-',
  'u':'..-','v':'...-','w':'.--','x':'-..-','y':'-.--','z':'--..','0':'-----','1':'.----','2':'..---',
  '3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',' ':'/'
};

let morseTimeout = null;
let morseActive = false;

function textToMorse(text) {
  return text.toLowerCase().split('').map(c => MORSE[c] || '').join(' ');
}

async function blinkMorse(text) {
  if (morseActive) return;
  morseActive = true;
  const dot = document.querySelector('.status-dot');
  if (!dot) { morseActive = false; return; }
  const orig = dot.style.background;
  const morse = textToMorse(text.replace(/\[.*?\]\s*/g, '')); // strip timestamp
  for (const ch of morse) {
    if (!morseActive) break;
    if (ch === '.') {
      dot.style.background = '#33ff33'; dot.style.boxShadow = '0 0 8px #33ff33';
      await sleep(100);
    } else if (ch === '-') {
      dot.style.background = '#33ff33'; dot.style.boxShadow = '0 0 8px #33ff33';
      await sleep(300);
    } else if (ch === '/') {
      await sleep(400);
      continue;
    } else if (ch === ' ') {
      await sleep(200);
      continue;
    }
    dot.style.background = orig; dot.style.boxShadow = '';
    await sleep(100);
  }
  dot.style.background = ''; dot.style.boxShadow = '';
  morseActive = false;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function initMorseLog() {
  document.addEventListener('mousedown', e => {
    const line = e.target.closest('.log-line');
    if (!line) return;
    morseTimeout = setTimeout(() => blinkMorse(line.textContent), 600);
  });
  document.addEventListener('mouseup', () => {
    if (morseTimeout) { clearTimeout(morseTimeout); morseTimeout = null; }
  });
}

/* ═══════ MATRIX RAIN ═══════ */

let matrixRunning = false;
let matrixAnim = null;

const ARABIC_CHARS = 'بسمالرحنيوكلتعدفقثصضطظغشزخجذأؤئإءةىآ٠١٢٣٤٥٦٧٨٩';

function toggleMatrix() {
  const canvas = $('matrixCanvas');
  if (!canvas) return;
  if (matrixRunning) {
    matrixRunning = false;
    cancelAnimationFrame(matrixAnim);
    canvas.classList.remove('active');
    log('🔴 Matrix rain off', 'info');
    return;
  }
  matrixRunning = true;
  canvas.classList.add('active');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const cols = Math.floor(canvas.width / 16);
  const drops = Array(cols).fill(1);

  function draw() {
    if (!matrixRunning) return;
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#33ff33';
    ctx.font = '14px Amiri, serif';
    for (let i = 0; i < drops.length; i++) {
      const ch = ARABIC_CHARS[Math.floor(Math.random() * ARABIC_CHARS.length)];
      ctx.fillText(ch, i * 16, drops[i] * 16);
      if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    matrixAnim = requestAnimationFrame(draw);
  }
  draw();
  log('🟢 Matrix rain on!', 'success');
}

let logoClickCount = 0;
let logoClickTimer = null;

function initMatrixTrigger() {
  const logo = $('logoWrap');
  if (!logo) return;
  logo.style.cursor = 'pointer';
  logo.addEventListener('click', () => {
    logoClickCount++;
    if (logoClickTimer) clearTimeout(logoClickTimer);
    if (logoClickCount >= 3) {
      logoClickCount = 0;
      toggleMatrix();
    } else {
      logoClickTimer = setTimeout(() => logoClickCount = 0, 500);
    }
  });
}

/* ═══════ DEBUG PANEL (FPS + MEMORY) ═══════ */

function initDebug() {
  if (!new URLSearchParams(window.location.search).has('debug')) return;
  const panel = $('debugPanel');
  if (!panel) return;
  panel.classList.add('active');
  const fpsEl = $('debugFps'), memEl = $('debugMem');
  let frames = 0, lastTime = performance.now();

  function tick() {
    frames++;
    const now = performance.now();
    if (now - lastTime >= 1000) {
      if (fpsEl) fpsEl.textContent = frames + ' FPS';
      if (memEl && performance.memory) {
        memEl.textContent = (performance.memory.usedJSHeapSize / 1048576).toFixed(1) + ' MB';
      }
      frames = 0;
      lastTime = now;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  log('🐛 Debug mode active', 'info');
}

/* ═══════ SHAKE TO REPORT ═══════ */

function initShakeReport() {
  if (!window.DeviceMotionEvent) return;
  let lastShake = 0;
  const THRESHOLD = 25;

  window.addEventListener('devicemotion', e => {
    const acc = e.accelerationIncludingGravity;
    if (!acc) return;
    const force = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z);
    if (force > THRESHOLD && Date.now() - lastShake > 2000) {
      lastShake = Date.now();
      generateBugReport();
    }
  });
}

function generateBugReport() {
  if (!logContainer) logContainer = $('logContainer');
  const lines = logContainer ? Array.from(logContainer.children).map(d => d.textContent) : [];
  const report = {
    app: document.title,
    version: APP_VERSION,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    screen: `${screen.width}x${screen.height}`,
    viewport: `${innerWidth}x${innerHeight}`,
    theme: document.documentElement.dataset.theme,
    lang: currentLang,
    log: lines.slice(-50) // last 50 entries
  };
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bug-report-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  log('📱 Bug report exported (shake)', 'success');
  playSound('success');
}

/* ═══════ TIME-TRAVEL LOG ═══════ */

const logHistory = [];

function logWithHistory(msg, type) {
  logHistory.push({ msg, type, ts: Date.now() });
}

// Time-travel: Ctrl+Z in log panel undoes last log entry
function initTimeTravel() {
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'z') {
      const panel = $('logPanel');
      if (!panel || !panel.classList.contains('open')) return;
      e.preventDefault();
      if (!logContainer) logContainer = $('logContainer');
      if (logContainer && logContainer.lastChild) {
        logContainer.removeChild(logContainer.lastChild);
        logHistory.pop();
        playSound('click');
      }
    }
  });
}

/* ═══════ TYPEWRITER LOG MODE ═══════ */

let typewriterEnabled = true;

async function typewriterAppend(element, text) {
  element.classList.add('typing');
  element.textContent = '';
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    if (element.parentElement) element.parentElement.scrollTop = element.parentElement.scrollHeight;
    await sleep(12 + Math.random() * 18);
  }
  element.classList.remove('typing');
}

/* ═══════ HIJRI DATE ═══════ */

function calcHijriDate() {
  // Approximate Hijri conversion (Kuwaiti algorithm)
  const d = new Date();
  const jd = Math.floor((11 * d.getFullYear() + 3) / 30) + 354 * d.getFullYear() +
    30 * Math.floor((d.getMonth() + 1 - 1) / 2) + Math.floor(d.getDate() / 2) - 385;

  // Use Intl if available (much more accurate)
  try {
    const hijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
      day: 'numeric', month: 'long', year: 'numeric'
    }).format(d);
    return hijri;
  } catch {
    return '';
  }
}

function initHijriDate() {
  const el = $('hijriDate');
  if (!el) return;
  const h = calcHijriDate();
  if (h) el.textContent = h;
}

/* ═══════ WHISPER MODE (Voice-to-Log) ═══════ */

let recognition = null;
let whisperActive = false;

function toggleWhisper() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    log('🎤 Speech not supported in this browser', 'error');
    return;
  }
  if (whisperActive) {
    if (recognition) recognition.stop();
    whisperActive = false;
    log('🎤 Whisper mode off', 'info');
    return;
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = currentLang === 'ar' ? 'ar-DZ' : currentLang === 'fr' ? 'fr-FR' : 'en-US';

  recognition.onresult = e => {
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        const text = e.results[i][0].transcript.trim();
        if (text) log(`🎤 ${text}`, 'rx');
      }
    }
  };
  recognition.onerror = e => log(`🎤 Error: ${e.error}`, 'error');
  recognition.onend = () => { if (whisperActive) recognition.start(); };

  recognition.start();
  whisperActive = true;
  log('🎤 Whisper mode on — speak!', 'success');
}

/* ═══════ GHOST USERS (cross-tab cursors) ═══════ */

const GHOST_KEY = 'wdiy-ghost-cursor';
let ghostCanvas, ghostCtx;
let myGhostId = Math.random().toString(36).slice(2, 8);

function initGhostUsers() {
  ghostCanvas = document.createElement('canvas');
  ghostCanvas.className = 'ghost-canvas';
  ghostCanvas.style.cssText = 'position:fixed;inset:0;z-index:9998;pointer-events:none;';
  document.body.appendChild(ghostCanvas);
  ghostCtx = ghostCanvas.getContext('2d');
  ghostCanvas.width = innerWidth;
  ghostCanvas.height = innerHeight;

  window.addEventListener('resize', () => {
    ghostCanvas.width = innerWidth;
    ghostCanvas.height = innerHeight;
  });

  // Broadcast my cursor
  document.addEventListener('mousemove', e => {
    try {
      localStorage.setItem(GHOST_KEY, JSON.stringify({
        id: myGhostId, x: e.clientX, y: e.clientY, ts: Date.now()
      }));
    } catch {}
  });

  // Listen for other cursors
  const ghosts = {};
  window.addEventListener('storage', e => {
    if (e.key !== GHOST_KEY || !e.newValue) return;
    try {
      const d = JSON.parse(e.newValue);
      if (d.id === myGhostId) return;
      ghosts[d.id] = { x: d.x, y: d.y, ts: d.ts };
    } catch {}
  });

  // Render ghosts
  function drawGhosts() {
    ghostCtx.clearRect(0, 0, ghostCanvas.width, ghostCanvas.height);
    const now = Date.now();
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#d4a03c';
    for (const [id, g] of Object.entries(ghosts)) {
      if (now - g.ts > 3000) { delete ghosts[id]; continue; }
      const age = (now - g.ts) / 3000;
      ghostCtx.globalAlpha = 0.3 * (1 - age);
      ghostCtx.beginPath();
      ghostCtx.arc(g.x, g.y, 6, 0, Math.PI * 2);
      ghostCtx.fillStyle = accent;
      ghostCtx.fill();
      // tiny trail
      ghostCtx.beginPath();
      ghostCtx.arc(g.x, g.y, 3, 0, Math.PI * 2);
      ghostCtx.fillStyle = '#fff';
      ghostCtx.fill();
    }
    ghostCtx.globalAlpha = 1;
    requestAnimationFrame(drawGhosts);
  }
  requestAnimationFrame(drawGhosts);
}

/* ═══════ MUSICAL THEME SWITCHER ═══════ */

const THEME_MELODIES = {
  'mosque-gold': [330, 392, 523],    // E4 G4 C5 — majestic
  'zellige':     [440, 523, 659],    // A4 C5 E5 — bright
  'andalus':     [294, 370, 440],    // D4 F#4 A4 — warm
  'space':       [523, 659, 784],    // C5 E5 G5 — dreamy
  'jungle':      [262, 330, 392],    // C4 E4 G4 — earthy
  'robot':       [440, 554, 659],    // A4 C#5 E5 — techy
  'riad':        [349, 440, 523],    // F4 A4 C5 — serene
  'medina':      [294, 349, 440],    // D4 F4 A4 — calm
  'retro':       [523, 262, 523],    // C5 C4 C5 — retro beep
};

function playThemeMelody(themeName) {
  if (!soundEnabled) return;
  if (!audioCtx) audioCtx = new AudioCtx();
  const notes = THEME_MELODIES[themeName];
  if (!notes) return;
  const t = audioCtx.currentTime;
  notes.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.value = 0.06;
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2 + i * 0.15 + 0.15);
    osc.start(t + i * 0.15);
    osc.stop(t + i * 0.15 + 0.2);
  });
}

/* ═══════ BREATHING GUIDE + DHIKR ═══════ */

let breathingActive = false;
let dhikrCount = 0;

function toggleBreathing() {
  const bands = document.querySelectorAll('.deco-band');
  breathingActive = !breathingActive;

  if (breathingActive) {
    bands.forEach(b => b.classList.add('breathing'));
    log('🫁 Breathing guide on — inhale... exhale...', 'info');
  } else {
    bands.forEach(b => b.classList.remove('breathing'));
    if (dhikrCount > 0) log(`📿 Dhikr count: ${dhikrCount}`, 'success');
    dhikrCount = 0;
    log('🫁 Breathing guide off', 'info');
  }
}

function incrementDhikr() {
  if (!breathingActive) return;
  dhikrCount++;
  playSound('click');
  const counter = $('dhikrCounter');
  if (counter) counter.textContent = dhikrCount;
}

/* ═══════ PIXEL PET (Animated Logo) ═══════ */

const PET_STATES = {
  idle:    { class: 'pet-idle', duration: 0 },
  happy:   { class: 'pet-happy', duration: 3000 },
  sad:     { class: 'pet-sad', duration: 3000 },
  sleep:   { class: 'pet-sleep', duration: 0 },
};

let petState = 'idle';
let petFrame = 0;
let petTimer = null;
let petIdleTimer = null;

function initPixelPet() {
  const pet = document.createElement('div');
  pet.id = 'pixelPet';
  pet.className = 'pixel-pet pet-idle';
  pet.title = 'Click me!';
  pet.innerHTML = `<img src="${FOOTER_ICON}" alt="Bot" />`;
  pet.addEventListener('click', () => {
    setPetState('happy');
    playSound('success');
  });
  const footer = document.querySelector('.app-footer');
  if (footer) footer.insertBefore(pet, footer.firstChild);
}

function setPetState(state) {
  petState = state;
  const pet = $('pixelPet');
  if (!pet) return;
  // Remove all state classes
  pet.classList.remove('pet-idle', 'pet-happy', 'pet-sad', 'pet-sleep');
  pet.classList.add(PET_STATES[state].class);
  // Auto-return to idle
  if (petIdleTimer) clearTimeout(petIdleTimer);
  const dur = PET_STATES[state].duration;
  if (dur > 0) {
    petIdleTimer = setTimeout(() => setPetState('idle'), dur);
  }
}

// Pet goes to sleep after 60s of no log activity
let petSleepTimer = null;
function resetPetSleep() {
  if (petSleepTimer) clearTimeout(petSleepTimer);
  if (petState === 'sleep') setPetState('idle');
  petSleepTimer = setTimeout(() => setPetState('sleep'), 60000);
}

/* ═══════ NIGHT MODE (sunset auto-detect) ═══════ */

function initNightMode() {
  // Calculate approximate sunset using date + rough estimate
  // More accurate with geolocation, but works without it
  const hour = new Date().getHours();
  const isNight = hour >= 21 || hour < 6;

  if (isNight) {
    // Only auto-apply if user hasn't manually set a theme
    try {
      const manual = localStorage.getItem('wdiy-theme');
      if (!manual) {
        setTheme('mosque-gold'); // calm dark theme
        log('🌙 Night mode — time to rest', 'info');
      }
    } catch {}
  }

  // Try geolocation for more precise sunset
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(pos => {
      const sunset = calcSunset(pos.coords.latitude, pos.coords.longitude);
      const now = new Date();
      const nowMins = now.getHours() * 60 + now.getMinutes();
      if (nowMins >= sunset || nowMins < 360) { // after sunset or before 6am
        try {
          const manual = localStorage.getItem('wdiy-theme');
          if (!manual) {
            setTheme('mosque-gold');
            log('🌙 Night detected — sweet dreams', 'info');
          }
        } catch {}
      }
    }, () => {}, { timeout: 3000 });
  }
}

function calcSunset(lat, lng) {
  // Simplified sunset calculation (returns minutes since midnight)
  const d = new Date();
  const N = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  const radLat = lat * Math.PI / 180;
  const decl = -23.45 * Math.cos(2 * Math.PI / 365 * (N + 10)) * Math.PI / 180;
  const ha = Math.acos(-Math.tan(radLat) * Math.tan(decl)) * 180 / Math.PI;
  const sunset = 720 + (ha * 4) - (lng * 4) + (d.getTimezoneOffset());
  return Math.round(sunset);
}

/* ═══════ LOGO FOLLOWS CURSOR (magnetic eyes) ═══════ */

function initLogoTracker() {
  const logo = $('logoWrap');
  if (!logo) return;
  
  document.addEventListener('mousemove', e => {
    const rect = logo.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (innerWidth / 2);
    const dy = (e.clientY - cy) / (innerHeight / 2);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    const dist = Math.min(Math.sqrt(dx * dx + dy * dy), 1);
    
    const tiltX = dy * 8;  // max 8deg
    const tiltY = -dx * 8;
    const shift = dist * 4; // max 4px shift
    
    logo.style.transform = `perspective(200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateX(${dx * shift}px) translateY(${dy * shift}px)`;
  });
  
  // Pupil dilate on click
  logo.addEventListener('mousedown', () => {
    logo.style.transition = 'transform .1s';
    logo.style.transform += ' scale(1.15)';
    setTimeout(() => { logo.style.transition = ''; }, 150);
  });
  logo.addEventListener('mouseup', () => {
    logo.style.transition = 'transform .2s';
    setTimeout(() => { logo.style.transition = ''; }, 200);
  });
  
  // Reset on mouse leave
  document.addEventListener('mouseleave', () => {
    logo.style.transition = 'transform .5s ease-out';
    logo.style.transform = '';
    setTimeout(() => { logo.style.transition = ''; }, 500);
  });
}

/* ═══════ MUSIC REACTIVE (live audio visualizer) ═══════ */

let musicAnalyser = null;
let musicActive = false;
let musicAnim = null;

function toggleMusicMode() {
  if (musicActive) {
    musicActive = false;
    if (musicAnim) cancelAnimationFrame(musicAnim);
    document.querySelectorAll('.deco-band').forEach(b => {
      b.style.height = ''; b.style.opacity = ''; b.style.background = '';
    });
    document.querySelectorAll('.card').forEach(c => c.style.transform = '');
    log('🎵 Music mode off', 'info');
    return;
  }
  
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    if (!audioCtx) audioCtx = new AudioCtx();
    const source = audioCtx.createMediaStreamSource(stream);
    musicAnalyser = audioCtx.createAnalyser();
    musicAnalyser.fftSize = 256;
    source.connect(musicAnalyser);
    
    musicActive = true;
    log('🎵 Music mode on — play some music!', 'success');
    
    const data = new Uint8Array(musicAnalyser.frequencyBinCount);
    const bands = document.querySelectorAll('.deco-band');
    const cards = document.querySelectorAll('.card');
    const root = document.documentElement;
    
    function visualize() {
      if (!musicActive) return;
      musicAnalyser.getByteFrequencyData(data);
      
      // Average bass (0-10), mid (10-50), treble (50+)
      const bass = data.slice(0, 10).reduce((a, b) => a + b, 0) / 10 / 255;
      const mid = data.slice(10, 50).reduce((a, b) => a + b, 0) / 40 / 255;
      const treble = data.slice(50, 128).reduce((a, b) => a + b, 0) / 78 / 255;
      
      // Deco bands = live equalizer
      bands.forEach((b, i) => {
        const v = i === 0 ? bass : treble;
        b.style.height = (2 + v * 10) + 'px';
        b.style.opacity = 0.4 + v * 0.6;
      });
      
      // Cards pulse to bass
      cards.forEach(c => {
        c.style.transform = `scale(${1 + bass * 0.015})`;
        c.style.transition = 'transform 0.05s';
      });
      
      // Hue shift with frequency
      const hue = Math.round(mid * 60);
      root.style.filter = `hue-rotate(${hue}deg)`;
      
      musicAnim = requestAnimationFrame(visualize);
    }
    visualize();
  }).catch(() => {
    log('🎵 Microphone access denied', 'error');
  });
}

/* ═══════ AR MODE (WebXR overlay) ═══════ */

function initAR() {
  // Check WebXR support
  if (!navigator.xr) return;
  
  navigator.xr.isSessionSupported('immersive-ar').then(supported => {
    if (!supported) return;
    
    // Add AR button to header
    const btns = document.querySelector('.header-buttons');
    if (!btns) return;
    const arBtn = document.createElement('button');
    arBtn.className = 'btn-icon-only';
    arBtn.setAttribute('aria-label', 'AR Mode');
    arBtn.textContent = '📷';
    arBtn.onclick = startAR;
    btns.appendChild(arBtn);
    log('📷 AR mode available!', 'info');
  }).catch(() => {});
}

async function startAR() {
  try {
    const session = await navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['hit-test'],
      optionalFeatures: ['dom-overlay'],
      domOverlay: { root: document.querySelector('.app') }
    });
    log('📷 AR session started!', 'success');
    
    session.addEventListener('end', () => {
      log('📷 AR session ended', 'info');
    });
  } catch (e) {
    log(`📷 AR failed: ${e.message}`, 'error');
  }
}

/* ═══════ AI CHAT (app talks back) ═══════ */

let chatHistory = [];

async function aiRespond(userMsg) {
  const s = LANG[currentLang];
  chatHistory.push({ role: 'user', content: userMsg });
  
  log(`💬 You: ${userMsg}`, 'tx');
  
  try {
    const systemPrompt = `You are the Workshop-DIY robot assistant embedded in a kids educational app. You are geeky, funny (clean humor), and helpful. Keep responses SHORT (1-2 sentences max). Current language: ${currentLang}. Current theme: ${document.documentElement.dataset.theme}. You know about MQTT, IoT, ESP32, micro:bit, and coding. You respect Islamic values. Never be mean. Be encouraging. Add relevant emojis.`;
    
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'sonnet',
        max_tokens: 150,
        system: systemPrompt,
        messages: chatHistory.slice(-10) // keep context short
      })
    });
    
    const data = await resp.json();
    const reply = data.content?.[0]?.text || '🤖 ...';
    chatHistory.push({ role: 'assistant', content: reply });
    log(`🤖 ${reply}`, 'rx');
    playSound('success');
    setPetState('happy');
  } catch (e) {
    log('🤖 Brain offline — check connection', 'error');
    setPetState('sad');
  }
}

function initAIChat() {
  // Add chat input to log panel footer
  const logFooter = document.querySelector('#logPanel .sidebar-footer');
  if (!logFooter) return;
  
  const chatRow = document.createElement('div');
  chatRow.className = 'chat-input-row';
  chatRow.innerHTML = `
    <input type="text" id="chatInput" class="chat-input" placeholder="Talk to the robot..." data-i18n-placeholder="chatPlaceholder" />
    <button id="chatSendBtn" class="btn-sm primary"><span class="btn-icon">🤖</span></button>
  `;
  logFooter.parentElement.insertBefore(chatRow, logFooter);
  
  const input = $('chatInput');
  const sendBtn = $('chatSendBtn');
  
  const send = () => {
    const msg = input.value.trim();
    if (!msg) return;
    input.value = '';
    aiRespond(msg);
  };
  
  if (sendBtn) sendBtn.onclick = send;
  if (input) input.addEventListener('keydown', e => {
    if (e.key === 'Enter') send();
  });
}

/* ═══════ LOG RESIZE ═══════ */

function initLogResize() {
  const handle = $('logResizeHandle');
  const panel = $('logPanel');
  if (!handle || !panel) return;

  let dragging = false;
  let startX, startW;
  const isRtl = () => document.documentElement.dir === 'rtl';

  handle.addEventListener('mousedown', e => {
    dragging = true;
    startX = e.clientX;
    startW = panel.offsetWidth;
    handle.classList.add('active');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    const dx = isRtl() ? (e.clientX - startX) : (startX - e.clientX);
    const newW = Math.max(200, Math.min(startW + dx, window.innerWidth * 0.6));
    document.documentElement.style.setProperty('--log-width', newW + 'px');
  });

  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    handle.classList.remove('active');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    try {
      const w = getComputedStyle(document.documentElement).getPropertyValue('--log-width');
      localStorage.setItem('wdiy-log-width', w);
    } catch {}
  });

  // Touch support
  handle.addEventListener('touchstart', e => {
    dragging = true;
    startX = e.touches[0].clientX;
    startW = panel.offsetWidth;
    handle.classList.add('active');
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchmove', e => {
    if (!dragging) return;
    const dx = isRtl() ? (e.touches[0].clientX - startX) : (startX - e.touches[0].clientX);
    const newW = Math.max(200, Math.min(startW + dx, window.innerWidth * 0.6));
    document.documentElement.style.setProperty('--log-width', newW + 'px');
  }, { passive: true });

  document.addEventListener('touchend', () => {
    if (!dragging) return;
    dragging = false;
    handle.classList.remove('active');
    try {
      const w = getComputedStyle(document.documentElement).getPropertyValue('--log-width');
      localStorage.setItem('wdiy-log-width', w);
    } catch {}
  });

  // Restore saved width
  try {
    const saved = localStorage.getItem('wdiy-log-width');
    if (saved) document.documentElement.style.setProperty('--log-width', saved);
  } catch {}
}

/* ═══════ PANELS ═══════ */

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function openPanel(panelId, overlayId) {
  const sb = $(panelId), ov = $(overlayId);
  if (sb) sb.classList.add('open');
  if (ov) ov.classList.add('open');
  if (sb) {
    const first = sb.querySelector(FOCUSABLE);
    if (first) first.focus();
  }
}

function closePanel(panelId, overlayId, returnFocusId) {
  const sb = $(panelId), ov = $(overlayId);
  if (sb) sb.classList.remove('open');
  if (ov) ov.classList.remove('open');
  const btn = $(returnFocusId);
  if (btn) btn.focus();
}

function openHelp() { openPanel('helpPanel', 'helpOverlay'); }
function closeHelp() { closePanel('helpPanel', 'helpOverlay', 'helpBtn'); }
let logWasOpen = false;

function openSettings() {
  // If log is docked, remember and close it temporarily
  const logEl = $('logPanel');
  logWasOpen = logEl && logEl.classList.contains('open');
  if (logWasOpen) closeLog();
  openPanel('settingsPanel', 'settingsOverlay');
}
function closeSettings() {
  closePanel('settingsPanel', 'settingsOverlay', 'settingsBtn');
  // Restore log if it was open before
  if (logWasOpen) { openLog(); logWasOpen = false; }
}
function openLog() {
  const sb = $('logPanel');
  if (sb) sb.classList.add('open');
  document.body.classList.add('log-open');
}
function closeLog() {
  const sb = $('logPanel');
  if (sb) sb.classList.remove('open');
  document.body.classList.remove('log-open');
  const btn = $('logBtn');
  if (btn) btn.focus();
}

function toggleLog() {
  const sb = $('logPanel');
  if (sb && sb.classList.contains('open')) closeLog();
  else openLog();
}

function closeAllPanels() {
  closeHelp();
  closeSettings();
  closeLog();
}

function initHelpTabs() {
  const tabs = document.querySelectorAll('.help-tab');
  const contents = document.querySelectorAll('.help-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const tabName = tab.dataset.tab;
      const targetId = 'help' + tabName.charAt(0).toUpperCase() + tabName.slice(1);
      const target = $(targetId);
      if (target) target.classList.add('active');
    });
  });
}

function trapFocus(e) {
  for (const id of ['helpPanel', 'settingsPanel', 'logPanel']) {
    const sb = $(id);
    if (!sb || !sb.classList.contains('open')) continue;
    const focusable = sb.querySelectorAll(FOCUSABLE);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
    return;
  }
}

/* ═══════ INIT ═══════ */

/* ═══════ SYMBOL DATA (v1.1) ═══════ */

const SYMBOLS = [
  // ── Brackets ──
  { char: '{', name: { en: 'Left Curly Brace', fr: 'Accolade ouvrante', ar: 'قوس معقوف أيسر' }, category: 'brackets', shortcut: { azerty: 'Option+(', qwerty: 'Shift+[' }, analogy: { en: 'Like a curly hug for code!', fr: 'Un câlin bouclé pour le code !', ar: 'مثل عناق مجعد للكود!' }, usedFor: { en: 'Code blocks, JSON, sets', fr: 'Blocs de code, JSON, ensembles', ar: 'كتل الكود، JSON، المجموعات' } },
  { char: '}', name: { en: 'Right Curly Brace', fr: 'Accolade fermante', ar: 'قوس معقوف أيمن' }, category: 'brackets', shortcut: { azerty: 'Option+)', qwerty: 'Shift+]' }, analogy: { en: 'Closes the curly hug!', fr: 'Ferme le câlin bouclé !', ar: 'يغلق العناق المجعد!' }, usedFor: { en: 'Closing code blocks, JSON', fr: 'Fermeture blocs de code, JSON', ar: 'إغلاق كتل الكود، JSON' } },
  { char: '[', name: { en: 'Left Square Bracket', fr: 'Crochet ouvrant', ar: 'قوس مربع أيسر' }, category: 'brackets', shortcut: { azerty: 'Option+Shift+(', qwerty: '[' }, analogy: { en: 'A shelf bracket holding data!', fr: 'Une étagère qui tient les données !', ar: 'رف يحمل البيانات!' }, usedFor: { en: 'Arrays, lists, references', fr: 'Tableaux, listes, références', ar: 'المصفوفات، القوائم، المراجع' } },
  { char: ']', name: { en: 'Right Square Bracket', fr: 'Crochet fermant', ar: 'قوس مربع أيمن' }, category: 'brackets', shortcut: { azerty: 'Option+Shift+)', qwerty: ']' }, analogy: { en: 'Closes the data shelf!', fr: 'Ferme l\'étagère de données !', ar: 'يغلق رف البيانات!' }, usedFor: { en: 'Closing arrays, lists', fr: 'Fermeture tableaux, listes', ar: 'إغلاق المصفوفات، القوائم' } },
  { char: '(', name: { en: 'Left Parenthesis', fr: 'Parenthèse ouvrante', ar: 'قوس أيسر' }, category: 'brackets', shortcut: { azerty: 'Shift+9', qwerty: 'Shift+9' }, analogy: { en: 'A whisper before you speak!', fr: 'Un murmure avant de parler !', ar: 'همسة قبل أن تتكلم!' }, usedFor: { en: 'Math, grouping, functions', fr: 'Maths, regroupement, fonctions', ar: 'الرياضيات، التجميع، الدوال' } },
  { char: ')', name: { en: 'Right Parenthesis', fr: 'Parenthèse fermante', ar: 'قوس أيمن' }, category: 'brackets', shortcut: { azerty: 'Shift+0', qwerty: 'Shift+0' }, analogy: { en: 'End of the whisper!', fr: 'Fin du murmure !', ar: 'نهاية الهمسة!' }, usedFor: { en: 'Closing groups, functions', fr: 'Fermeture groupes, fonctions', ar: 'إغلاق المجموعات، الدوال' } },
  { char: '<', name: { en: 'Less Than / Left Angle', fr: 'Inférieur / Chevron ouvrant', ar: 'أصغر من / زاوية يسرى' }, category: 'brackets', shortcut: { azerty: 'Shift+<', qwerty: 'Shift+,' }, analogy: { en: 'An arrow pointing left!', fr: 'Une flèche vers la gauche !', ar: 'سهم يشير لليسار!' }, usedFor: { en: 'HTML tags, comparisons', fr: 'Balises HTML, comparaisons', ar: 'وسوم HTML، المقارنات' } },
  { char: '>', name: { en: 'Greater Than / Right Angle', fr: 'Supérieur / Chevron fermant', ar: 'أكبر من / زاوية يمنى' }, category: 'brackets', shortcut: { azerty: 'Shift+>', qwerty: 'Shift+.' }, analogy: { en: 'An arrow pointing right!', fr: 'Une flèche vers la droite !', ar: 'سهم يشير لليمين!' }, usedFor: { en: 'HTML tags, comparisons', fr: 'Balises HTML, comparaisons', ar: 'وسوم HTML، المقارنات' } },

  // ── Punctuation ──
  { char: '@', name: { en: 'At Sign', fr: 'Arobase', ar: 'علامة آت' }, category: 'punctuation', shortcut: { azerty: 'Shift+à', qwerty: 'Shift+2' }, analogy: { en: 'A snail carrying your email!', fr: 'Un escargot qui porte ton email !', ar: 'حلزون يحمل بريدك!' }, usedFor: { en: 'Email addresses, social media mentions', fr: 'Adresses e-mail, mentions réseaux sociaux', ar: 'عناوين البريد، إشارات التواصل الاجتماعي' } },
  { char: '#', name: { en: 'Hash / Pound', fr: 'Dièse / Croisillon', ar: 'رمز المربع' }, category: 'punctuation', shortcut: { azerty: 'Shift+@', qwerty: 'Shift+3' }, analogy: { en: 'A tiny tic-tac-toe board!', fr: 'Un mini jeu de morpion !', ar: 'لوحة إكس أو صغيرة!' }, usedFor: { en: 'Hashtags, programming comments, numbering', fr: 'Hashtags, commentaires, numérotation', ar: 'هاشتاغ، تعليقات البرمجة، الترقيم' } },
  { char: '~', name: { en: 'Tilde', fr: 'Tilde', ar: 'تيلدا' }, category: 'punctuation', shortcut: { azerty: 'Option+N', qwerty: 'Shift+`' }, analogy: { en: 'A little wave saying hello!', fr: 'Une petite vague qui dit bonjour !', ar: 'موجة صغيرة تقول مرحبا!' }, usedFor: { en: 'Home directory, approximation, Spanish ñ', fr: 'Répertoire home, approximation, ñ espagnol', ar: 'المجلد الرئيسي، التقريب، حرف ñ الإسباني' } },
  { char: '`', name: { en: 'Backtick / Grave', fr: 'Accent grave', ar: 'علامة خلفية' }, category: 'punctuation', shortcut: { azerty: 'Option+è', qwerty: '`' }, analogy: { en: 'A tiny backwards apostrophe!', fr: 'Un petit apostrophe à l\'envers !', ar: 'فاصلة عليا مقلوبة صغيرة!' }, usedFor: { en: 'Template literals, code in Markdown', fr: 'Littéraux template, code en Markdown', ar: 'قوالب النصوص، الكود في Markdown' } },
  { char: '^', name: { en: 'Caret / Circumflex', fr: 'Accent circonflexe', ar: 'علامة الإقحام' }, category: 'punctuation', shortcut: { azerty: 'Option+9', qwerty: 'Shift+6' }, analogy: { en: 'A little hat for letters!', fr: 'Un petit chapeau pour les lettres !', ar: 'قبعة صغيرة للحروف!' }, usedFor: { en: 'Exponents, regex, accents', fr: 'Exposants, regex, accents', ar: 'الأسس، التعبيرات النمطية، اللهجات' } },
  { char: '|', name: { en: 'Pipe / Vertical Bar', fr: 'Barre verticale / Pipe', ar: 'خط عمودي' }, category: 'punctuation', shortcut: { azerty: 'Option+Shift+L', qwerty: 'Shift+\\' }, analogy: { en: 'A wall between two things!', fr: 'Un mur entre deux choses !', ar: 'جدار بين شيئين!' }, usedFor: { en: 'Unix pipes, logical OR, tables', fr: 'Pipes Unix, OU logique, tables', ar: 'أنابيب يونكس، أو المنطقية، الجداول' } },
  { char: '\\', name: { en: 'Backslash', fr: 'Barre oblique inversée', ar: 'شرطة مائلة عكسية' }, category: 'punctuation', shortcut: { azerty: 'Option+Shift+/', qwerty: '\\' }, analogy: { en: 'Leaning backwards like a chill dude!', fr: 'Penché en arrière, trop cool !', ar: 'يميل للخلف كشخص مسترخي!' }, usedFor: { en: 'Escape characters, Windows paths', fr: 'Caractères d\'échappement, chemins Windows', ar: 'أحرف الإفلات، مسارات ويندوز' } },

  // ── Math ──
  { char: '+', name: { en: 'Plus', fr: 'Plus', ar: 'زائد' }, category: 'math', shortcut: { azerty: 'Shift+=', qwerty: 'Shift+=' }, analogy: { en: 'Adding things together!', fr: 'Additionner les choses !', ar: 'جمع الأشياء معا!' }, usedFor: { en: 'Addition, concatenation', fr: 'Addition, concaténation', ar: 'الجمع، الربط' } },
  { char: '=', name: { en: 'Equals', fr: 'Égal', ar: 'يساوي' }, category: 'math', shortcut: { azerty: '=', qwerty: '=' }, analogy: { en: 'Two parallel lines — perfectly balanced!', fr: 'Deux lignes parallèles — parfaitement équilibré !', ar: 'خطان متوازيان — متوازن تماما!' }, usedFor: { en: 'Assignment, equality', fr: 'Affectation, égalité', ar: 'التعيين، المساواة' } },
  { char: '≠', name: { en: 'Not Equal', fr: 'Différent', ar: 'لا يساوي' }, category: 'math', shortcut: { azerty: 'Option+≠', qwerty: 'Option+=' }, analogy: { en: 'Equals with a "no way!" slash!', fr: 'Égal avec un slash "pas question !" !', ar: 'يساوي مع شرطة "مستحيل!"' }, usedFor: { en: 'Math inequality', fr: 'Inégalité mathématique', ar: 'عدم المساواة الرياضية' } },
  { char: '≈', name: { en: 'Almost Equal', fr: 'Approximativement égal', ar: 'يساوي تقريبا' }, category: 'math', shortcut: { azerty: 'Option+X', qwerty: 'Option+X' }, analogy: { en: 'Wiggly equals — close enough!', fr: 'Égal ondulé — assez proche !', ar: 'يساوي متموج — قريب بما فيه الكفاية!' }, usedFor: { en: 'Approximation in math', fr: 'Approximation en maths', ar: 'التقريب في الرياضيات' } },
  { char: '±', name: { en: 'Plus-Minus', fr: 'Plus ou moins', ar: 'زائد ناقص' }, category: 'math', shortcut: { azerty: 'Option+Shift+=', qwerty: 'Option+Shift+=' }, analogy: { en: 'Can\'t decide? Both at once!', fr: 'Tu hésites ? Les deux à la fois !', ar: 'لا تستطيع أن تقرر؟ كلاهما معا!' }, usedFor: { en: 'Tolerance, error margins', fr: 'Tolérance, marges d\'erreur', ar: 'التسامح، هوامش الخطأ' } },
  { char: '×', name: { en: 'Multiplication Sign', fr: 'Signe multiplication', ar: 'علامة الضرب' }, category: 'math', shortcut: { azerty: 'Option+Shift+*', qwerty: 'Option+Shift+*' }, analogy: { en: 'An X that means multiply!', fr: 'Un X qui veut dire multiplier !', ar: 'حرف X يعني الضرب!' }, usedFor: { en: 'Multiplication, dimensions', fr: 'Multiplication, dimensions', ar: 'الضرب، الأبعاد' } },
  { char: '÷', name: { en: 'Division Sign', fr: 'Signe division', ar: 'علامة القسمة' }, category: 'math', shortcut: { azerty: 'Option+/', qwerty: 'Option+/' }, analogy: { en: 'A dot sandwich — share equally!', fr: 'Un sandwich à points — partage égal !', ar: 'ساندويتش نقاط — قسّم بالتساوي!' }, usedFor: { en: 'Division', fr: 'Division', ar: 'القسمة' } },
  { char: '≤', name: { en: 'Less Than or Equal', fr: 'Inférieur ou égal', ar: 'أصغر من أو يساوي' }, category: 'math', shortcut: { azerty: 'Option+<', qwerty: 'Option+,' }, analogy: { en: 'Less than with a floor!', fr: 'Inférieur avec un plancher !', ar: 'أصغر من مع أرضية!' }, usedFor: { en: 'Math comparisons', fr: 'Comparaisons mathématiques', ar: 'المقارنات الرياضية' } },
  { char: '≥', name: { en: 'Greater Than or Equal', fr: 'Supérieur ou égal', ar: 'أكبر من أو يساوي' }, category: 'math', shortcut: { azerty: 'Option+>', qwerty: 'Option+.' }, analogy: { en: 'Greater than with a floor!', fr: 'Supérieur avec un plancher !', ar: 'أكبر من مع أرضية!' }, usedFor: { en: 'Math comparisons', fr: 'Comparaisons mathématiques', ar: 'المقارنات الرياضية' } },
  { char: '∞', name: { en: 'Infinity', fr: 'Infini', ar: 'ما لا نهاية' }, category: 'math', shortcut: { azerty: 'Option+Shift+D', qwerty: 'Option+5' }, analogy: { en: 'A figure-8 lying down forever!', fr: 'Un 8 couché pour toujours !', ar: 'رقم 8 مستلق للأبد!' }, usedFor: { en: 'Math, philosophy, logos', fr: 'Maths, philosophie, logos', ar: 'الرياضيات، الفلسفة، الشعارات' } },
  { char: '√', name: { en: 'Square Root', fr: 'Racine carrée', ar: 'الجذر التربيعي' }, category: 'math', shortcut: { azerty: 'Option+V', qwerty: 'Option+V' }, analogy: { en: 'A check mark for math nerds!', fr: 'Une coche pour les fans de maths !', ar: 'علامة صح لعشاق الرياضيات!' }, usedFor: { en: 'Square roots in math', fr: 'Racines carrées en maths', ar: 'الجذور التربيعية في الرياضيات' } },
  { char: 'π', name: { en: 'Pi', fr: 'Pi', ar: 'باي' }, category: 'math', shortcut: { azerty: 'Option+P', qwerty: 'Option+P' }, analogy: { en: '3.14159… the pie that never ends!', fr: '3.14159… la tarte qui ne finit jamais !', ar: '3.14159… الفطيرة التي لا تنتهي!' }, usedFor: { en: 'Circles, math constants', fr: 'Cercles, constantes mathématiques', ar: 'الدوائر، الثوابت الرياضية' } },

  // ── Currency ──
  { char: '$', name: { en: 'Dollar Sign', fr: 'Signe dollar', ar: 'علامة الدولار' }, category: 'currency', shortcut: { azerty: 'Shift+$', qwerty: 'Shift+4' }, analogy: { en: 'An S with a line through — money!', fr: 'Un S barré — de l\'argent !', ar: 'حرف S مشطوب — نقود!' }, usedFor: { en: 'US currency, variables in PHP/bash', fr: 'Devise US, variables PHP/bash', ar: 'العملة الأمريكية، متغيرات PHP/bash' } },
  { char: '€', name: { en: 'Euro Sign', fr: 'Signe euro', ar: 'علامة اليورو' }, category: 'currency', shortcut: { azerty: 'Option+$', qwerty: 'Option+Shift+2' }, analogy: { en: 'An E with two stripes — European money!', fr: 'Un E avec deux traits — argent européen !', ar: 'حرف E بخطين — نقود أوروبية!' }, usedFor: { en: 'European currency', fr: 'Devise européenne', ar: 'العملة الأوروبية' } },
  { char: '£', name: { en: 'Pound Sign', fr: 'Signe livre', ar: 'علامة الجنيه' }, category: 'currency', shortcut: { azerty: 'Option+Shift+£', qwerty: 'Option+3' }, analogy: { en: 'A fancy L for British money!', fr: 'Un L élégant pour la livre anglaise !', ar: 'حرف L أنيق للجنيه البريطاني!' }, usedFor: { en: 'British currency', fr: 'Devise britannique', ar: 'العملة البريطانية' } },
  { char: '¥', name: { en: 'Yen / Yuan Sign', fr: 'Signe yen / yuan', ar: 'علامة الين / اليوان' }, category: 'currency', shortcut: { azerty: 'Option+Y', qwerty: 'Option+Y' }, analogy: { en: 'A Y with two arms — Japanese money!', fr: 'Un Y avec deux bras — argent japonais !', ar: 'حرف Y بذراعين — نقود يابانية!' }, usedFor: { en: 'Japanese/Chinese currency', fr: 'Devise japonaise/chinoise', ar: 'العملة اليابانية/الصينية' } },
  { char: '¢', name: { en: 'Cent Sign', fr: 'Signe centime', ar: 'علامة السنت' }, category: 'currency', shortcut: { azerty: 'Option+C', qwerty: 'Option+4' }, analogy: { en: 'A tiny c for tiny money!', fr: 'Un petit c pour des petites pièces !', ar: 'حرف c صغير لنقود صغيرة!' }, usedFor: { en: 'Fractions of a dollar', fr: 'Fractions de dollar', ar: 'كسور الدولار' } },

  // ── Code ──
  { char: '/', name: { en: 'Slash / Forward Slash', fr: 'Barre oblique', ar: 'شرطة مائلة' }, category: 'code', shortcut: { azerty: 'Shift+:', qwerty: '/' }, analogy: { en: 'Leaning forward like a racer!', fr: 'Penché en avant comme un coureur !', ar: 'يميل للأمام كعدّاء!' }, usedFor: { en: 'URLs, division, comments', fr: 'URLs, division, commentaires', ar: 'الروابط، القسمة، التعليقات' } },
  { char: '*', name: { en: 'Asterisk', fr: 'Astérisque', ar: 'نجمة' }, category: 'code', shortcut: { azerty: 'Shift+*', qwerty: 'Shift+8' }, analogy: { en: 'A tiny star in your text!', fr: 'Une petite étoile dans ton texte !', ar: 'نجمة صغيرة في نصك!' }, usedFor: { en: 'Multiplication, wildcards, footnotes', fr: 'Multiplication, jokers, notes de bas', ar: 'الضرب، أحرف البدل، الحواشي' } },
  { char: '&', name: { en: 'Ampersand', fr: 'Esperluette', ar: 'علامة العطف' }, category: 'code', shortcut: { azerty: 'Shift+1', qwerty: 'Shift+7' }, analogy: { en: 'A fancy "and" — like a pretzel!', fr: 'Un "et" élégant — comme un bretzel !', ar: 'علامة "و" أنيقة — مثل البريتزل!' }, usedFor: { en: 'Logical AND, HTML entities', fr: 'ET logique, entités HTML', ar: 'و المنطقية، كيانات HTML' } },
  { char: '!', name: { en: 'Exclamation Mark', fr: 'Point d\'exclamation', ar: 'علامة تعجب' }, category: 'code', shortcut: { azerty: 'Shift+!', qwerty: 'Shift+1' }, analogy: { en: 'Shouting in text form!', fr: 'Crier en forme de texte !', ar: 'صراخ في شكل نص!' }, usedFor: { en: 'Negation in code, emphasis', fr: 'Négation en code, emphase', ar: 'النفي في الكود، التأكيد' } },
  { char: '?', name: { en: 'Question Mark', fr: 'Point d\'interrogation', ar: 'علامة استفهام' }, category: 'code', shortcut: { azerty: 'Shift+,', qwerty: 'Shift+/' }, analogy: { en: 'A hook that catches curiosity!', fr: 'Un crochet qui attrape la curiosité !', ar: 'خطاف يصطاد الفضول!' }, usedFor: { en: 'Questions, ternary operator, optional chaining', fr: 'Questions, opérateur ternaire, chaînage optionnel', ar: 'الأسئلة، المعامل الثلاثي، التسلسل الاختياري' } },
  { char: ';', name: { en: 'Semicolon', fr: 'Point-virgule', ar: 'فاصلة منقوطة' }, category: 'code', shortcut: { azerty: 'Shift+;', qwerty: ';' }, analogy: { en: 'A comma with a dot hat!', fr: 'Une virgule avec un chapeau point !', ar: 'فاصلة بقبعة نقطة!' }, usedFor: { en: 'Statement terminator, CSS properties', fr: 'Fin d\'instruction, propriétés CSS', ar: 'منهي التعليمات، خصائص CSS' } },
  { char: ':', name: { en: 'Colon', fr: 'Deux-points', ar: 'نقطتان' }, category: 'code', shortcut: { azerty: 'Shift+.', qwerty: 'Shift+;' }, analogy: { en: 'Two dots stacked — here comes the explanation!', fr: 'Deux points empilés — voici l\'explication !', ar: 'نقطتان فوق بعض — ها هو التفسير!' }, usedFor: { en: 'Key-value pairs, time, slicing', fr: 'Paires clé-valeur, heure, découpage', ar: 'أزواج مفتاح-قيمة، الوقت، التقطيع' } },
  { char: '_', name: { en: 'Underscore', fr: 'Tiret bas', ar: 'شرطة سفلية' }, category: 'code', shortcut: { azerty: 'Shift+-', qwerty: 'Shift+-' }, analogy: { en: 'A tiny floor for words to stand on!', fr: 'Un petit plancher pour les mots !', ar: 'أرضية صغيرة تقف عليها الكلمات!' }, usedFor: { en: 'Variable names, file names', fr: 'Noms de variables, noms de fichiers', ar: 'أسماء المتغيرات، أسماء الملفات' } },
  { char: '-', name: { en: 'Hyphen / Minus', fr: 'Tiret / Moins', ar: 'شرطة / ناقص' }, category: 'code', shortcut: { azerty: '-', qwerty: '-' }, analogy: { en: 'A tiny bridge between words!', fr: 'Un petit pont entre les mots !', ar: 'جسر صغير بين الكلمات!' }, usedFor: { en: 'Subtraction, hyphenation, CLI flags', fr: 'Soustraction, trait d\'union, options CLI', ar: 'الطرح، الوصل، خيارات CLI' } },

  // ── Accents ──
  { char: 'é', name: { en: 'E Acute', fr: 'E accent aigu', ar: 'حرف E بلكنة حادة' }, category: 'accents', shortcut: { azerty: 'é', qwerty: 'Option+E then E' }, analogy: { en: 'An E wearing a tiny hat tilted right!', fr: 'Un E avec un petit chapeau penché !', ar: 'حرف E يرتدي قبعة مائلة لليمين!' }, usedFor: { en: 'French: café, résumé', fr: 'Français : café, résumé', ar: 'الفرنسية: café, résumé' } },
  { char: 'è', name: { en: 'E Grave', fr: 'E accent grave', ar: 'حرف E بلكنة ثقيلة' }, category: 'accents', shortcut: { azerty: 'è', qwerty: 'Option+` then E' }, analogy: { en: 'An E with a hat tilted left!', fr: 'Un E avec un chapeau penché à gauche !', ar: 'حرف E بقبعة مائلة لليسار!' }, usedFor: { en: 'French: crème, père', fr: 'Français : crème, père', ar: 'الفرنسية: crème, père' } },
  { char: 'ê', name: { en: 'E Circumflex', fr: 'E accent circonflexe', ar: 'حرف E بلكنة ممدودة' }, category: 'accents', shortcut: { azerty: 'Option+I then E', qwerty: 'Option+I then E' }, analogy: { en: 'An E with a pointy party hat!', fr: 'Un E avec un chapeau pointu de fête !', ar: 'حرف E بقبعة حفلة مدببة!' }, usedFor: { en: 'French: fête, être', fr: 'Français : fête, être', ar: 'الفرنسية: fête, être' } },
  { char: 'ë', name: { en: 'E Diaeresis', fr: 'E tréma', ar: 'حرف E بنقطتين' }, category: 'accents', shortcut: { azerty: 'Option+U then E', qwerty: 'Option+U then E' }, analogy: { en: 'An E with two dot eyes!', fr: 'Un E avec deux yeux en points !', ar: 'حرف E بعينين نقطتين!' }, usedFor: { en: 'French: Noël, naïve', fr: 'Français : Noël, naïve', ar: 'الفرنسية: Noël, naïve' } },
  { char: 'à', name: { en: 'A Grave', fr: 'A accent grave', ar: 'حرف A بلكنة ثقيلة' }, category: 'accents', shortcut: { azerty: 'à', qwerty: 'Option+` then A' }, analogy: { en: 'An A leaning back to relax!', fr: 'Un A qui se penche en arrière pour se détendre !', ar: 'حرف A يتكئ للخلف ليسترخي!' }, usedFor: { en: 'French: à, là, voilà', fr: 'Français : à, là, voilà', ar: 'الفرنسية: à, là, voilà' } },
  { char: 'â', name: { en: 'A Circumflex', fr: 'A accent circonflexe', ar: 'حرف A بلكنة ممدودة' }, category: 'accents', shortcut: { azerty: 'Option+I then A', qwerty: 'Option+I then A' }, analogy: { en: 'An A with a mountain peak hat!', fr: 'Un A avec un chapeau de montagne !', ar: 'حرف A بقبعة قمة جبل!' }, usedFor: { en: 'French: château, gâteau', fr: 'Français : château, gâteau', ar: 'الفرنسية: château, gâteau' } },
  { char: 'ç', name: { en: 'C Cedilla', fr: 'C cédille', ar: 'حرف C بذيل' }, category: 'accents', shortcut: { azerty: 'ç', qwerty: 'Option+C' }, analogy: { en: 'A C with a little tail!', fr: 'Un C avec une petite queue !', ar: 'حرف C بذيل صغير!' }, usedFor: { en: 'French: ça, façade, garçon', fr: 'Français : ça, façade, garçon', ar: 'الفرنسية: ça, façade, garçon' } },
  { char: 'ù', name: { en: 'U Grave', fr: 'U accent grave', ar: 'حرف U بلكنة ثقيلة' }, category: 'accents', shortcut: { azerty: 'ù', qwerty: 'Option+` then U' }, analogy: { en: 'A U chilling with a backwards hat!', fr: 'Un U cool avec un chapeau à l\'envers !', ar: 'حرف U يسترخي بقبعة مقلوبة!' }, usedFor: { en: 'French: où', fr: 'Français : où', ar: 'الفرنسية: où' } },
  { char: 'ü', name: { en: 'U Diaeresis', fr: 'U tréma', ar: 'حرف U بنقطتين' }, category: 'accents', shortcut: { azerty: 'Option+U then U', qwerty: 'Option+U then U' }, analogy: { en: 'A U with two surprised eyes!', fr: 'Un U avec deux yeux surpris !', ar: 'حرف U بعينين مندهشتين!' }, usedFor: { en: 'German: über, Müller', fr: 'Allemand : über, Müller', ar: 'الألمانية: über, Müller' } },
  { char: 'ñ', name: { en: 'N Tilde', fr: 'N tilde', ar: 'حرف N بموجة' }, category: 'accents', shortcut: { azerty: 'Option+N then N', qwerty: 'Option+N then N' }, analogy: { en: 'An N with a wavy hair!', fr: 'Un N avec les cheveux ondulés !', ar: 'حرف N بشعر متموج!' }, usedFor: { en: 'Spanish: España, año, niño', fr: 'Espagnol : España, año, niño', ar: 'الإسبانية: España, año, niño' } },

  // ── Other ──
  { char: '©', name: { en: 'Copyright', fr: 'Copyright', ar: 'حقوق النشر' }, category: 'other', shortcut: { azerty: 'Option+C', qwerty: 'Option+G' }, analogy: { en: 'A C in a bubble — "I made this!"', fr: 'Un C dans une bulle — "C\'est moi qui l\'ai fait !"', ar: 'حرف C في فقاعة — "أنا صنعت هذا!"' }, usedFor: { en: 'Copyright notices', fr: 'Mentions de copyright', ar: 'إشعارات حقوق النشر' } },
  { char: '®', name: { en: 'Registered', fr: 'Marque déposée', ar: 'علامة مسجلة' }, category: 'other', shortcut: { azerty: 'Option+R', qwerty: 'Option+R' }, analogy: { en: 'An R in a bubble — "This name is taken!"', fr: 'Un R dans une bulle — "Ce nom est pris !"', ar: 'حرف R في فقاعة — "هذا الاسم محجوز!"' }, usedFor: { en: 'Registered trademarks', fr: 'Marques déposées', ar: 'العلامات التجارية المسجلة' } },
  { char: '™', name: { en: 'Trademark', fr: 'Marque commerciale', ar: 'علامة تجارية' }, category: 'other', shortcut: { azerty: 'Option+Shift+D', qwerty: 'Option+2' }, analogy: { en: 'Tiny TM letters — "This is my brand!"', fr: 'Petites lettres TM — "C\'est ma marque !"', ar: 'حروف TM صغيرة — "هذه علامتي!"' }, usedFor: { en: 'Trademarks', fr: 'Marques commerciales', ar: 'العلامات التجارية' } },
  { char: '°', name: { en: 'Degree', fr: 'Degré', ar: 'درجة' }, category: 'other', shortcut: { azerty: 'Option+Shift+;', qwerty: 'Option+Shift+8' }, analogy: { en: 'A tiny circle floating up — temperature!', fr: 'Un petit cercle qui flotte — température !', ar: 'دائرة صغيرة عائمة — درجة حرارة!' }, usedFor: { en: 'Temperature, angles', fr: 'Température, angles', ar: 'درجة الحرارة، الزوايا' } },
  { char: '§', name: { en: 'Section Sign', fr: 'Signe paragraphe', ar: 'علامة القسم' }, category: 'other', shortcut: { azerty: 'Shift+§', qwerty: 'Option+6' }, analogy: { en: 'Two S\'s hugging — a section marker!', fr: 'Deux S qui se câlinent — un marqueur de section !', ar: 'حرفا S يتعانقان — علامة قسم!' }, usedFor: { en: 'Legal references, sections', fr: 'Références juridiques, sections', ar: 'المراجع القانونية، الأقسام' } },
  { char: '†', name: { en: 'Dagger', fr: 'Obèle', ar: 'خنجر' }, category: 'other', shortcut: { azerty: 'Option+T', qwerty: 'Option+T' }, analogy: { en: 'A tiny sword for footnotes!', fr: 'Une petite épée pour les notes !', ar: 'سيف صغير للحواشي!' }, usedFor: { en: 'Footnotes, deceased', fr: 'Notes de bas de page, décédé', ar: 'الحواشي، المتوفى' } },
  { char: '‡', name: { en: 'Double Dagger', fr: 'Double obèle', ar: 'خنجر مزدوج' }, category: 'other', shortcut: { azerty: 'Option+Shift+T', qwerty: 'Option+Shift+7' }, analogy: { en: 'A double sword — second footnote!', fr: 'Une double épée — deuxième note !', ar: 'سيف مزدوج — حاشية ثانية!' }, usedFor: { en: 'Second footnote marker', fr: 'Deuxième marqueur de note', ar: 'علامة الحاشية الثانية' } },
  { char: '¿', name: { en: 'Inverted Question Mark', fr: 'Point d\'interrogation inversé', ar: 'علامة استفهام مقلوبة' }, category: 'other', shortcut: { azerty: 'Option+Shift+?', qwerty: 'Option+Shift+/' }, analogy: { en: 'A question mark doing a headstand!', fr: 'Un point d\'interrogation qui fait le poirier !', ar: 'علامة استفهام تقف على رأسها!' }, usedFor: { en: 'Spanish questions', fr: 'Questions en espagnol', ar: 'الأسئلة بالإسبانية' } },
  { char: '¡', name: { en: 'Inverted Exclamation', fr: 'Point d\'exclamation inversé', ar: 'علامة تعجب مقلوبة' }, category: 'other', shortcut: { azerty: 'Option+Shift+!', qwerty: 'Option+1' }, analogy: { en: 'An exclamation mark doing a handstand!', fr: 'Un point d\'exclamation qui fait le poirier !', ar: 'علامة تعجب تقف على يديها!' }, usedFor: { en: 'Spanish exclamations', fr: 'Exclamations en espagnol', ar: 'التعجب بالإسبانية' } },
  { char: '«', name: { en: 'Left Guillemet', fr: 'Guillemet ouvrant', ar: 'علامة تنصيص فرنسية يسرى' }, category: 'other', shortcut: { azerty: 'Option+«', qwerty: 'Option+\\' }, analogy: { en: 'Double arrows pointing left — French quotes!', fr: 'Doubles flèches vers la gauche — guillemets français !', ar: 'سهمان مزدوجان لليسار — اقتباسات فرنسية!' }, usedFor: { en: 'French/European quotation marks', fr: 'Guillemets français/européens', ar: 'علامات الاقتباس الفرنسية/الأوروبية' } },
  { char: '»', name: { en: 'Right Guillemet', fr: 'Guillemet fermant', ar: 'علامة تنصيص فرنسية يمنى' }, category: 'other', shortcut: { azerty: 'Option+Shift+»', qwerty: 'Option+Shift+\\' }, analogy: { en: 'Double arrows pointing right!', fr: 'Doubles flèches vers la droite !', ar: 'سهمان مزدوجان لليمين!' }, usedFor: { en: 'French/European closing quotes', fr: 'Guillemets fermants français/européens', ar: 'علامات إغلاق الاقتباس الفرنسية/الأوروبية' } },
  { char: '…', name: { en: 'Ellipsis', fr: 'Points de suspension', ar: 'نقاط الحذف' }, category: 'other', shortcut: { azerty: 'Option+.', qwerty: 'Option+;' }, analogy: { en: 'Three dots — suspense…!', fr: 'Trois points — suspense… !', ar: 'ثلاث نقاط — تشويق…!' }, usedFor: { en: 'Trailing off, omission', fr: 'Suspension, omission', ar: 'التعليق، الحذف' } },
  { char: '•', name: { en: 'Bullet', fr: 'Puce', ar: 'نقطة رصاصة' }, category: 'other', shortcut: { azerty: 'Option+Shift+9', qwerty: 'Option+8' }, analogy: { en: 'A fat dot for lists!', fr: 'Un gros point pour les listes !', ar: 'نقطة سمينة للقوائم!' }, usedFor: { en: 'Lists, bullet points', fr: 'Listes, puces', ar: 'القوائم، النقاط' } },
];

/* ═══════ CATEGORY DEFINITIONS (v1.1) ═══════ */

const CATEGORIES = [
  { id: 'brackets',    icon: '🔗', name: { en: 'Brackets',    fr: 'Crochets',       ar: 'الأقواس' } },
  { id: 'punctuation', icon: '✏️', name: { en: 'Punctuation',  fr: 'Ponctuation',    ar: 'الترقيم' } },
  { id: 'math',        icon: '🔢', name: { en: 'Math',         fr: 'Maths',          ar: 'الرياضيات' } },
  { id: 'currency',    icon: '💰', name: { en: 'Currency',     fr: 'Devises',        ar: 'العملات' } },
  { id: 'code',        icon: '💻', name: { en: 'Code',         fr: 'Code',           ar: 'الكود' } },
  { id: 'accents',     icon: '🇫🇷', name: { en: 'Accents',      fr: 'Accents',        ar: 'اللهجات' } },
  { id: 'other',       icon: '✨', name: { en: 'Other',        fr: 'Autres',         ar: 'أخرى' } },
];

/* ═══════ buildCategoryTabs() — Category filter tabs (v1.1) ═══════ */

function buildCategoryTabs() {
  const container = $('categoryTabs');
  if (!container) return;
  container.innerHTML = '';

  // "All" tab
  const allBtn = document.createElement('button');
  allBtn.className = 'category-tab active';
  allBtn.dataset.category = 'all';
  allBtn.textContent = { en: 'All', fr: 'Tout', ar: 'الكل' }[currentLang] || 'All';
  allBtn.addEventListener('click', () => filterByCategory('all', container));
  container.appendChild(allBtn);

  // One tab per category
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'category-tab';
    btn.dataset.category = cat.id;
    btn.textContent = `${cat.icon} ${cat.name[currentLang] || cat.name.en}`;
    btn.addEventListener('click', () => filterByCategory(cat.id, container));
    container.appendChild(btn);
  });
}

/** Filter symbol grid by category */
function filterByCategory(catId, tabContainer) {
  // Update active tab
  if (tabContainer) {
    tabContainer.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
    const activeTab = tabContainer.querySelector(`[data-category="${catId}"]`);
    if (activeTab) activeTab.classList.add('active');
  }

  // Show/hide symbol buttons
  const grid = $('symbolGrid');
  if (!grid) return;
  grid.querySelectorAll('.symbol-btn').forEach(btn => {
    if (catId === 'all' || btn.dataset.category === catId) {
      btn.style.display = '';
    } else {
      btn.style.display = 'none';
    }
  });

  playSound('click');
}

/* ═══════ buildSymbolGrid() — Clickable symbol grid with copy (v1.1) ═══════ */

function buildSymbolGrid() {
  const grid = $('symbolGrid');
  if (!grid) return;
  grid.innerHTML = '';

  SYMBOLS.forEach(sym => {
    const btn = document.createElement('button');
    btn.className = 'symbol-btn';
    btn.dataset.category = sym.category;
    btn.setAttribute('aria-label', sym.name[currentLang] || sym.name.en);
    btn.title = sym.name[currentLang] || sym.name.en;

    // Large character display
    const charSpan = document.createElement('span');
    charSpan.className = 'symbol-char';
    charSpan.textContent = sym.char;
    btn.appendChild(charSpan);

    // Feature 7: star indicator on favorited symbols
    if (favorites.includes(sym.char)) {
      const starIndicator = document.createElement('span');
      starIndicator.className = 'fav-indicator';
      starIndicator.textContent = '\u2B50';
      btn.appendChild(starIndicator);
    }

    // Drag & Drop support (v1.6)
    btn.setAttribute('draggable', 'true');
    btn.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', sym.char);
    });

    // Click handler: copy to clipboard + toast + sound + log + show info card (v2.0)
    btn.addEventListener('click', () => {
      // Feature 6: Multi-select mode intercept
      if (multiSelectMode) {
        const idx = selectedSymbols.indexOf(sym.char);
        if (idx >= 0) {
          selectedSymbols.splice(idx, 1);
          btn.classList.remove('multi-selected');
        } else {
          selectedSymbols.push(sym.char);
          btn.classList.add('multi-selected');
        }
        updateMultiBar();
        return;
      }
      navigator.clipboard.writeText(sym.char).then(() => {
        showCopyToast(sym.char);
        playSound('success');
        log(`📋 Copied symbol: ${sym.char} (${sym.name[currentLang] || sym.name.en})`, 'success');
        addToRecent(sym.char);
      }).catch(() => {
        showToast(LANG[currentLang].copyFail || 'Copy failed');
        playSound('error');
        log(`❌ Failed to copy: ${sym.char}`, 'error');
      });
      showSymbolInfo(sym);
    });

    grid.appendChild(btn);
  });
}

/* ═══════ showSymbolInfo() / hideSymbolInfo() — Symbol Info Card (v1.2) ═══════ */

function showSymbolInfo(symbol) {
  const card = $('symbolInfoCard');
  const body = $('symbolInfoBody');
  if (!card || !body) return;

  const lang = currentLang;

  // Build info content
  body.innerHTML = '';

  // Large character
  const charEl = document.createElement('div');
  charEl.className = 'info-char';
  charEl.textContent = symbol.char;
  body.appendChild(charEl);

  // Name in current language
  const nameEl = document.createElement('div');
  nameEl.className = 'info-name';
  nameEl.textContent = symbol.name[lang] || symbol.name.en;
  body.appendChild(nameEl);

  // AZERTY shortcut
  const azertyEl = document.createElement('div');
  azertyEl.className = 'info-shortcut';
  azertyEl.innerHTML = '<strong>AZERTY:</strong> ' + symbol.shortcut.azerty;
  body.appendChild(azertyEl);

  // QWERTY shortcut
  const qwertyEl = document.createElement('div');
  qwertyEl.className = 'info-shortcut';
  qwertyEl.innerHTML = '<strong>QWERTY:</strong> ' + symbol.shortcut.qwerty;
  body.appendChild(qwertyEl);

  // Fun analogy
  const analogyEl = document.createElement('div');
  analogyEl.className = 'info-analogy';
  analogyEl.textContent = symbol.analogy[lang] || symbol.analogy.en;
  body.appendChild(analogyEl);

  // Used for
  const usedEl = document.createElement('div');
  usedEl.className = 'info-used';
  usedEl.textContent = symbol.usedFor[lang] || symbol.usedFor.en;
  body.appendChild(usedEl);

  // Feature 7: Star/favorite button
  const starBtn = document.createElement('button');
  starBtn.className = 'btn-star';
  starBtn.textContent = favorites.includes(symbol.char) ? '\u2B50' : '\u2606';
  starBtn.addEventListener('click', () => {
    toggleFavorite(symbol.char);
    starBtn.textContent = favorites.includes(symbol.char) ? '\u2B50' : '\u2606';
  });
  body.appendChild(starBtn);

  // Big Copy button (v2.0 — uses showCopyToast)
  const copyBtn = document.createElement('button');
  copyBtn.className = 'btn-copy-big primary';
  copyBtn.textContent = LANG[lang].copy || 'Copy';
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(symbol.char).then(() => {
      showCopyToast(symbol.char);
      playSound('success');
      log(`📋 Copied symbol: ${symbol.char} (${symbol.name[lang] || symbol.name.en})`, 'success');
      addToRecent(symbol.char);
    }).catch(() => {
      showToast(LANG[lang].copyFail || 'Copy failed');
      playSound('error');
    });
  });
  body.appendChild(copyBtn);

  // Show the card
  card.style.display = 'block';

  // Scroll into view smoothly
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideSymbolInfo() {
  const card = $('symbolInfoCard');
  if (card) card.style.display = 'none';
}

/* ═══════ INTERACTIVE KEYBOARD (v1.3) ═══════ */

const KEYBOARD_LAYOUTS = {
  azerty: [
    // Row 1: number row
    [
      { main: '@', opt: '#', shiftOpt: '•' },
      { main: '&', opt: '´', shiftOpt: 'Ú' },
      { main: 'é', opt: 'ë', shiftOpt: 'É' },
      { main: '"', opt: '{', shiftOpt: '"' },
      { main: "'", opt: '[', shiftOpt: "\u2019" },
      { main: '(', opt: '{', shiftOpt: '«' },
      { main: '§', opt: 'ﬂ', shiftOpt: 'ﬁ' },
      { main: 'è', opt: '`', shiftOpt: 'È' },
      { main: '!', opt: '¡', shiftOpt: 'Û' },
      { main: 'ç', opt: 'Ç', shiftOpt: 'Á' },
      { main: 'à', opt: 'ø', shiftOpt: 'Ø' },
      { main: ')', opt: '}', shiftOpt: '»' },
      { main: '-', opt: '—', shiftOpt: '–' }
    ],
    // Row 2
    [
      { main: 'a', opt: 'æ', shiftOpt: 'Æ' },
      { main: 'z', opt: 'Â', shiftOpt: 'Å' },
      { main: 'e', opt: '€', shiftOpt: '€' },
      { main: 'r', opt: '®', shiftOpt: '‚' },
      { main: 't', opt: '†', shiftOpt: '™' },
      { main: 'y', opt: 'Ú', shiftOpt: 'Ÿ' },
      { main: 'u', opt: 'º', shiftOpt: 'ª' },
      { main: 'i', opt: 'î', shiftOpt: 'ï' },
      { main: 'o', opt: 'œ', shiftOpt: 'Œ' },
      { main: 'p', opt: 'π', shiftOpt: '∏' },
      { main: '^', opt: 'ô', shiftOpt: 'Ô' },
      { main: '$', opt: '¥', shiftOpt: '¢' }
    ],
    // Row 3
    [
      { main: 'q', opt: '‡', shiftOpt: 'Ω' },
      { main: 's', opt: 'Ò', shiftOpt: '∑' },
      { main: 'd', opt: '∂', shiftOpt: '∆' },
      { main: 'f', opt: 'ƒ', shiftOpt: '·' },
      { main: 'g', opt: 'ﬁ', shiftOpt: 'ﬂ' },
      { main: 'h', opt: 'Ì', shiftOpt: 'Î' },
      { main: 'j', opt: 'Ï', shiftOpt: 'Í' },
      { main: 'k', opt: 'È', shiftOpt: 'Ë' },
      { main: 'l', opt: '¬', shiftOpt: '|' },
      { main: 'm', opt: 'µ', shiftOpt: 'Ó' },
      { main: 'ù', opt: 'Ù', shiftOpt: '‰' },
      { main: '`', opt: '£', shiftOpt: '¥' }
    ],
    // Row 4
    [
      { main: '<', opt: '≤', shiftOpt: '≥' },
      { main: 'w', opt: '‹', shiftOpt: '›' },
      { main: 'x', opt: '≈', shiftOpt: '⁄' },
      { main: 'c', opt: '©', shiftOpt: '¢' },
      { main: 'v', opt: '◊', shiftOpt: '√' },
      { main: 'b', opt: 'ß', shiftOpt: '∫' },
      { main: 'n', opt: '~', shiftOpt: 'ñ' },
      { main: ',', opt: '∞', shiftOpt: '¿' },
      { main: ';', opt: '…', shiftOpt: '•' },
      { main: ':', opt: '÷', shiftOpt: '\\' },
      { main: '=', opt: '≠', shiftOpt: '±' }
    ],
    // Row 5: space
    [
      { main: '⌥ Option', opt: '', shiftOpt: '', width: 'modifier' },
      { main: 'Space', opt: ' ', shiftOpt: ' ', width: 'space' },
      { main: '⌥ Option', opt: '', shiftOpt: '', width: 'modifier' }
    ]
  ],
  qwerty: [
    // Row 1: number row
    [
      { main: '`', opt: '`', shiftOpt: '`' },
      { main: '1', opt: '¡', shiftOpt: '⁄' },
      { main: '2', opt: '™', shiftOpt: '€' },
      { main: '3', opt: '£', shiftOpt: '‹' },
      { main: '4', opt: '¢', shiftOpt: '›' },
      { main: '5', opt: '∞', shiftOpt: 'ﬁ' },
      { main: '6', opt: '§', shiftOpt: 'ﬂ' },
      { main: '7', opt: '¶', shiftOpt: '‡' },
      { main: '8', opt: '•', shiftOpt: '°' },
      { main: '9', opt: 'ª', shiftOpt: '·' },
      { main: '0', opt: 'º', shiftOpt: '‚' },
      { main: '-', opt: '–', shiftOpt: '—' },
      { main: '=', opt: '≠', shiftOpt: '±' }
    ],
    // Row 2
    [
      { main: 'q', opt: 'œ', shiftOpt: 'Œ' },
      { main: 'w', opt: '∑', shiftOpt: '„' },
      { main: 'e', opt: '´', shiftOpt: '´' },
      { main: 'r', opt: '®', shiftOpt: '‰' },
      { main: 't', opt: '†', shiftOpt: 'ˇ' },
      { main: 'y', opt: '¥', shiftOpt: 'Á' },
      { main: 'u', opt: '¨', shiftOpt: '¨' },
      { main: 'i', opt: 'ˆ', shiftOpt: 'ˆ' },
      { main: 'o', opt: 'ø', shiftOpt: 'Ø' },
      { main: 'p', opt: 'π', shiftOpt: '∏' },
      { main: '[', opt: '"', shiftOpt: '"' },
      { main: ']', opt: "\u2018", shiftOpt: "\u2019" }
    ],
    // Row 3
    [
      { main: 'a', opt: 'å', shiftOpt: 'Å' },
      { main: 's', opt: 'ß', shiftOpt: 'Í' },
      { main: 'd', opt: '∂', shiftOpt: 'Î' },
      { main: 'f', opt: 'ƒ', shiftOpt: 'Ï' },
      { main: 'g', opt: '©', shiftOpt: '˝' },
      { main: 'h', opt: '˙', shiftOpt: 'Ó' },
      { main: 'j', opt: '∆', shiftOpt: 'Ô' },
      { main: 'k', opt: '˚', shiftOpt: '' },
      { main: 'l', opt: '¬', shiftOpt: 'Ò' },
      { main: ';', opt: '…', shiftOpt: 'Ú' },
      { main: "'", opt: 'æ', shiftOpt: 'Æ' }
    ],
    // Row 4
    [
      { main: 'z', opt: 'Ω', shiftOpt: '¸' },
      { main: 'x', opt: '≈', shiftOpt: '˛' },
      { main: 'c', opt: 'ç', shiftOpt: 'Ç' },
      { main: 'v', opt: '√', shiftOpt: '◊' },
      { main: 'b', opt: '∫', shiftOpt: 'ı' },
      { main: 'n', opt: '˜', shiftOpt: '˜' },
      { main: 'm', opt: 'µ', shiftOpt: 'Â' },
      { main: ',', opt: '≤', shiftOpt: '¯' },
      { main: '.', opt: '≥', shiftOpt: '˘' },
      { main: '/', opt: '÷', shiftOpt: '¿' }
    ],
    // Row 5: space
    [
      { main: '⌥ Option', opt: '', shiftOpt: '', width: 'modifier' },
      { main: 'Space', opt: ' ', shiftOpt: ' ', width: 'space' },
      { main: '⌥ Option', opt: '', shiftOpt: '', width: 'modifier' }
    ]
  ]
};

let currentLayout = 'azerty';
let xrayActive = false;

function buildKeyboard() {
  const display = $('keyboardDisplay');
  if (!display) return;
  display.innerHTML = '';
  const layout = KEYBOARD_LAYOUTS[currentLayout];
  if (!layout) return;

  layout.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'keyboard-row';

    row.forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'kb-key';
      if (key.width) btn.classList.add(key.width);

      const mainSpan = document.createElement('span');
      mainSpan.className = 'key-main';
      mainSpan.textContent = key.main;

      const optSpan = document.createElement('span');
      optSpan.className = 'key-opt';
      if (key.opt) {
        optSpan.textContent = key.opt;
        if (key.shiftOpt && key.shiftOpt !== key.opt) {
          optSpan.textContent = key.opt + ' ' + key.shiftOpt;
        }
      }

      btn.appendChild(mainSpan);
      btn.appendChild(optSpan);

      // Click handler: show info about this key's hidden characters
      btn.addEventListener('click', () => {
        if (!key.opt && !key.shiftOpt) return;
        const parts = [];
        if (key.opt) parts.push('⌥ Option → ' + key.opt);
        if (key.shiftOpt && key.shiftOpt !== key.opt) parts.push('⇧⌥ Shift+Option → ' + key.shiftOpt);
        const info = `Key "${key.main}" (${currentLayout.toUpperCase()}):\n${parts.join('\n')}`;
        log('⌨️ ' + info.replace(/\n/g, ' | '), 'info');
        playSound('click');

        // Brief visual feedback
        btn.style.transform = 'scale(1.15)';
        setTimeout(() => { btn.style.transform = ''; }, 150);
      });

      rowDiv.appendChild(btn);
    });

    display.appendChild(rowDiv);
  });

  log(`⌨️ Keyboard built: ${currentLayout.toUpperCase()} layout`, 'info');
}

function toggleLayout(layout) {
  if (layout === currentLayout) return;
  currentLayout = layout;

  // Update active state on layout buttons
  document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.layout === layout);
  });

  buildKeyboard();
  log(`⌨️ Layout switched to ${layout.toUpperCase()}`, 'info');
  playSound('click');
}

function toggleXray() {
  xrayActive = !xrayActive;
  const display = $('keyboardDisplay');
  if (display) display.classList.toggle('xray-active', xrayActive);

  const xrayBtn = $('xrayBtn');
  if (xrayBtn) xrayBtn.classList.toggle('active', xrayActive);

  log(`🔍 X-Ray mode ${xrayActive ? 'ON' : 'OFF'}`, 'info');
  playSound('click');
}

/* ═══════ MAC SPECIAL KEYS (v1.4) ═══════ */

const MAC_SPECIAL_KEYS = [
  {
    symbol: '⌘',
    name: { en: 'Command', fr: 'Commande', ar: 'الأوامر' },
    desc: { en: 'The boss key! Used in most shortcuts', fr: 'La touche chef !', ar: 'مفتاح الأوامر!' }
  },
  {
    symbol: '⌥',
    name: { en: 'Option/Alt', fr: 'Option/Alt', ar: 'خيار/بديل' },
    desc: { en: 'The magic key that unlocks hidden symbols', fr: 'La touche magique des symboles cachés', ar: 'المفتاح السحري للرموز المخفية' }
  },
  {
    symbol: '⌃',
    name: { en: 'Control', fr: 'Contrôle', ar: 'تحكم' },
    desc: { en: 'Used for right-click and terminal commands', fr: 'Pour le clic droit et le terminal', ar: 'للنقر الأيمن والطرفية' }
  },
  {
    symbol: '⇧',
    name: { en: 'Shift', fr: 'Majuscule', ar: 'العالي' },
    desc: { en: 'Hold me for UPPERCASE and extra symbols', fr: 'Maintiens-moi pour les majuscules', ar: 'امسكني للأحرف الكبيرة' }
  },
  {
    symbol: '⎋',
    name: { en: 'Escape', fr: 'Échap', ar: 'هروب' },
    desc: { en: 'The exit door! Press me to cancel', fr: 'La porte de sortie !', ar: 'باب الخروج!' }
  },
  {
    symbol: '⇥',
    name: { en: 'Tab', fr: 'Tabulation', ar: 'جدولة' },
    desc: { en: 'Jump to the next field', fr: 'Saute au champ suivant', ar: 'انتقل للحقل التالي' }
  },
  {
    symbol: '⌫',
    name: { en: 'Delete', fr: 'Supprimer', ar: 'حذف' },
    desc: { en: 'Erase backwards', fr: 'Efface en arrière', ar: 'امسح للخلف' }
  },
  {
    symbol: '↩',
    name: { en: 'Return', fr: 'Retour', ar: 'إدخال' },
    desc: { en: 'Confirm! Enter!', fr: 'Valide ! Entrée !', ar: 'تأكيد! إدخال!' }
  },
  {
    symbol: 'Fn',
    name: { en: 'Function', fr: 'Fonction', ar: 'وظيفة' },
    desc: { en: 'Function key — unlocks F1-F12', fr: 'Touche Fonction', ar: 'مفتاح الوظائف' }
  },
  {
    symbol: '⇪',
    name: { en: 'Caps Lock', fr: 'Verrouillage Majuscules', ar: 'قفل الأحرف الكبيرة' },
    desc: { en: 'ALL CAPS MODE!', fr: 'MODE MAJUSCULES !', ar: 'وضع الأحرف الكبيرة!' }
  }
];

/* ═══════ MAC SECRETS (v1.4) ═══════ */

const MAC_SECRETS = [
  { char: '≠', name: { en: 'Not Equal', fr: 'Différent', ar: 'لا يساوي' }, shortcut: { azerty: '⌥ ≠', qwerty: '⌥ =' } },
  { char: '≈', name: { en: 'Almost Equal', fr: 'Presque égal', ar: 'يساوي تقريبا' }, shortcut: { azerty: '⌥ X', qwerty: '⌥ X' } },
  { char: '°', name: { en: 'Degree', fr: 'Degré', ar: 'درجة' }, shortcut: { azerty: '⇧ ⌥ °', qwerty: '⌥ ⇧ 8' } },
  { char: '™', name: { en: 'Trademark', fr: 'Marque déposée', ar: 'علامة تجارية' }, shortcut: { azerty: '⌥ ⇧ 8', qwerty: '⌥ 2' } },
  { char: '©', name: { en: 'Copyright', fr: 'Droit d\'auteur', ar: 'حقوق النشر' }, shortcut: { azerty: '⌥ C', qwerty: '⌥ G' } },
  { char: '®', name: { en: 'Registered', fr: 'Marque enregistrée', ar: 'مسجّلة' }, shortcut: { azerty: '⌥ R', qwerty: '⌥ R' } },
  { char: '¿', name: { en: 'Inverted Question', fr: 'Point d\'interrogation inversé', ar: 'علامة استفهام مقلوبة' }, shortcut: { azerty: '⌥ ⇧ ?', qwerty: '⌥ ⇧ /' } },
  { char: '¡', name: { en: 'Inverted Exclamation', fr: 'Point d\'exclamation inversé', ar: 'علامة تعجب مقلوبة' }, shortcut: { azerty: '⌥ !', qwerty: '⌥ 1' } },
  { char: '«', name: { en: 'Left Guillemet', fr: 'Guillemet ouvrant', ar: 'علامة تنصيص فرنسية يسرى' }, shortcut: { azerty: '⌥ è', qwerty: '⌥ \\' } },
  { char: '»', name: { en: 'Right Guillemet', fr: 'Guillemet fermant', ar: 'علامة تنصيص فرنسية يمنى' }, shortcut: { azerty: '⌥ ⇧ è', qwerty: '⌥ ⇧ \\' } },
  { char: '—', name: { en: 'Em Dash', fr: 'Tiret cadratin', ar: 'شرطة طويلة' }, shortcut: { azerty: '⌥ ⇧ -', qwerty: '⌥ ⇧ -' } },
  { char: '–', name: { en: 'En Dash', fr: 'Tiret demi-cadratin', ar: 'شرطة متوسطة' }, shortcut: { azerty: '⌥ -', qwerty: '⌥ -' } },
  { char: '…', name: { en: 'Ellipsis', fr: 'Points de suspension', ar: 'نقاط حذف' }, shortcut: { azerty: '⌥ .', qwerty: '⌥ ;' } },
  { char: '•', name: { en: 'Bullet', fr: 'Puce', ar: 'نقطة' }, shortcut: { azerty: '⌥ ⇧ 9', qwerty: '⌥ 8' } },
  { char: '∞', name: { en: 'Infinity', fr: 'Infini', ar: 'لانهاية' }, shortcut: { azerty: '⌥ ⇧ L', qwerty: '⌥ 5' } },
  { char: '√', name: { en: 'Square Root', fr: 'Racine carrée', ar: 'جذر تربيعي' }, shortcut: { azerty: '⌥ V', qwerty: '⌥ V' } },
  { char: 'π', name: { en: 'Pi', fr: 'Pi', ar: 'باي' }, shortcut: { azerty: '⌥ P', qwerty: '⌥ P' } },
  { char: '∑', name: { en: 'Sum', fr: 'Somme', ar: 'مجموع' }, shortcut: { azerty: '⌥ W', qwerty: '⌥ W' } },
  { char: '∆', name: { en: 'Delta', fr: 'Delta', ar: 'دلتا' }, shortcut: { azerty: '⌥ J', qwerty: '⌥ J' } },
  { char: 'Ω', name: { en: 'Omega', fr: 'Oméga', ar: 'أوميغا' }, shortcut: { azerty: '⌥ Z', qwerty: '⌥ Z' } },
  { char: 'µ', name: { en: 'Micro', fr: 'Micro', ar: 'ميكرو' }, shortcut: { azerty: '⌥ M', qwerty: '⌥ M' } },
  { char: '¶', name: { en: 'Pilcrow', fr: 'Pied-de-mouche', ar: 'علامة فقرة' }, shortcut: { azerty: '⌥ 6', qwerty: '⌥ 7' } },
  { char: '§', name: { en: 'Section', fr: 'Section', ar: 'قسم' }, shortcut: { azerty: '⌥ 5', qwerty: '⌥ 6' } },
  { char: '†', name: { en: 'Dagger', fr: 'Obèle', ar: 'خنجر' }, shortcut: { azerty: '⌥ T', qwerty: '⌥ T' } },
  { char: '‡', name: { en: 'Double Dagger', fr: 'Double obèle', ar: 'خنجر مزدوج' }, shortcut: { azerty: '⌥ ⇧ T', qwerty: '⌥ ⇧ 7' } },
  { char: '◊', name: { en: 'Lozenge', fr: 'Losange', ar: 'معين' }, shortcut: { azerty: '⌥ ⇧ V', qwerty: '⌥ ⇧ V' } },
  { char: 'ﬁ', name: { en: 'fi Ligature', fr: 'Ligature fi', ar: 'رابطة fi' }, shortcut: { azerty: '⌥ ⇧ F', qwerty: '⌥ ⇧ 5' } },
  { char: 'ﬂ', name: { en: 'fl Ligature', fr: 'Ligature fl', ar: 'رابطة fl' }, shortcut: { azerty: '⌥ ⇧ G', qwerty: '⌥ ⇧ 6' } },
  { char: '‹', name: { en: 'Left Single Guillemet', fr: 'Guillemet simple ouvrant', ar: 'تنصيص مفرد أيسر' }, shortcut: { azerty: '⌥ W', qwerty: '⌥ ⇧ 3' } },
  { char: '›', name: { en: 'Right Single Guillemet', fr: 'Guillemet simple fermant', ar: 'تنصيص مفرد أيمن' }, shortcut: { azerty: '⌥ ⇧ W', qwerty: '⌥ ⇧ 4' } }
];

/* ═══════ buildSpecialKeys() (v1.4) ═══════ */

function buildSpecialKeys() {
  const grid = $('specialKeysGrid');
  if (!grid) return;
  grid.innerHTML = '';

  MAC_SPECIAL_KEYS.forEach(key => {
    const card = document.createElement('button');
    card.className = 'special-key-card';
    card.setAttribute('aria-label', key.name[currentLang] || key.name.en);

    const symbolEl = document.createElement('span');
    symbolEl.className = 'special-key-symbol';
    symbolEl.textContent = key.symbol;
    card.appendChild(symbolEl);

    const nameEl = document.createElement('span');
    nameEl.className = 'special-key-name';
    nameEl.textContent = key.name[currentLang] || key.name.en;
    card.appendChild(nameEl);

    const descEl = document.createElement('span');
    descEl.className = 'special-key-desc';
    descEl.textContent = key.desc[currentLang] || key.desc.en;
    card.appendChild(descEl);

    card.addEventListener('click', () => {
      navigator.clipboard.writeText(key.symbol).then(() => {
        showToast(`Copied: ${key.symbol}`);
        playSound('success');
        log(`📋 Copied special key: ${key.symbol} (${key.name[currentLang] || key.name.en})`, 'success');
        addToRecent(key.symbol);
      }).catch(() => {
        showToast(LANG[currentLang].copyFail || 'Copy failed');
        playSound('error');
        log(`❌ Failed to copy: ${key.symbol}`, 'error');
      });
    });

    grid.appendChild(card);
  });
}

/* ═══════ buildSecrets() (v1.4) ═══════ */

function buildSecrets() {
  const grid = $('secretsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  MAC_SECRETS.forEach(secret => {
    const card = document.createElement('button');
    card.className = 'secret-card';
    card.setAttribute('aria-label', secret.name[currentLang] || secret.name.en);

    const charEl = document.createElement('span');
    charEl.className = 'secret-char';
    charEl.textContent = secret.char;
    card.appendChild(charEl);

    const nameEl = document.createElement('span');
    nameEl.className = 'secret-name';
    nameEl.textContent = secret.name[currentLang] || secret.name.en;
    card.appendChild(nameEl);

    card.addEventListener('click', () => {
      navigator.clipboard.writeText(secret.char).then(() => {
        showToast(`Copied: ${secret.char}`);
        playSound('success');
        log(`📋 Copied secret: ${secret.char} (${secret.name[currentLang] || secret.name.en})`, 'success');
        addToRecent(secret.char);
      }).catch(() => {
        showToast(LANG[currentLang].copyFail || 'Copy failed');
        playSound('error');
        log(`❌ Failed to copy: ${secret.char}`, 'error');
      });
    });

    grid.appendChild(card);
  });
}

/* ═══════ QUIZ STATE (v1.5) ═══════ */

let quizStreak = 0;
let quizBest = 0;
let currentQuizSymbol = null;

/* ═══════ generateQuiz() — Challenge Mode quiz (v1.5) ═══════ */

function generateQuiz() {
  const prompt = $('quizPrompt');
  const optionsWrap = $('quizOptions');
  if (!prompt || !optionsWrap) return;

  // Pick a random symbol
  currentQuizSymbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

  // Choose question type randomly
  const askName = Math.random() < 0.5; // true = "which symbol is called X?", false = "what is this symbol?"

  if (askName) {
    const name = currentQuizSymbol.name[currentLang] || currentQuizSymbol.name.en;
    prompt.innerHTML = `Which symbol is called <strong>${name}</strong>?`;
  } else {
    prompt.innerHTML = `What is this symbol? <span style="font-size:2em;vertical-align:middle;">${currentQuizSymbol.char}</span>`;
  }

  // Build 4 options: 1 correct + 3 random wrong
  const wrongPool = SYMBOLS.filter(s => s.char !== currentQuizSymbol.char);
  const wrongs = [];
  while (wrongs.length < 3 && wrongPool.length > 0) {
    const idx = Math.floor(Math.random() * wrongPool.length);
    wrongs.push(wrongPool.splice(idx, 1)[0]);
  }

  const options = [currentQuizSymbol, ...wrongs];
  // Shuffle
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  optionsWrap.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';

    if (askName) {
      // Question asks for name → options show characters
      btn.textContent = opt.char;
    } else {
      // Question shows character → options show names
      btn.textContent = opt.name[currentLang] || opt.name.en;
    }

    btn.addEventListener('click', () => {
      // Prevent double-click
      if (optionsWrap.dataset.answered === 'true') return;

      if (opt.char === currentQuizSymbol.char) {
        btn.classList.add('correct');
        quizStreak++;
        if (quizStreak > quizBest) quizBest = quizStreak;
        const streakEl = $('quizStreak');
        const bestEl = $('quizBest');
        if (streakEl) streakEl.textContent = quizStreak;
        if (bestEl) bestEl.textContent = quizBest;
        playSound('success');
        log(`✅ Quiz correct: ${currentQuizSymbol.char} (streak: ${quizStreak})`, 'success');
        optionsWrap.dataset.answered = 'true';
        setTimeout(generateQuiz, 1500);
      } else {
        btn.classList.add('wrong');
        quizStreak = 0;
        const streakEl = $('quizStreak');
        if (streakEl) streakEl.textContent = quizStreak;
        playSound('error');
        log(`❌ Quiz wrong — expected ${currentQuizSymbol.char}`, 'error');
      }
    });

    optionsWrap.appendChild(btn);
  });

  optionsWrap.dataset.answered = 'false';
}

/* ═══════ buildCheatSheet() — Cheat Sheet table (v1.5) ═══════ */

function buildCheatSheet() {
  const wrap = $('cheatTableWrap');
  if (!wrap) return;

  const table = document.createElement('table');
  table.className = 'cheat-table';

  // Header
  const thead = document.createElement('thead');
  const hr = document.createElement('tr');
  ['Symbol', 'Name', 'AZERTY', 'QWERTY'].forEach(h => {
    const th = document.createElement('th');
    th.textContent = h;
    hr.appendChild(th);
  });
  thead.appendChild(hr);
  table.appendChild(thead);

  // Body
  const tbody = document.createElement('tbody');
  SYMBOLS.forEach(sym => {
    const tr = document.createElement('tr');

    // Symbol column
    const tdChar = document.createElement('td');
    tdChar.className = 'cheat-char';
    tdChar.textContent = sym.char;
    tr.appendChild(tdChar);

    // Name column
    const tdName = document.createElement('td');
    tdName.textContent = sym.name[currentLang] || sym.name.en;
    tr.appendChild(tdName);

    // AZERTY column
    const tdAz = document.createElement('td');
    tdAz.textContent = sym.shortcut.azerty;
    tr.appendChild(tdAz);

    // QWERTY column
    const tdQw = document.createElement('td');
    tdQw.textContent = sym.shortcut.qwerty;
    tr.appendChild(tdQw);

    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  wrap.innerHTML = '';
  wrap.appendChild(table);
}

/* ═══════ copyCheatSheet() — Copy cheat sheet to clipboard (v1.5) ═══════ */

function copyCheatSheet() {
  const header = 'Symbol\tName\tAZERTY\tQWERTY';
  const rows = SYMBOLS.map(sym => {
    const name = sym.name[currentLang] || sym.name.en;
    return `${sym.char}\t${name}\t${sym.shortcut.azerty}\t${sym.shortcut.qwerty}`;
  });
  const text = [header, ...rows].join('\n');

  navigator.clipboard.writeText(text).then(() => {
    showToast(LANG[currentLang].copied || 'Copied!');
    log('📋 Cheat sheet copied to clipboard', 'success');
  }).catch(() => {
    showToast(LANG[currentLang].copyFail || 'Copy failed');
    log('❌ Failed to copy cheat sheet', 'error');
  });
}

/* ═══════ FEATURE 1: FLOATING QUICK BAR (v1.6) ═══════ */

function buildQuickBar() {
  const container = document.querySelector('.rows-container');
  if (!container) return;
  const existing = $('quickBar');
  if (existing) existing.remove();

  const bar = document.createElement('div');
  bar.id = 'quickBar';
  bar.className = 'quick-bar';

  const quickSymbols = ['@', '{', '}', '[', ']', '|', '\\', '~', '#', '\u20AC'];
  quickSymbols.forEach(ch => {
    const btn = document.createElement('button');
    btn.className = 'quick-sym';
    btn.textContent = ch;
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(ch).then(() => {
        showCopyToast(ch);
        playSound('success');
        log(`\uD83D\uDCCB Quick copy: ${ch}`, 'success');
        addToRecent(ch);
      }).catch(() => {
        showToast(LANG[currentLang].copyFail || 'Copy failed');
        playSound('error');
      });
    });
    bar.appendChild(btn);
  });

  const mainCard = $('mainCard');
  if (mainCard && mainCard.nextSibling) {
    container.insertBefore(bar, mainCard.nextSibling);
  } else {
    container.appendChild(bar);
  }
}

/* ═══════ FEATURE 2: RECENTLY COPIED (v1.6) ═══════ */

let recentlyCopied = [];

function addToRecent(char) {
  recentlyCopied = recentlyCopied.filter(c => c !== char);
  recentlyCopied.unshift(char);
  if (recentlyCopied.length > 10) recentlyCopied = recentlyCopied.slice(0, 10);
  try { localStorage.setItem('mwk-recent', JSON.stringify(recentlyCopied)); } catch {}
  buildRecentBar();
}

function buildRecentBar() {
  const container = document.querySelector('.rows-container');
  if (!container) return;
  let bar = $('recentBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'recentBar';
    bar.className = 'recent-bar';
    const quickBar = $('quickBar');
    if (quickBar && quickBar.nextSibling) {
      container.insertBefore(bar, quickBar.nextSibling);
    } else if (quickBar) {
      container.appendChild(bar);
    } else {
      const mainCard = $('mainCard');
      if (mainCard && mainCard.nextSibling) {
        container.insertBefore(bar, mainCard.nextSibling);
      } else {
        container.appendChild(bar);
      }
    }
  }

  if (recentlyCopied.length === 0) {
    bar.style.display = 'none';
    return;
  }

  bar.style.display = '';
  bar.innerHTML = '';

  const label = document.createElement('span');
  label.className = 'recent-label';
  label.textContent = { en: 'Recent:', fr: 'R\u00E9cents:', ar: '\u0627\u0644\u0623\u062E\u064A\u0631\u0629:' }[currentLang] || 'Recent:';
  bar.appendChild(label);

  recentlyCopied.forEach(ch => {
    const btn = document.createElement('button');
    btn.className = 'quick-sym';
    btn.textContent = ch;
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(ch).then(() => {
        showCopyToast(ch);
        playSound('success');
        log(`\uD83D\uDCCB Re-copied: ${ch}`, 'success');
        addToRecent(ch);
      }).catch(() => {
        showToast(LANG[currentLang].copyFail || 'Copy failed');
        playSound('error');
      });
    });
    bar.appendChild(btn);
  });
}

/* ═══════ FEATURE 3: SEARCH BY DESCRIPTION (v1.6) ═══════ */

const SEARCH_TAGS = {
  email: ['@'],
  money: ['$', '\u20AC', '\u00A3', '\u00A5', '\u00A2'],
  bracket: ['{', '}', '[', ']', '(', ')', '<', '>'],
  code: ['/', '{', '}', '[', ']', '&', '|', '\\', '_', ';', ':'],
  web: ['@', '/', '.', '://'],
  math: ['+', '=', '\u2260', '\u2248', '\u00B1', '\u00D7', '\u00F7', '\u2264', '\u2265', '\u221E', '\u221A', '\u03C0'],
  arrow: ['<', '>'],
  copyright: ['\u00A9', '\u00AE', '\u2122'],
  degree: ['\u00B0'],
  wave: ['~'],
  hash: ['#'],
  pipe: ['|'],
  slash: ['\\', '/'],
  quote: ['\u00AB', '\u00BB'],
  dot: ['\u2026', '\u2022']
};

function searchSymbols(query) {
  if (!query || !query.trim()) return SYMBOLS;
  const q = query.trim().toLowerCase();
  const matchedChars = new Set();

  // Search SEARCH_TAGS keys
  Object.keys(SEARCH_TAGS).forEach(key => {
    if (key.includes(q)) {
      SEARCH_TAGS[key].forEach(ch => matchedChars.add(ch));
    }
  });

  // Search symbol names (en/fr/ar)
  SYMBOLS.forEach(sym => {
    const names = [
      (sym.name.en || '').toLowerCase(),
      (sym.name.fr || '').toLowerCase(),
      (sym.name.ar || '')
    ];
    if (names.some(n => n.includes(q))) {
      matchedChars.add(sym.char);
    }
  });

  return SYMBOLS.filter(sym => matchedChars.has(sym.char));
}

function buildSearchBar() {
  const categoryTabs = $('categoryTabs');
  if (!categoryTabs) return;
  const existing = $('searchBar');
  if (existing) existing.remove();

  const bar = document.createElement('div');
  bar.id = 'searchBar';

  const input = document.createElement('input');
  input.className = 'search-input';
  input.type = 'text';
  const placeholders = {
    en: 'Search: email, money, code...',
    fr: 'Chercher: email, argent, code...',
    ar: '\u0628\u062D\u062B: \u0628\u0631\u064A\u062F\u060C \u0645\u0627\u0644\u060C \u0643\u0648\u062F...'
  };
  input.placeholder = placeholders[currentLang] || placeholders.en;

  input.addEventListener('input', () => {
    const query = input.value;
    const grid = $('symbolGrid');
    if (!grid) return;

    if (!query.trim()) {
      // Show all
      grid.querySelectorAll('.symbol-btn').forEach(btn => { btn.style.display = ''; });
      return;
    }

    const matches = searchSymbols(query);
    const matchedChars = new Set(matches.map(s => s.char));

    grid.querySelectorAll('.symbol-btn').forEach(btn => {
      const char = btn.querySelector('.symbol-char');
      if (char && matchedChars.has(char.textContent)) {
        btn.style.display = '';
      } else {
        btn.style.display = 'none';
      }
    });
  });

  bar.appendChild(input);
  categoryTabs.parentNode.insertBefore(bar, categoryTabs);
}

/* ═══════ FEATURE 5: KEYBOARD SHORTCUT LISTENER (v1.6) ═══════ */

function initKeyListener() {
  document.addEventListener('keydown', e => {
    const section = $('keyboardSection');
    if (!section || !section.open) return;

    const layout = KEYBOARD_LAYOUTS[currentLayout];
    if (!layout) return;

    const pressedKey = e.key.toLowerCase();
    const isOption = e.altKey;
    const isShift = e.shiftKey;

    // Find matching key in layout
    let foundKey = null;
    let foundResult = null;
    layout.forEach(row => {
      row.forEach(key => {
        if (key.main.toLowerCase() === pressedKey) {
          foundKey = key;
          if (isOption && isShift && key.shiftOpt) {
            foundResult = key.shiftOpt;
          } else if (isOption && key.opt) {
            foundResult = key.opt;
          }
        }
      });
    });

    if (!foundKey) return;

    // Highlight the key on the keyboard display
    const display = $('keyboardDisplay');
    if (display) {
      const allKeys = display.querySelectorAll('.kb-key');
      allKeys.forEach(btn => {
        const mainSpan = btn.querySelector('.key-main');
        if (mainSpan && mainSpan.textContent.toLowerCase() === foundKey.main.toLowerCase()) {
          btn.classList.add('key-highlight');
          setTimeout(() => btn.classList.remove('key-highlight'), 600);
        }
      });
    }

    // Log what was pressed
    if (foundResult && isOption) {
      const combo = isShift ? 'Shift+Option' : 'Option';
      log(`\u2328\uFE0F You pressed ${combo}+${foundKey.main} \u2192 that makes ${foundResult}`, 'info');
    }
  });
}

/* ═══════ FEATURE 6: ONE-CLICK MULTI-COPY (v2.0) ═══════ */

let multiSelectMode = false;
let selectedSymbols = [];

function toggleMultiSelect() {
  multiSelectMode = !multiSelectMode;
  selectedSymbols = [];
  // Remove all multi-selected highlights
  document.querySelectorAll('.symbol-btn.multi-selected').forEach(b => b.classList.remove('multi-selected'));
  const bar = $('multiBar');
  if (bar) bar.style.display = multiSelectMode ? 'flex' : 'none';
  updateMultiBar();
  const toggleBtn = $('multiSelectToggle');
  if (toggleBtn) toggleBtn.classList.toggle('active', multiSelectMode);
  log(multiSelectMode ? '🔲 Multi-select ON' : '🔲 Multi-select OFF', 'info');
}

function updateMultiBar() {
  const countEl = $('multiBarCount');
  if (countEl) countEl.textContent = selectedSymbols.length + ' selected';
}

function buildMultiBar() {
  const existing = $('multiBar');
  if (existing) existing.remove();

  const bar = document.createElement('div');
  bar.id = 'multiBar';
  bar.className = 'multi-bar';
  bar.style.display = 'none';

  const countSpan = document.createElement('span');
  countSpan.id = 'multiBarCount';
  countSpan.textContent = '0 selected';
  bar.appendChild(countSpan);

  const copyAllBtn = document.createElement('button');
  copyAllBtn.className = 'btn-sm primary';
  copyAllBtn.textContent = 'Copy All';
  copyAllBtn.addEventListener('click', () => {
    if (selectedSymbols.length === 0) return;
    const joined = selectedSymbols.join('');
    navigator.clipboard.writeText(joined).then(() => {
      showCopyToast(joined);
      playSound('success');
      log(`📋 Multi-copy: ${joined}`, 'success');
    }).catch(() => {
      showToast(LANG[currentLang].copyFail || 'Copy failed');
      playSound('error');
    });
  });
  bar.appendChild(copyAllBtn);

  const clearBtn = document.createElement('button');
  clearBtn.className = 'btn-sm';
  clearBtn.textContent = 'Clear';
  clearBtn.addEventListener('click', () => {
    selectedSymbols = [];
    document.querySelectorAll('.symbol-btn.multi-selected').forEach(b => b.classList.remove('multi-selected'));
    updateMultiBar();
  });
  bar.appendChild(clearBtn);

  document.body.appendChild(bar);

  // Add toggle button in mainCard header area
  const mainCard = $('mainCard');
  if (mainCard) {
    const header = mainCard.querySelector('.card-header');
    if (header) {
      const toggleBtn = document.createElement('button');
      toggleBtn.id = 'multiSelectToggle';
      toggleBtn.className = 'btn-sm';
      toggleBtn.textContent = '☑ Multi';
      toggleBtn.addEventListener('click', toggleMultiSelect);
      header.appendChild(toggleBtn);
    }
  }
}

/* ═══════ FEATURE 7: FAVORITE SYMBOLS (v2.0) ═══════ */

let favorites = [];

function loadFavorites() {
  try {
    const saved = localStorage.getItem('mwk-favorites');
    if (saved) favorites = JSON.parse(saved);
  } catch {}
}

function saveFavorites() {
  try { localStorage.setItem('mwk-favorites', JSON.stringify(favorites)); } catch {}
}

function toggleFavorite(char) {
  const idx = favorites.indexOf(char);
  if (idx >= 0) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(char);
  }
  saveFavorites();
  buildFavoritesBar();
  // Rebuild grid to update star indicators
  buildSymbolGrid();
}

function buildFavoritesBar() {
  const container = document.querySelector('.rows-container');
  if (!container) return;
  let bar = $('favoritesBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'favoritesBar';
    bar.className = 'favorites-bar';
    // Insert after recentBar, or after quickBar if no recentBar
    const recentBar = $('recentBar');
    const quickBar = $('quickBar');
    const ref = recentBar || quickBar;
    if (ref && ref.nextSibling) {
      container.insertBefore(bar, ref.nextSibling);
    } else if (ref) {
      container.appendChild(bar);
    } else {
      const mainCard = $('mainCard');
      if (mainCard && mainCard.nextSibling) {
        container.insertBefore(bar, mainCard.nextSibling);
      } else {
        container.appendChild(bar);
      }
    }
  }

  if (favorites.length === 0) {
    bar.style.display = 'none';
    return;
  }

  bar.style.display = '';
  bar.innerHTML = '';

  const label = document.createElement('span');
  label.className = 'favorites-label';
  label.textContent = { en: 'Favorites:', fr: 'Favoris:', ar: '\u0627\u0644\u0645\u0641\u0636\u0644\u0629:' }[currentLang] || 'Favorites:';
  bar.appendChild(label);

  favorites.forEach(ch => {
    const btn = document.createElement('button');
    btn.className = 'quick-sym';
    btn.textContent = ch;
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(ch).then(() => {
        showCopyToast(ch);
        playSound('success');
        log(`📋 Favorite copy: ${ch}`, 'success');
        addToRecent(ch);
      }).catch(() => {
        showToast(LANG[currentLang].copyFail || 'Copy failed');
        playSound('error');
      });
    });
    bar.appendChild(btn);
  });
}

/* ═══════ FEATURE 8: TOAST WITH PASTE HINT (v2.0) ═══════ */

function showCopyToast(char) {
  showToast(`Copied ${char}! Press \u2318V to paste`, 2000);
}

/* ═══════ FEATURE 9: SYMBOL OF THE DAY (v2.0) ═══════ */

function getSymbolOfTheDay() {
  const now = new Date();
  const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  return SYMBOLS[seed % SYMBOLS.length];
}

function showSymbolOfTheDay() {
  const mainCard = $('mainCard');
  if (!mainCard) return;

  // Check if dismissed today
  const today = new Date().toISOString().slice(0, 10);
  try {
    if (localStorage.getItem('mwk-sotd-dismissed') === today) return;
  } catch {}

  const sym = getSymbolOfTheDay();
  const lang = currentLang;

  const existing = $('symbolOfDay');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.id = 'symbolOfDay';
  div.className = 'symbol-of-day';

  const titleSpan = document.createElement('span');
  titleSpan.className = 'sotd-title';
  titleSpan.textContent = { en: 'Symbol of the Day:', fr: 'Symbole du Jour:', ar: '\u0631\u0645\u0632 \u0627\u0644\u064A\u0648\u0645:' }[lang] || 'Symbol of the Day:';
  div.appendChild(titleSpan);

  const charSpan = document.createElement('span');
  charSpan.className = 'sotd-char';
  charSpan.textContent = sym.char;
  div.appendChild(charSpan);

  const nameSpan = document.createElement('span');
  nameSpan.className = 'sotd-name';
  nameSpan.textContent = sym.name[lang] || sym.name.en;
  div.appendChild(nameSpan);

  const factSpan = document.createElement('span');
  factSpan.className = 'sotd-fact';
  factSpan.textContent = sym.analogy[lang] || sym.analogy.en;
  div.appendChild(factSpan);

  // Click to copy
  div.addEventListener('click', (e) => {
    if (e.target.classList.contains('sotd-dismiss')) return;
    navigator.clipboard.writeText(sym.char).then(() => {
      showCopyToast(sym.char);
      playSound('success');
      log(`📋 Symbol of the Day copied: ${sym.char}`, 'success');
      addToRecent(sym.char);
    }).catch(() => {
      showToast(LANG[currentLang].copyFail || 'Copy failed');
      playSound('error');
    });
  });

  // Dismiss button
  const dismissBtn = document.createElement('button');
  dismissBtn.className = 'sotd-dismiss';
  dismissBtn.textContent = '\u2715';
  dismissBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    div.remove();
    try { localStorage.setItem('mwk-sotd-dismissed', today); } catch {}
  });
  div.appendChild(dismissBtn);

  mainCard.insertBefore(div, mainCard.firstChild);
}

/* ═══════ FEATURE 10: AUTO-DETECT LAYOUT (v2.0) ═══════ */

function detectLayout() {
  const lang = (navigator.language || navigator.languages && navigator.languages[0] || 'en').toLowerCase();
  if (lang.startsWith('fr') || lang.startsWith('ar')) {
    return 'azerty';
  }
  return 'qwerty';
}

/* ═══════ VIRTUAL KEYBOARD (v2.1) ═══════ */

const VKB_LAYOUTS = {
  azerty: {
    rows: [
      // Row 1 — number row
      [
        { normal: '@', shift: '#', opt: '\u2022', shiftOpt: '\u0178', width: 'vkb-w1' },
        { normal: '&', shift: '1', opt: '\u00B4', shiftOpt: '\u00C6', width: 'vkb-w1' },
        { normal: '\u00E9', shift: '2', opt: '\u00EA', shiftOpt: '\u00CB', width: 'vkb-w1' },
        { normal: '"', shift: '3', opt: '\u02DD', shiftOpt: '\u201C', width: 'vkb-w1' },
        { normal: "'", shift: '4', opt: '{', shiftOpt: '\u00AB', width: 'vkb-w1' },
        { normal: '(', shift: '5', opt: '[', shiftOpt: '\u201E', width: 'vkb-w1' },
        { normal: '\u00A7', shift: '6', opt: '|', shiftOpt: '\u201D', width: 'vkb-w1' },
        { normal: '\u00E8', shift: '7', opt: '`', shiftOpt: '\u00BB', width: 'vkb-w1' },
        { normal: '!', shift: '8', opt: '\\', shiftOpt: '\u00D9', width: 'vkb-w1' },
        { normal: '\u00E7', shift: '9', opt: '^', shiftOpt: '\u00C1', width: 'vkb-w1' },
        { normal: '\u00E0', shift: '0', opt: '@', shiftOpt: '\u00D8', width: 'vkb-w1' },
        { normal: ')', shift: '\u00B0', opt: ']', shiftOpt: '\u2019', width: 'vkb-w1' },
        { normal: '-', shift: '_', opt: '}', shiftOpt: '\u2014', width: 'vkb-w1' }
      ],
      // Row 2 — top letter row
      [
        { normal: 'a', shift: 'A', opt: '\u00E6', shiftOpt: '\u00C6', width: 'vkb-w1' },
        { normal: 'z', shift: 'Z', opt: '\u00E2', shiftOpt: '\u00C2', width: 'vkb-w1' },
        { normal: 'e', shift: 'E', opt: '\u00EA', shiftOpt: '\u00CA', width: 'vkb-w1' },
        { normal: 'r', shift: 'R', opt: '\u00AB', shiftOpt: '\u201C', width: 'vkb-w1' },
        { normal: 't', shift: 'T', opt: '\u00FE', shiftOpt: '\u00DE', width: 'vkb-w1' },
        { normal: 'y', shift: 'Y', opt: '\u00FF', shiftOpt: '\u0178', width: 'vkb-w1' },
        { normal: 'u', shift: 'U', opt: '\u00FB', shiftOpt: '\u00DB', width: 'vkb-w1' },
        { normal: 'i', shift: 'I', opt: '\u00EE', shiftOpt: '\u00CE', width: 'vkb-w1' },
        { normal: 'o', shift: 'O', opt: '\u0153', shiftOpt: '\u0152', width: 'vkb-w1' },
        { normal: 'p', shift: 'P', opt: '\u03C0', shiftOpt: '\u220F', width: 'vkb-w1' },
        { normal: '^', shift: '\u00A8', opt: '\u00F4', shiftOpt: '\u00D4', width: 'vkb-w1' },
        { normal: '$', shift: '*', opt: '\u20AC', shiftOpt: '\u00A5', width: 'vkb-w1' },
        { action: 'delete', label: '\u232B', width: 'vkb-w15' }
      ],
      // Row 3 — home row
      [
        { normal: 'q', shift: 'Q', opt: '\u2020', shiftOpt: '\u2021', width: 'vkb-w1' },
        { normal: 's', shift: 'S', opt: '\u00DF', shiftOpt: '\u00A7', width: 'vkb-w1' },
        { normal: 'd', shift: 'D', opt: '\u2202', shiftOpt: '\u2206', width: 'vkb-w1' },
        { normal: 'f', shift: 'F', opt: '\u0192', shiftOpt: '\u00B7', width: 'vkb-w1' },
        { normal: 'g', shift: 'G', opt: '\uFB01', shiftOpt: '\uFB02', width: 'vkb-w1' },
        { normal: 'h', shift: 'H', opt: '\u00CC', shiftOpt: '\u00CE', width: 'vkb-w1' },
        { normal: 'j', shift: 'J', opt: '\u00CF', shiftOpt: '\u00CD', width: 'vkb-w1' },
        { normal: 'k', shift: 'K', opt: '\u00CB', shiftOpt: '\u00C8', width: 'vkb-w1' },
        { normal: 'l', shift: 'L', opt: '\u00AC', shiftOpt: '|', width: 'vkb-w1' },
        { normal: 'm', shift: 'M', opt: '\u00B5', shiftOpt: '\u00D3', width: 'vkb-w1' },
        { normal: '\u00F9', shift: '%', opt: '\u00D9', shiftOpt: '\u2030', width: 'vkb-w1' },
        { normal: '`', shift: '\u00A3', opt: '#', shiftOpt: '\u00B7', width: 'vkb-w1' },
        { action: 'return', label: '\u21B5', width: 'vkb-w15' }
      ],
      // Row 4 — bottom row
      [
        { action: 'shift', label: '\u21E7 Shift', width: 'vkb-w2' },
        { normal: '<', shift: '>', opt: '\u2264', shiftOpt: '\u2265', width: 'vkb-w1' },
        { normal: 'w', shift: 'W', opt: '\u2211', shiftOpt: '\u201E', width: 'vkb-w1' },
        { normal: 'x', shift: 'X', opt: '\u2248', shiftOpt: '\u2044', width: 'vkb-w1' },
        { normal: 'c', shift: 'C', opt: '\u00A9', shiftOpt: '\u00A2', width: 'vkb-w1' },
        { normal: 'v', shift: 'V', opt: '\u25CA', shiftOpt: '\u221A', width: 'vkb-w1' },
        { normal: 'b', shift: 'B', opt: '\u222B', shiftOpt: '\u0131', width: 'vkb-w1' },
        { normal: 'n', shift: 'N', opt: '~', shiftOpt: '\u0131', width: 'vkb-w1' },
        { normal: ',', shift: '?', opt: '\u221E', shiftOpt: '\u00BF', width: 'vkb-w1' },
        { normal: ';', shift: '.', opt: '\u2026', shiftOpt: '\u2022', width: 'vkb-w1' },
        { normal: ':', shift: '/', opt: '\u00F7', shiftOpt: '\\', width: 'vkb-w1' },
        { normal: '=', shift: '+', opt: '\u2260', shiftOpt: '\u00B1', width: 'vkb-w1' },
        { action: 'shift', label: '\u21E7', width: 'vkb-w2' }
      ],
      // Row 5 — space
      [
        { action: 'space', label: ' ', width: 'vkb-space' }
      ]
    ]
  },
  qwerty: {
    rows: [
      // Row 1 — number row
      [
        { normal: '`', shift: '~', opt: '\u0060', shiftOpt: '\u0060', width: 'vkb-w1' },
        { normal: '1', shift: '!', opt: '\u00A1', shiftOpt: '\u2044', width: 'vkb-w1' },
        { normal: '2', shift: '@', opt: '\u2122', shiftOpt: '\u20AC', width: 'vkb-w1' },
        { normal: '3', shift: '#', opt: '\u00A3', shiftOpt: '\u2039', width: 'vkb-w1' },
        { normal: '4', shift: '$', opt: '\u00A2', shiftOpt: '\u203A', width: 'vkb-w1' },
        { normal: '5', shift: '%', opt: '\u221E', shiftOpt: '\uFB01', width: 'vkb-w1' },
        { normal: '6', shift: '^', opt: '\u00A7', shiftOpt: '\uFB02', width: 'vkb-w1' },
        { normal: '7', shift: '&', opt: '\u00B6', shiftOpt: '\u2021', width: 'vkb-w1' },
        { normal: '8', shift: '*', opt: '\u2022', shiftOpt: '\u00B0', width: 'vkb-w1' },
        { normal: '9', shift: '(', opt: '\u00AA', shiftOpt: '\u00B7', width: 'vkb-w1' },
        { normal: '0', shift: ')', opt: '\u00BA', shiftOpt: '\u201A', width: 'vkb-w1' },
        { normal: '-', shift: '_', opt: '\u2013', shiftOpt: '\u2014', width: 'vkb-w1' },
        { normal: '=', shift: '+', opt: '\u2260', shiftOpt: '\u00B1', width: 'vkb-w1' }
      ],
      // Row 2 — top letter row
      [
        { normal: 'q', shift: 'Q', opt: '\u0153', shiftOpt: '\u0152', width: 'vkb-w1' },
        { normal: 'w', shift: 'W', opt: '\u2211', shiftOpt: '\u201E', width: 'vkb-w1' },
        { normal: 'e', shift: 'E', opt: '\u00B4', shiftOpt: '\u00B4', width: 'vkb-w1' },
        { normal: 'r', shift: 'R', opt: '\u00AE', shiftOpt: '\u2030', width: 'vkb-w1' },
        { normal: 't', shift: 'T', opt: '\u2020', shiftOpt: '\u02C7', width: 'vkb-w1' },
        { normal: 'y', shift: 'Y', opt: '\u00A5', shiftOpt: '\u00C1', width: 'vkb-w1' },
        { normal: 'u', shift: 'U', opt: '\u00A8', shiftOpt: '\u00A8', width: 'vkb-w1' },
        { normal: 'i', shift: 'I', opt: '\u02C6', shiftOpt: '\u02C6', width: 'vkb-w1' },
        { normal: 'o', shift: 'O', opt: '\u00F8', shiftOpt: '\u00D8', width: 'vkb-w1' },
        { normal: 'p', shift: 'P', opt: '\u03C0', shiftOpt: '\u220F', width: 'vkb-w1' },
        { normal: '[', shift: '{', opt: '\u201C', shiftOpt: '\u201D', width: 'vkb-w1' },
        { normal: ']', shift: '}', opt: '\u2018', shiftOpt: '\u2019', width: 'vkb-w1' },
        { normal: '\\', shift: '|', opt: '\u00AB', shiftOpt: '\u00BB', width: 'vkb-w1' },
        { action: 'delete', label: '\u232B', width: 'vkb-w15' }
      ],
      // Row 3 — home row
      [
        { normal: 'a', shift: 'A', opt: '\u00E5', shiftOpt: '\u00C5', width: 'vkb-w1' },
        { normal: 's', shift: 'S', opt: '\u00DF', shiftOpt: '\u00CD', width: 'vkb-w1' },
        { normal: 'd', shift: 'D', opt: '\u2202', shiftOpt: '\u00CE', width: 'vkb-w1' },
        { normal: 'f', shift: 'F', opt: '\u0192', shiftOpt: '\u00CF', width: 'vkb-w1' },
        { normal: 'g', shift: 'G', opt: '\u00A9', shiftOpt: '\u02DD', width: 'vkb-w1' },
        { normal: 'h', shift: 'H', opt: '\u02D9', shiftOpt: '\u00D3', width: 'vkb-w1' },
        { normal: 'j', shift: 'J', opt: '\u2206', shiftOpt: '\u00D4', width: 'vkb-w1' },
        { normal: 'k', shift: 'K', opt: '\u02DA', shiftOpt: '\uF8FF', width: 'vkb-w1' },
        { normal: 'l', shift: 'L', opt: '\u00AC', shiftOpt: '\u00D2', width: 'vkb-w1' },
        { normal: ';', shift: ':', opt: '\u2026', shiftOpt: '\u00DA', width: 'vkb-w1' },
        { normal: "'", shift: '"', opt: '\u00E6', shiftOpt: '\u00C6', width: 'vkb-w1' },
        { action: 'return', label: '\u21B5', width: 'vkb-w15' }
      ],
      // Row 4 — bottom row
      [
        { action: 'shift', label: '\u21E7 Shift', width: 'vkb-w2' },
        { normal: 'z', shift: 'Z', opt: '\u03A9', shiftOpt: '\u00B8', width: 'vkb-w1' },
        { normal: 'x', shift: 'X', opt: '\u2248', shiftOpt: '\u02DB', width: 'vkb-w1' },
        { normal: 'c', shift: 'C', opt: '\u00E7', shiftOpt: '\u00C7', width: 'vkb-w1' },
        { normal: 'v', shift: 'V', opt: '\u221A', shiftOpt: '\u25CA', width: 'vkb-w1' },
        { normal: 'b', shift: 'B', opt: '\u222B', shiftOpt: '\u0131', width: 'vkb-w1' },
        { normal: 'n', shift: 'N', opt: '\u02DC', shiftOpt: '\u02DC', width: 'vkb-w1' },
        { normal: 'm', shift: 'M', opt: '\u00B5', shiftOpt: '\u00C2', width: 'vkb-w1' },
        { normal: ',', shift: '<', opt: '\u2264', shiftOpt: '\u00AF', width: 'vkb-w1' },
        { normal: '.', shift: '>', opt: '\u2265', shiftOpt: '\u02D8', width: 'vkb-w1' },
        { normal: '/', shift: '?', opt: '\u00F7', shiftOpt: '\u00BF', width: 'vkb-w1' },
        { action: 'shift', label: '\u21E7', width: 'vkb-w2' }
      ],
      // Row 5 — space
      [
        { action: 'space', label: ' ', width: 'vkb-space' }
      ]
    ]
  },
  arabic: {
    rows: [
      // Row 1 — number row
      [
        { normal: '\u0630', shift: '\u0651', opt: '\u0651', shiftOpt: '\u0651', width: 'vkb-w1' },
        { normal: '1', shift: '!', opt: '\u00A1', shiftOpt: '\u00A1', width: 'vkb-w1' },
        { normal: '2', shift: '@', opt: '\u2122', shiftOpt: '\u2122', width: 'vkb-w1' },
        { normal: '3', shift: '#', opt: '\u00A3', shiftOpt: '\u00A3', width: 'vkb-w1' },
        { normal: '4', shift: '$', opt: '\u00A2', shiftOpt: '\u00A2', width: 'vkb-w1' },
        { normal: '5', shift: '%', opt: '\u221E', shiftOpt: '\u221E', width: 'vkb-w1' },
        { normal: '6', shift: '^', opt: '\u00A7', shiftOpt: '\u00A7', width: 'vkb-w1' },
        { normal: '7', shift: '&', opt: '\u00B6', shiftOpt: '\u00B6', width: 'vkb-w1' },
        { normal: '8', shift: '*', opt: '\u2022', shiftOpt: '\u2022', width: 'vkb-w1' },
        { normal: '9', shift: ')', opt: '\u00AA', shiftOpt: '\u00AA', width: 'vkb-w1' },
        { normal: '0', shift: '(', opt: '\u00BA', shiftOpt: '\u00BA', width: 'vkb-w1' },
        { normal: '-', shift: '_', opt: '\u2013', shiftOpt: '\u2014', width: 'vkb-w1' },
        { normal: '=', shift: '+', opt: '\u2260', shiftOpt: '\u00B1', width: 'vkb-w1' }
      ],
      // Row 2 — top letter row
      [
        { normal: '\u0636', shift: '\u0650', opt: '\u0636', shiftOpt: '\u0650', width: 'vkb-w1' },
        { normal: '\u0635', shift: '\u064C', opt: '\u0635', shiftOpt: '\u064C', width: 'vkb-w1' },
        { normal: '\u062B', shift: '\u064F', opt: '\u062B', shiftOpt: '\u064F', width: 'vkb-w1' },
        { normal: '\u0642', shift: '\u064B', opt: '\u0642', shiftOpt: '\u064B', width: 'vkb-w1' },
        { normal: '\u0641', shift: '\u064E', opt: '\u0641', shiftOpt: '\u064E', width: 'vkb-w1' },
        { normal: '\u063A', shift: '\u0651', opt: '\u063A', shiftOpt: '\u0651', width: 'vkb-w1' },
        { normal: '\u0639', shift: '\u0652', opt: '\u0639', shiftOpt: '\u0652', width: 'vkb-w1' },
        { normal: '\u0647', shift: ']', opt: '\u0647', shiftOpt: ']', width: 'vkb-w1' },
        { normal: '\u062E', shift: '[', opt: '\u062E', shiftOpt: '[', width: 'vkb-w1' },
        { normal: '\u062D', shift: '\u0644\u0623', opt: '\u062D', shiftOpt: '\u0644\u0623', width: 'vkb-w1' },
        { normal: '\u062C', shift: '\u0623', opt: '\u062C', shiftOpt: '\u0623', width: 'vkb-w1' },
        { normal: '\u062F', shift: '\u060C', opt: '\u062F', shiftOpt: '\u060C', width: 'vkb-w1' },
        { normal: '\\', shift: '|', opt: '\\', shiftOpt: '|', width: 'vkb-w1' },
        { action: 'delete', label: '\u232B', width: 'vkb-w15' }
      ],
      // Row 3 — home row
      [
        { normal: '\u0634', shift: '\u0650', opt: '\u0634', shiftOpt: '\u0650', width: 'vkb-w1' },
        { normal: '\u0633', shift: '\u064C', opt: '\u0633', shiftOpt: '\u064C', width: 'vkb-w1' },
        { normal: '\u064A', shift: ']', opt: '\u064A', shiftOpt: ']', width: 'vkb-w1' },
        { normal: '\u0628', shift: '[', opt: '\u0628', shiftOpt: '[', width: 'vkb-w1' },
        { normal: '\u0644', shift: '\u0644\u0623', opt: '\u0644', shiftOpt: '\u0644\u0623', width: 'vkb-w1' },
        { normal: '\u0627', shift: '\u0623', opt: '\u0627', shiftOpt: '\u0623', width: 'vkb-w1' },
        { normal: '\u062A', shift: '\u0640', opt: '\u062A', shiftOpt: '\u0640', width: 'vkb-w1' },
        { normal: '\u0646', shift: '\u060C', opt: '\u0646', shiftOpt: '\u060C', width: 'vkb-w1' },
        { normal: '\u0645', shift: '.', opt: '\u0645', shiftOpt: '.', width: 'vkb-w1' },
        { normal: '\u0643', shift: ':', opt: '\u0643', shiftOpt: ':', width: 'vkb-w1' },
        { normal: '\u0637', shift: '"', opt: '\u0637', shiftOpt: '"', width: 'vkb-w1' },
        { action: 'return', label: '\u21B5', width: 'vkb-w15' }
      ],
      // Row 4 — bottom row
      [
        { action: 'shift', label: '\u21E7 Shift', width: 'vkb-w2' },
        { normal: '\u0626', shift: '~', opt: '\u0626', shiftOpt: '~', width: 'vkb-w1' },
        { normal: '\u0621', shift: '\u0652', opt: '\u0621', shiftOpt: '\u0652', width: 'vkb-w1' },
        { normal: '\u0624', shift: '{', opt: '\u0624', shiftOpt: '{', width: 'vkb-w1' },
        { normal: '\u0631', shift: '}', opt: '\u0631', shiftOpt: '}', width: 'vkb-w1' },
        { normal: '\u0644\u0627', shift: '\u0644\u0623', opt: '\u0644\u0627', shiftOpt: '\u0644\u0623', width: 'vkb-w1' },
        { normal: '\u0649', shift: '\u0622', opt: '\u0649', shiftOpt: '\u0622', width: 'vkb-w1' },
        { normal: '\u0629', shift: '\u2019', opt: '\u0629', shiftOpt: '\u2019', width: 'vkb-w1' },
        { normal: '\u0648', shift: ',', opt: '\u0648', shiftOpt: ',', width: 'vkb-w1' },
        { normal: '\u0632', shift: '.', opt: '\u0632', shiftOpt: '.', width: 'vkb-w1' },
        { normal: '\u0638', shift: '\u061F', opt: '\u0638', shiftOpt: '\u061F', width: 'vkb-w1' },
        { action: 'shift', label: '\u21E7', width: 'vkb-w2' }
      ],
      // Row 5 — space
      [
        { action: 'space', label: ' ', width: 'vkb-space' }
      ]
    ]
  },
  win_azerty_fr: {
    rows: [
      // Row 1 — number row
      [
        { normal: '\u00B2', shift: '', opt: '\u00B2', shiftOpt: '', width: 'vkb-w1' },
        { normal: '&', shift: '1', opt: '&', shiftOpt: '1', width: 'vkb-w1' },
        { normal: '\u00E9', shift: '2', opt: '~', shiftOpt: '2', width: 'vkb-w1' },
        { normal: '"', shift: '3', opt: '#', shiftOpt: '3', width: 'vkb-w1' },
        { normal: "'", shift: '4', opt: '{', shiftOpt: '4', width: 'vkb-w1' },
        { normal: '(', shift: '5', opt: '[', shiftOpt: '5', width: 'vkb-w1' },
        { normal: '-', shift: '6', opt: '|', shiftOpt: '6', width: 'vkb-w1' },
        { normal: '\u00E8', shift: '7', opt: '`', shiftOpt: '7', width: 'vkb-w1' },
        { normal: '_', shift: '8', opt: '\\', shiftOpt: '8', width: 'vkb-w1' },
        { normal: '\u00E7', shift: '9', opt: '^', shiftOpt: '9', width: 'vkb-w1' },
        { normal: '\u00E0', shift: '0', opt: '@', shiftOpt: '0', width: 'vkb-w1' },
        { normal: ')', shift: '\u00B0', opt: ']', shiftOpt: '\u00B0', width: 'vkb-w1' },
        { normal: '=', shift: '+', opt: '}', shiftOpt: '+', width: 'vkb-w1' }
      ],
      // Row 2 — top letter row
      [
        { normal: 'a', shift: 'A', opt: 'a', shiftOpt: 'A', width: 'vkb-w1' },
        { normal: 'z', shift: 'Z', opt: 'z', shiftOpt: 'Z', width: 'vkb-w1' },
        { normal: 'e', shift: 'E', opt: '\u20AC', shiftOpt: 'E', width: 'vkb-w1' },
        { normal: 'r', shift: 'R', opt: 'r', shiftOpt: 'R', width: 'vkb-w1' },
        { normal: 't', shift: 'T', opt: 't', shiftOpt: 'T', width: 'vkb-w1' },
        { normal: 'y', shift: 'Y', opt: 'y', shiftOpt: 'Y', width: 'vkb-w1' },
        { normal: 'u', shift: 'U', opt: 'u', shiftOpt: 'U', width: 'vkb-w1' },
        { normal: 'i', shift: 'I', opt: 'i', shiftOpt: 'I', width: 'vkb-w1' },
        { normal: 'o', shift: 'O', opt: 'o', shiftOpt: 'O', width: 'vkb-w1' },
        { normal: 'p', shift: 'P', opt: 'p', shiftOpt: 'P', width: 'vkb-w1' },
        { normal: '^', shift: '\u00A8', opt: '^', shiftOpt: '\u00A8', width: 'vkb-w1' },
        { normal: '$', shift: '\u00A3', opt: '$', shiftOpt: '\u00A3', width: 'vkb-w1' },
        { action: 'delete', label: '\u232B', width: 'vkb-w15' }
      ],
      // Row 3 — home row
      [
        { normal: 'q', shift: 'Q', opt: 'q', shiftOpt: 'Q', width: 'vkb-w1' },
        { normal: 's', shift: 'S', opt: 's', shiftOpt: 'S', width: 'vkb-w1' },
        { normal: 'd', shift: 'D', opt: 'd', shiftOpt: 'D', width: 'vkb-w1' },
        { normal: 'f', shift: 'F', opt: 'f', shiftOpt: 'F', width: 'vkb-w1' },
        { normal: 'g', shift: 'G', opt: 'g', shiftOpt: 'G', width: 'vkb-w1' },
        { normal: 'h', shift: 'H', opt: 'h', shiftOpt: 'H', width: 'vkb-w1' },
        { normal: 'j', shift: 'J', opt: 'j', shiftOpt: 'J', width: 'vkb-w1' },
        { normal: 'k', shift: 'K', opt: 'k', shiftOpt: 'K', width: 'vkb-w1' },
        { normal: 'l', shift: 'L', opt: 'l', shiftOpt: 'L', width: 'vkb-w1' },
        { normal: 'm', shift: 'M', opt: 'm', shiftOpt: 'M', width: 'vkb-w1' },
        { normal: '\u00F9', shift: '%', opt: '\u00F9', shiftOpt: '%', width: 'vkb-w1' },
        { normal: '*', shift: '\u00B5', opt: '*', shiftOpt: '\u00B5', width: 'vkb-w1' },
        { action: 'return', label: '\u21B5', width: 'vkb-w15' }
      ],
      // Row 4 — bottom row
      [
        { action: 'shift', label: '\u21E7 Shift', width: 'vkb-w2' },
        { normal: '<', shift: '>', opt: '<', shiftOpt: '>', width: 'vkb-w1' },
        { normal: 'w', shift: 'W', opt: 'w', shiftOpt: 'W', width: 'vkb-w1' },
        { normal: 'x', shift: 'X', opt: 'x', shiftOpt: 'X', width: 'vkb-w1' },
        { normal: 'c', shift: 'C', opt: 'c', shiftOpt: 'C', width: 'vkb-w1' },
        { normal: 'v', shift: 'V', opt: 'v', shiftOpt: 'V', width: 'vkb-w1' },
        { normal: 'b', shift: 'B', opt: 'b', shiftOpt: 'B', width: 'vkb-w1' },
        { normal: 'n', shift: 'N', opt: 'n', shiftOpt: 'N', width: 'vkb-w1' },
        { normal: ',', shift: '?', opt: ',', shiftOpt: '?', width: 'vkb-w1' },
        { normal: ';', shift: '.', opt: ';', shiftOpt: '.', width: 'vkb-w1' },
        { normal: ':', shift: '/', opt: ':', shiftOpt: '/', width: 'vkb-w1' },
        { normal: '!', shift: '\u00A7', opt: '!', shiftOpt: '\u00A7', width: 'vkb-w1' },
        { action: 'shift', label: '\u21E7', width: 'vkb-w2' }
      ],
      // Row 5 — space
      [
        { action: 'space', label: ' ', width: 'vkb-space' }
      ]
    ]
  },
  win_qwerty: {
    rows: [
      // Row 1 — number row
      [
        { normal: '`', shift: '~', opt: '`', shiftOpt: '~', width: 'vkb-w1' },
        { normal: '1', shift: '!', opt: '1', shiftOpt: '!', width: 'vkb-w1' },
        { normal: '2', shift: '@', opt: '2', shiftOpt: '@', width: 'vkb-w1' },
        { normal: '3', shift: '#', opt: '3', shiftOpt: '#', width: 'vkb-w1' },
        { normal: '4', shift: '$', opt: '4', shiftOpt: '$', width: 'vkb-w1' },
        { normal: '5', shift: '%', opt: '5', shiftOpt: '%', width: 'vkb-w1' },
        { normal: '6', shift: '^', opt: '6', shiftOpt: '^', width: 'vkb-w1' },
        { normal: '7', shift: '&', opt: '7', shiftOpt: '&', width: 'vkb-w1' },
        { normal: '8', shift: '*', opt: '8', shiftOpt: '*', width: 'vkb-w1' },
        { normal: '9', shift: '(', opt: '9', shiftOpt: '(', width: 'vkb-w1' },
        { normal: '0', shift: ')', opt: '0', shiftOpt: ')', width: 'vkb-w1' },
        { normal: '-', shift: '_', opt: '-', shiftOpt: '_', width: 'vkb-w1' },
        { normal: '=', shift: '+', opt: '=', shiftOpt: '+', width: 'vkb-w1' }
      ],
      // Row 2 — top letter row
      [
        { normal: 'q', shift: 'Q', opt: 'q', shiftOpt: 'Q', width: 'vkb-w1' },
        { normal: 'w', shift: 'W', opt: 'w', shiftOpt: 'W', width: 'vkb-w1' },
        { normal: 'e', shift: 'E', opt: '\u20AC', shiftOpt: 'E', width: 'vkb-w1' },
        { normal: 'r', shift: 'R', opt: 'r', shiftOpt: 'R', width: 'vkb-w1' },
        { normal: 't', shift: 'T', opt: 't', shiftOpt: 'T', width: 'vkb-w1' },
        { normal: 'y', shift: 'Y', opt: 'y', shiftOpt: 'Y', width: 'vkb-w1' },
        { normal: 'u', shift: 'U', opt: 'u', shiftOpt: 'U', width: 'vkb-w1' },
        { normal: 'i', shift: 'I', opt: 'i', shiftOpt: 'I', width: 'vkb-w1' },
        { normal: 'o', shift: 'O', opt: 'o', shiftOpt: 'O', width: 'vkb-w1' },
        { normal: 'p', shift: 'P', opt: 'p', shiftOpt: 'P', width: 'vkb-w1' },
        { normal: '[', shift: '{', opt: '[', shiftOpt: '{', width: 'vkb-w1' },
        { normal: ']', shift: '}', opt: ']', shiftOpt: '}', width: 'vkb-w1' },
        { normal: '\\', shift: '|', opt: '\\', shiftOpt: '|', width: 'vkb-w1' },
        { action: 'delete', label: '\u232B', width: 'vkb-w15' }
      ],
      // Row 3 — home row
      [
        { normal: 'a', shift: 'A', opt: 'a', shiftOpt: 'A', width: 'vkb-w1' },
        { normal: 's', shift: 'S', opt: 's', shiftOpt: 'S', width: 'vkb-w1' },
        { normal: 'd', shift: 'D', opt: 'd', shiftOpt: 'D', width: 'vkb-w1' },
        { normal: 'f', shift: 'F', opt: 'f', shiftOpt: 'F', width: 'vkb-w1' },
        { normal: 'g', shift: 'G', opt: 'g', shiftOpt: 'G', width: 'vkb-w1' },
        { normal: 'h', shift: 'H', opt: 'h', shiftOpt: 'H', width: 'vkb-w1' },
        { normal: 'j', shift: 'J', opt: 'j', shiftOpt: 'J', width: 'vkb-w1' },
        { normal: 'k', shift: 'K', opt: 'k', shiftOpt: 'K', width: 'vkb-w1' },
        { normal: 'l', shift: 'L', opt: 'l', shiftOpt: 'L', width: 'vkb-w1' },
        { normal: ';', shift: ':', opt: ';', shiftOpt: ':', width: 'vkb-w1' },
        { normal: "'", shift: '"', opt: "'", shiftOpt: '"', width: 'vkb-w1' },
        { action: 'return', label: '\u21B5', width: 'vkb-w15' }
      ],
      // Row 4 — bottom row
      [
        { action: 'shift', label: '\u21E7 Shift', width: 'vkb-w2' },
        { normal: 'z', shift: 'Z', opt: 'z', shiftOpt: 'Z', width: 'vkb-w1' },
        { normal: 'x', shift: 'X', opt: 'x', shiftOpt: 'X', width: 'vkb-w1' },
        { normal: 'c', shift: 'C', opt: 'c', shiftOpt: 'C', width: 'vkb-w1' },
        { normal: 'v', shift: 'V', opt: 'v', shiftOpt: 'V', width: 'vkb-w1' },
        { normal: 'b', shift: 'B', opt: 'b', shiftOpt: 'B', width: 'vkb-w1' },
        { normal: 'n', shift: 'N', opt: 'n', shiftOpt: 'N', width: 'vkb-w1' },
        { normal: 'm', shift: 'M', opt: 'm', shiftOpt: 'M', width: 'vkb-w1' },
        { normal: ',', shift: '<', opt: ',', shiftOpt: '<', width: 'vkb-w1' },
        { normal: '.', shift: '>', opt: '.', shiftOpt: '>', width: 'vkb-w1' },
        { normal: '/', shift: '?', opt: '/', shiftOpt: '?', width: 'vkb-w1' },
        { action: 'shift', label: '\u21E7', width: 'vkb-w2' }
      ],
      // Row 5 — space
      [
        { action: 'space', label: ' ', width: 'vkb-space' }
      ]
    ]
  },
  win_arabic: {
    rows: [
      // Row 1 — number row
      [
        { normal: '\u0630', shift: '\u0651', opt: '\u0630', shiftOpt: '\u0651', width: 'vkb-w1' },
        { normal: '1', shift: '!', opt: '1', shiftOpt: '!', width: 'vkb-w1' },
        { normal: '2', shift: '@', opt: '2', shiftOpt: '@', width: 'vkb-w1' },
        { normal: '3', shift: '#', opt: '3', shiftOpt: '#', width: 'vkb-w1' },
        { normal: '4', shift: '$', opt: '4', shiftOpt: '$', width: 'vkb-w1' },
        { normal: '5', shift: '%', opt: '5', shiftOpt: '%', width: 'vkb-w1' },
        { normal: '6', shift: '^', opt: '6', shiftOpt: '^', width: 'vkb-w1' },
        { normal: '7', shift: '&', opt: '7', shiftOpt: '&', width: 'vkb-w1' },
        { normal: '8', shift: '*', opt: '8', shiftOpt: '*', width: 'vkb-w1' },
        { normal: '9', shift: ')', opt: '9', shiftOpt: ')', width: 'vkb-w1' },
        { normal: '0', shift: '(', opt: '0', shiftOpt: '(', width: 'vkb-w1' },
        { normal: '-', shift: '_', opt: '-', shiftOpt: '_', width: 'vkb-w1' },
        { normal: '=', shift: '+', opt: '=', shiftOpt: '+', width: 'vkb-w1' }
      ],
      // Row 2 — top letter row
      [
        { normal: '\u0636', shift: '\u0650', opt: '\u0636', shiftOpt: '\u0650', width: 'vkb-w1' },
        { normal: '\u0635', shift: '\u064C', opt: '\u0635', shiftOpt: '\u064C', width: 'vkb-w1' },
        { normal: '\u062B', shift: '\u064F', opt: '\u062B', shiftOpt: '\u064F', width: 'vkb-w1' },
        { normal: '\u0642', shift: '\u064B', opt: '\u0642', shiftOpt: '\u064B', width: 'vkb-w1' },
        { normal: '\u0641', shift: '\u064E', opt: '\u0641', shiftOpt: '\u064E', width: 'vkb-w1' },
        { normal: '\u063A', shift: '\u0651', opt: '\u063A', shiftOpt: '\u0651', width: 'vkb-w1' },
        { normal: '\u0639', shift: '\u0652', opt: '\u0639', shiftOpt: '\u0652', width: 'vkb-w1' },
        { normal: '\u0647', shift: '\u00F7', opt: '\u0647', shiftOpt: '\u00F7', width: 'vkb-w1' },
        { normal: '\u062E', shift: '\u00D7', opt: '\u062E', shiftOpt: '\u00D7', width: 'vkb-w1' },
        { normal: '\u062D', shift: '\u061B', opt: '\u062D', shiftOpt: '\u061B', width: 'vkb-w1' },
        { normal: '\u062C', shift: '<', opt: '\u062C', shiftOpt: '<', width: 'vkb-w1' },
        { normal: '\u062F', shift: '>', opt: '\u062F', shiftOpt: '>', width: 'vkb-w1' },
        { normal: '\\', shift: '|', opt: '\\', shiftOpt: '|', width: 'vkb-w1' },
        { action: 'delete', label: '\u232B', width: 'vkb-w15' }
      ],
      // Row 3 — home row
      [
        { normal: '\u0634', shift: '\u0650', opt: '\u0634', shiftOpt: '\u0650', width: 'vkb-w1' },
        { normal: '\u0633', shift: '\u064C', opt: '\u0633', shiftOpt: '\u064C', width: 'vkb-w1' },
        { normal: '\u064A', shift: '\u064D', opt: '\u064A', shiftOpt: '\u064D', width: 'vkb-w1' },
        { normal: '\u0628', shift: '\u064E', opt: '\u0628', shiftOpt: '\u064E', width: 'vkb-w1' },
        { normal: '\u0644', shift: '\u0644\u0623', opt: '\u0644', shiftOpt: '\u0644\u0623', width: 'vkb-w1' },
        { normal: '\u0627', shift: '\u0623', opt: '\u0627', shiftOpt: '\u0623', width: 'vkb-w1' },
        { normal: '\u062A', shift: '\u0640', opt: '\u062A', shiftOpt: '\u0640', width: 'vkb-w1' },
        { normal: '\u0646', shift: '\u060C', opt: '\u0646', shiftOpt: '\u060C', width: 'vkb-w1' },
        { normal: '\u0645', shift: '/', opt: '\u0645', shiftOpt: '/', width: 'vkb-w1' },
        { normal: '\u0643', shift: ':', opt: '\u0643', shiftOpt: ':', width: 'vkb-w1' },
        { normal: '\u0637', shift: '"', opt: '\u0637', shiftOpt: '"', width: 'vkb-w1' },
        { action: 'return', label: '\u21B5', width: 'vkb-w15' }
      ],
      // Row 4 — bottom row
      [
        { action: 'shift', label: '\u21E7 Shift', width: 'vkb-w2' },
        { normal: '\u0626', shift: '~', opt: '\u0626', shiftOpt: '~', width: 'vkb-w1' },
        { normal: '\u0621', shift: '\u0652', opt: '\u0621', shiftOpt: '\u0652', width: 'vkb-w1' },
        { normal: '\u0624', shift: '{', opt: '\u0624', shiftOpt: '{', width: 'vkb-w1' },
        { normal: '\u0631', shift: '}', opt: '\u0631', shiftOpt: '}', width: 'vkb-w1' },
        { normal: '\u0644\u0627', shift: '\u0644\u0623', opt: '\u0644\u0627', shiftOpt: '\u0644\u0623', width: 'vkb-w1' },
        { normal: '\u0649', shift: '\u0622', opt: '\u0649', shiftOpt: '\u0622', width: 'vkb-w1' },
        { normal: '\u0629', shift: '\u2019', opt: '\u0629', shiftOpt: '\u2019', width: 'vkb-w1' },
        { normal: '\u0648', shift: ',', opt: '\u0648', shiftOpt: ',', width: 'vkb-w1' },
        { normal: '\u0632', shift: '.', opt: '\u0632', shiftOpt: '.', width: 'vkb-w1' },
        { normal: '\u0638', shift: '\u061F', opt: '\u0638', shiftOpt: '\u061F', width: 'vkb-w1' },
        { action: 'shift', label: '\u21E7', width: 'vkb-w2' }
      ],
      // Row 5 — space
      [
        { action: 'space', label: ' ', width: 'vkb-space' }
      ]
    ]
  }
};

let vkbCurrentLayout = 'azerty';
let vkbModifier = 'normal'; // 'normal', 'shift', 'opt', 'shiftOpt'
let vkbOS = 'mac';
const VKB_OS_LAYOUTS = {
  mac: ['azerty', 'qwerty', 'arabic'],
  windows: ['win_azerty_fr', 'win_qwerty', 'win_arabic']
};

let vkbCompareState = 0; // 0=OFF, 1=show QWERTY ghosts on AZERTY, 2=show AZERTY ghosts on QWERTY

function getCompareOtherLayout() {
  if (vkbOS === 'windows') {
    if (vkbCurrentLayout === 'win_azerty_fr') return 'win_qwerty';
    if (vkbCurrentLayout === 'win_qwerty') return 'win_azerty_fr';
  } else {
    if (vkbCurrentLayout === 'azerty') return 'qwerty';
    if (vkbCurrentLayout === 'qwerty') return 'azerty';
  }
  return null;
}

function getDiffFamily(keyA, keyB) {
  const pair = [keyA.toLowerCase(), keyB.toLowerCase()].sort().join('');
  if (pair === 'aq') return 'blue';
  if (pair === 'wz') return 'green';
  if (keyA.toLowerCase() === 'm' || keyB.toLowerCase() === 'm') return 'orange';
  if (/^[a-z]$/.test(keyA) || /^[a-z]$/.test(keyB)) return 'purple';
  if (/^[0-9]$/.test(keyA) || /^[0-9]$/.test(keyB)) return 'pink';
  return 'yellow';
}

function toggleVkbCompare() {
  vkbCompareState = (vkbCompareState + 1) % 3;
  const btn = $('vkbCompareBtn');
  if (btn) {
    const labels = ['\uD83D\uDD00 Compare: OFF', '\uD83D\uDD00 Compare: QWERTY', '\uD83D\uDD00 Compare: AZERTY'];
    btn.textContent = labels[vkbCompareState];
  }
  if (vkbCompareState === 0) {
    buildVirtualKeyboard();
  } else if (vkbCompareState === 1) {
    vkbCurrentLayout = vkbOS === 'windows' ? 'win_azerty_fr' : 'azerty';
    switchVkbLayout(vkbCurrentLayout, true);
  } else {
    vkbCurrentLayout = vkbOS === 'windows' ? 'win_qwerty' : 'qwerty';
    switchVkbLayout(vkbCurrentLayout, true);
  }
}

function updateCompareVisibility() {
  const bar = $('vkbCompareBar');
  if (!bar) return;
  const comparable = ['azerty', 'qwerty', 'win_azerty_fr', 'win_qwerty'];
  bar.style.display = comparable.includes(vkbCurrentLayout) ? '' : 'none';
}

function buildVirtualKeyboard() {
  const kb = $('vkbKeyboard');
  if (!kb) return;
  kb.innerHTML = '';
  const layout = VKB_LAYOUTS[vkbCurrentLayout];
  if (!layout) return;

  const otherLayoutName = vkbCompareState !== 0 ? getCompareOtherLayout() : null;
  const otherLayout = otherLayoutName ? VKB_LAYOUTS[otherLayoutName] : null;

  layout.rows.forEach((row, rowIndex) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'vkb-row';

    row.forEach((key, colIndex) => {
      const btn = document.createElement('button');
      btn.className = 'vkb-key ' + (key.width || 'vkb-w1');

      if (key.action) {
        btn.textContent = key.label;
        btn.dataset.action = key.action;
        if (key.action === 'shift') {
          btn.classList.add('vkb-mod-key');
          if (vkbModifier === 'shift' || vkbModifier === 'shiftOpt') {
            btn.classList.add('vkb-active');
          }
        }
        btn.addEventListener('click', () => {
          playSound('click');
          handleVkbAction(key.action);
        });
      } else {
        const label = key[vkbModifier] || key.normal;
        btn.textContent = label;
        btn.dataset.normal = key.normal;
        btn.dataset.shift = key.shift || '';
        btn.dataset.opt = key.opt || '';
        btn.dataset.shiftOpt = key.shiftOpt || '';

        // Compare mode: add ghost label from the other layout
        if (otherLayout) {
          const otherRow = otherLayout.rows[rowIndex];
          if (otherRow && otherRow[colIndex] && !otherRow[colIndex].action) {
            const otherLabel = otherRow[colIndex].normal;
            if (otherLabel !== key.normal) {
              const ghost = document.createElement('span');
              ghost.className = 'vkb-ghost';
              ghost.textContent = otherLabel;
              btn.appendChild(ghost);
              btn.classList.add('vkb-diff');
              const family = getDiffFamily(key.normal, otherLabel);
              btn.classList.add('vkb-diff-' + family);
            }
          }
        }

        btn.addEventListener('click', () => {
          playSound('click');
          const char = key[vkbModifier] || key.normal;
          const ta = $('vkbTextarea');
          if (ta) {
            const start = ta.selectionStart;
            const end = ta.selectionEnd;
            ta.value = ta.value.substring(0, start) + char + ta.value.substring(end);
            ta.selectionStart = ta.selectionEnd = start + char.length;
            ta.focus();
          }
          // Reset modifier after typing (like real keyboard)
          vkbModifier = 'normal';
          updateVkbKeyLabels();
          updateVkbModButtons();
        });
      }

      rowDiv.appendChild(btn);
    });

    kb.appendChild(rowDiv);
  });
}

function handleVkbAction(action) {
  const ta = $('vkbTextarea');
  if (!ta) return;

  switch (action) {
    case 'delete': {
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      if (start !== end) {
        ta.value = ta.value.substring(0, start) + ta.value.substring(end);
        ta.selectionStart = ta.selectionEnd = start;
      } else if (start > 0) {
        ta.value = ta.value.substring(0, start - 1) + ta.value.substring(start);
        ta.selectionStart = ta.selectionEnd = start - 1;
      }
      ta.focus();
      break;
    }
    case 'return':
      insertVkbChar('\n');
      break;
    case 'tab':
      insertVkbChar('\t');
      break;
    case 'space':
      insertVkbChar(' ');
      break;
    case 'shift':
      if (vkbModifier === 'shift') {
        vkbModifier = 'normal';
      } else if (vkbModifier === 'opt') {
        vkbModifier = 'shiftOpt';
      } else if (vkbModifier === 'shiftOpt') {
        vkbModifier = 'opt';
      } else {
        vkbModifier = 'shift';
      }
      updateVkbKeyLabels();
      updateVkbModButtons();
      return; // Don't reset modifier for shift key
  }
}

function insertVkbChar(char) {
  const ta = $('vkbTextarea');
  if (!ta) return;
  const start = ta.selectionStart;
  const end = ta.selectionEnd;
  ta.value = ta.value.substring(0, start) + char + ta.value.substring(end);
  ta.selectionStart = ta.selectionEnd = start + char.length;
  ta.focus();
  // Reset modifier after typing
  vkbModifier = 'normal';
  updateVkbKeyLabels();
  updateVkbModButtons();
}

function switchVkbLayout(layout, fromCompare) {
  vkbCurrentLayout = layout;
  // Reset compare state when user manually switches layout tabs
  if (!fromCompare) {
    vkbCompareState = 0;
    const compareBtn = $('vkbCompareBtn');
    if (compareBtn) compareBtn.textContent = '\uD83D\uDD00 Compare: OFF';
  }
  // Update tab active states (only for current OS)
  document.querySelectorAll('.vkb-tab').forEach(tab => {
    if (tab.dataset.os === vkbOS) {
      tab.classList.toggle('active', tab.dataset.layout === layout);
    }
  });
  buildVirtualKeyboard();
  updateCompareVisibility();
  // Set text direction
  const ta = $('vkbTextarea');
  if (ta) {
    ta.dir = (layout === 'arabic' || layout === 'win_arabic') ? 'rtl' : 'ltr';
  }
}

function switchVkbOS(os) {
  vkbOS = os;
  // Reset compare state on OS switch
  vkbCompareState = 0;
  const compareBtn = $('vkbCompareBtn');
  if (compareBtn) compareBtn.textContent = '\uD83D\uDD00 Compare: OFF';
  // Update OS tab active states
  document.querySelectorAll('.vkb-os-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.os === os);
  });
  // Show/hide sub-tabs
  document.querySelectorAll('.vkb-tab').forEach(tab => {
    tab.style.display = tab.dataset.os === os ? '' : 'none';
  });
  // Update modifier labels
  updateVkbModLabels();
  // Switch to first layout of this OS
  const firstLayout = VKB_OS_LAYOUTS[os][0];
  switchVkbLayout(firstLayout);
  updateCompareVisibility();
}

function updateVkbModLabels() {
  const mods = document.querySelectorAll('.vkb-mod');
  if (vkbOS === 'windows') {
    mods.forEach(btn => {
      if (btn.dataset.mod === 'shift') btn.innerHTML = '\u21E7 Shift';
      else if (btn.dataset.mod === 'opt') btn.innerHTML = 'AltGr';
      else if (btn.dataset.mod === 'shiftOpt') btn.innerHTML = '\u21E7 Shift+AltGr';
    });
  } else {
    mods.forEach(btn => {
      if (btn.dataset.mod === 'shift') btn.innerHTML = '\u21E7 Shift';
      else if (btn.dataset.mod === 'opt') btn.innerHTML = '\u2325 Option';
      else if (btn.dataset.mod === 'shiftOpt') btn.innerHTML = '\u21E7\u2325 Shift+Option';
    });
  }
}

function setVkbModifier(mod) {
  // Toggle: if same modifier clicked again, go back to normal
  if (vkbModifier === mod) {
    vkbModifier = 'normal';
  } else {
    vkbModifier = mod;
  }
  updateVkbModButtons();
  updateVkbKeyLabels();
}

function updateVkbModButtons() {
  document.querySelectorAll('.vkb-mod').forEach(btn => {
    const mod = btn.dataset.mod;
    btn.classList.toggle('vkb-active', vkbModifier === mod);
  });
  // Also update shift keys in the keyboard
  document.querySelectorAll('.vkb-key[data-action="shift"]').forEach(btn => {
    btn.classList.toggle('vkb-active', vkbModifier === 'shift' || vkbModifier === 'shiftOpt');
  });
}

function updateVkbKeyLabels() {
  const kb = $('vkbKeyboard');
  if (!kb) return;
  kb.querySelectorAll('.vkb-key').forEach(btn => {
    if (btn.dataset.action) return; // Skip action keys
    const label = btn.dataset[vkbModifier] || btn.dataset.normal;
    if (label !== undefined && label !== '') {
      btn.textContent = label;
    }
  });
}

function copyVkbText() {
  const ta = $('vkbTextarea');
  if (!ta || !ta.value) return;
  navigator.clipboard.writeText(ta.value).then(() => {
    playSound('success');
    const s = LANG[currentLang];
    showToast(s.copied || 'Copied!');
    log(s.copied || 'Copied!', 'success');
  }).catch(() => {
    playSound('error');
    const s = LANG[currentLang];
    showToast(s.copyFail || 'Copy failed');
  });
}

function clearVkbText() {
  const ta = $('vkbTextarea');
  if (ta) {
    ta.value = '';
    ta.focus();
  }
  playSound('click');
}

/* ═══════ FINGER GUIDE / LEARN TO TYPE ═══════ */

const FINGER_ZONE_MAP = {
  0: { 0:'leftPinky', 1:'leftPinky', 2:'leftRing', 3:'leftMiddle', 4:'leftIndex', 5:'leftIndex', 6:'rightIndex', 7:'rightIndex', 8:'rightMiddle', 9:'rightRing', 10:'rightPinky', 11:'rightPinky', 12:'rightPinky' },
  1: { 0:'leftPinky', 1:'leftRing', 2:'leftMiddle', 3:'leftIndex', 4:'leftIndex', 5:'rightIndex', 6:'rightIndex', 7:'rightMiddle', 8:'rightRing', 9:'rightPinky', 10:'rightPinky', 11:'rightPinky', 12:'rightPinky', 13:'rightPinky' },
  2: { 0:'leftPinky', 1:'leftRing', 2:'leftMiddle', 3:'leftIndex', 4:'leftIndex', 5:'rightIndex', 6:'rightIndex', 7:'rightMiddle', 8:'rightRing', 9:'rightPinky', 10:'rightPinky', 11:'rightPinky', 12:'rightPinky' },
  3: { 0:'leftPinky', 1:'leftPinky', 2:'leftRing', 3:'leftMiddle', 4:'leftIndex', 5:'leftIndex', 6:'rightIndex', 7:'rightIndex', 8:'rightMiddle', 9:'rightRing', 10:'rightPinky', 11:'rightPinky' },
  4: { 0:'thumbs' }
};

const FINGER_COLORS = {
  leftPinky: '#ef4444',
  leftRing: '#a855f7',
  leftMiddle: '#3b82f6',
  leftIndex: '#22c55e',
  rightIndex: '#22c55e',
  rightMiddle: '#3b82f6',
  rightRing: '#a855f7',
  rightPinky: '#ef4444',
  thumbs: '#eab308'
};

const FINGER_NAMES = {
  en: { leftPinky: 'Left Pinky', leftRing: 'Left Ring', leftMiddle: 'Left Middle', leftIndex: 'Left Index', rightIndex: 'Right Index', rightMiddle: 'Right Middle', rightRing: 'Right Ring', rightPinky: 'Right Pinky', thumbs: 'Thumbs' },
  fr: { leftPinky: 'Auriculaire G', leftRing: 'Annulaire G', leftMiddle: 'Majeur G', leftIndex: 'Index G', rightIndex: 'Index D', rightMiddle: 'Majeur D', rightRing: 'Annulaire D', rightPinky: 'Auriculaire D', thumbs: 'Pouces' },
  ar: { leftPinky: 'خنصر يسار', leftRing: 'بنصر يسار', leftMiddle: 'وسطى يسار', leftIndex: 'سبابة يسار', rightIndex: 'سبابة يمين', rightMiddle: 'وسطى يمين', rightRing: 'بنصر يمين', rightPinky: 'خنصر يمين', thumbs: 'إبهام' }
};

let fingerLayout = 'qwerty';
let fingerTab = 'zones';
let practiceState = { level: 'home', correct: 0, errors: 0, streak: 0, targetKey: null, targetRow: -1, targetCol: -1 };

const PRACTICE_ROWS = {
  home: [2],
  top: [1],
  bottom: [3],
  all: [1, 2, 3]
};

function buildFingerKeyboard(containerId, layout, mode) {
  const container = $(containerId);
  if (!container) return;
  container.innerHTML = '';
  const layoutData = VKB_LAYOUTS[layout];
  if (!layoutData) return;

  layoutData.rows.forEach((row, ri) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'finger-row';

    row.forEach((key, ci) => {
      const btn = document.createElement('button');
      btn.className = 'finger-key';

      if (key.action) {
        btn.textContent = key.label;
        btn.classList.add('finger-action-key');
        if (key.action === 'space') btn.classList.add('finger-space');
        else if (key.width === 'vkb-w15') btn.classList.add('finger-w15');
        else if (key.width === 'vkb-w2') btn.classList.add('finger-w2');
      } else {
        btn.textContent = key.normal;
        btn.dataset.row = ri;
        btn.dataset.col = ci;
        btn.dataset.key = key.normal;

        if (key.width === 'vkb-w15') btn.classList.add('finger-w15');
        else if (key.width === 'vkb-w2') btn.classList.add('finger-w2');
      }

      const zone = FINGER_ZONE_MAP[ri] && FINGER_ZONE_MAP[ri][ci];
      if (zone) {
        const color = FINGER_COLORS[zone];
        btn.style.borderColor = color;
        btn.style.background = color + '33';
        btn.dataset.zone = zone;
      }

      if (ri === 2 && (ci === 3 || ci === 5)) {
        btn.classList.add('finger-home-bump');
      }

      if (mode === 'finder') {
        btn.addEventListener('click', () => handleFingerFinderClick(ri, ci, key, btn, containerId));
      }

      rowDiv.appendChild(btn);
    });

    container.appendChild(rowDiv);
  });
}

function buildFingerLegend() {
  const legend = $('fingerLegend');
  if (!legend) return;
  legend.innerHTML = '';
  const names = FINGER_NAMES[currentLang] || FINGER_NAMES.en;
  const zones = ['leftPinky','leftRing','leftMiddle','leftIndex','rightIndex','rightMiddle','rightRing','rightPinky','thumbs'];
  zones.forEach(zone => {
    const item = document.createElement('span');
    item.className = 'finger-legend-item';
    const swatch = document.createElement('span');
    swatch.className = 'finger-legend-swatch';
    swatch.style.background = FINGER_COLORS[zone];
    item.appendChild(swatch);
    const label = document.createElement('span');
    label.textContent = names[zone];
    item.appendChild(label);
    legend.appendChild(item);
  });
}

function handleFingerFinderClick(row, col, key, btn, containerId) {
  const zone = FINGER_ZONE_MAP[row] && FINGER_ZONE_MAP[row][col];
  if (!zone) return;

  const container = $(containerId);
  container.querySelectorAll('.finger-key').forEach(k => k.classList.remove('finger-highlighted'));

  container.querySelectorAll(`.finger-key[data-zone="${zone}"]`).forEach(k => {
    k.classList.add('finger-highlighted');
  });

  const result = $('fingerFinderResult');
  const names = FINGER_NAMES[currentLang] || FINGER_NAMES.en;
  if (result) {
    const color = FINGER_COLORS[zone];
    result.innerHTML = `<span style="color:${color};font-weight:700;font-size:1.3rem">👆 ${names[zone]}</span>`;
    result.style.display = '';
  }

  playSound('click');
}

function switchFingerTab(tab) {
  fingerTab = tab;
  document.querySelectorAll('.finger-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.ftab === tab);
  });
  $('fingerZonesContent').style.display = tab === 'zones' ? '' : 'none';
  $('fingerFinderContent').style.display = tab === 'finder' ? '' : 'none';
  $('fingerPracticeContent').style.display = tab === 'practice' ? '' : 'none';

  if (tab === 'practice') {
    buildFingerKeyboard('practiceKeyboard', fingerLayout, 'practice');
    generatePracticeTarget();
  }
}

function switchFingerLayout(layout) {
  fingerLayout = layout;
  document.querySelectorAll('.finger-layout-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.flayout === layout);
  });
  buildFingerKeyboard('fingerZonesKeyboard', layout, 'zones');
  buildFingerKeyboard('fingerFinderKeyboard', layout, 'finder');
  if (fingerTab === 'practice') {
    buildFingerKeyboard('practiceKeyboard', layout, 'practice');
    generatePracticeTarget();
  }
  buildFingerLegend();
  const result = $('fingerFinderResult');
  if (result) { result.innerHTML = ''; result.style.display = 'none'; }
}

function generatePracticeTarget() {
  const layoutData = VKB_LAYOUTS[fingerLayout];
  if (!layoutData) return;

  const rows = PRACTICE_ROWS[practiceState.level] || [1,2,3];
  const candidates = [];
  rows.forEach(ri => {
    const row = layoutData.rows[ri];
    if (!row) return;
    row.forEach((key, ci) => {
      if (!key.action) {
        candidates.push({ key: key.normal, row: ri, col: ci });
      }
    });
  });

  if (candidates.length === 0) return;
  const pick = candidates[Math.floor(Math.random() * candidates.length)];
  practiceState.targetKey = pick.key;
  practiceState.targetRow = pick.row;
  practiceState.targetCol = pick.col;

  const target = $('practiceTarget');
  if (target) target.textContent = pick.key.toUpperCase();

  const zone = FINGER_ZONE_MAP[pick.row] && FINGER_ZONE_MAP[pick.row][pick.col];
  const hint = $('practiceFingerHint');
  const names = FINGER_NAMES[currentLang] || FINGER_NAMES.en;
  if (hint && zone) {
    hint.textContent = names[zone];
    hint.style.color = FINGER_COLORS[zone];
  }

  const kb = $('practiceKeyboard');
  if (kb) {
    kb.querySelectorAll('.finger-key').forEach(k => k.classList.remove('practice-target-key'));
    const targetBtn = kb.querySelector(`.finger-key[data-row="${pick.row}"][data-col="${pick.col}"]`);
    if (targetBtn) targetBtn.classList.add('practice-target-key');
  }
}

function handlePracticeKeydown(e) {
  if (fingerTab !== 'practice') return;
  const section = $('fingerGuideSection');
  if (!section || !section.open) return;

  e.preventDefault();
  const typed = e.key.toLowerCase();
  const target = practiceState.targetKey?.toLowerCase();

  if (!target) return;

  if (typed === target) {
    practiceState.correct++;
    practiceState.streak++;
    playSound('success');

    const kb = $('practiceKeyboard');
    const targetBtn = kb?.querySelector(`.finger-key[data-row="${practiceState.targetRow}"][data-col="${practiceState.targetCol}"]`);
    if (targetBtn) {
      targetBtn.classList.add('practice-correct');
      setTimeout(() => targetBtn.classList.remove('practice-correct'), 400);
    }

    setTimeout(generatePracticeTarget, 300);
  } else {
    practiceState.errors++;
    practiceState.streak = 0;
    playSound('error');

    const tgt = $('practiceTarget');
    if (tgt) {
      tgt.classList.add('practice-wrong');
      setTimeout(() => tgt.classList.remove('practice-wrong'), 400);
    }
  }

  updatePracticeStats();
}

function updatePracticeStats() {
  const c = $('practiceCorrect');
  const e = $('practiceErrors');
  const s = $('practiceStreak');
  if (c) c.textContent = practiceState.correct;
  if (e) e.textContent = practiceState.errors;
  if (s) s.textContent = practiceState.streak;
}

function switchPracticeLevel(level) {
  practiceState.level = level;
  practiceState.correct = 0;
  practiceState.errors = 0;
  practiceState.streak = 0;
  updatePracticeStats();
  document.querySelectorAll('.practice-level').forEach(b => {
    b.classList.toggle('active', b.dataset.level === level);
  });
  generatePracticeTarget();
}

/* ═══════ KEYBOARD DETECTIVE GAME ═══════ */

const DETECTIVE_FACTS = [
  { en: 'A and Q swapped places between France and America!', fr: 'A et Q ont échangé leurs places entre la France et l\'Amérique !', ar: 'A و Q تبادلا مكانيهما بين فرنسا وأمريكا!' },
  { en: 'Z and W traded houses across the Atlantic!', fr: 'Z et W ont échangé leurs maisons de part et d\'autre de l\'Atlantique !', ar: 'Z و W تبادلا منزليهما عبر الأطلسي!' },
  { en: 'M moved up from the bottom row to the home row!', fr: 'M est monté de la rangée du bas à la rangée d\'accueil !', ar: 'M انتقل من الصف السفلي إلى صف الارتكاز!' },
  // Generic messages for other diffs
  { en: 'These keys are in different spots!', fr: 'Ces touches sont à des endroits différents !', ar: 'هذه المفاتيح في أماكن مختلفة!' },
];

let detectiveState = { found: new Set(), streak: 0, totalDiffs: 0 };

function buildDetectiveBoards() {
  // Compute diffs between azerty and qwerty
  const azertyLayout = VKB_LAYOUTS.azerty;
  const qwertyLayout = VKB_LAYOUTS.qwerty;

  // Find all positions where normal key differs
  const diffs = [];
  azertyLayout.rows.forEach((row, ri) => {
    row.forEach((key, ci) => {
      if (key.action) return;
      const otherRow = qwertyLayout.rows[ri];
      if (!otherRow || !otherRow[ci]) return;
      const otherKey = otherRow[ci];
      if (otherKey.action) return;
      if (key.normal !== otherKey.normal) {
        diffs.push({ row: ri, col: ci });
      }
    });
  });

  detectiveState.totalDiffs = diffs.length;
  detectiveState.found = new Set();
  detectiveState.streak = 0;

  // Build each board
  ['detectiveAzerty', 'detectiveQwerty'].forEach(id => {
    const container = $(id);
    if (!container) return;
    container.innerHTML = '';
    const layoutName = id === 'detectiveAzerty' ? 'azerty' : 'qwerty';
    const layout = VKB_LAYOUTS[layoutName];

    layout.rows.forEach((row, ri) => {
      const rowDiv = document.createElement('div');
      rowDiv.className = 'detective-row';

      row.forEach((key, ci) => {
        const btn = document.createElement('button');
        btn.className = 'detective-key';
        if (key.action) {
          btn.textContent = key.label;
          btn.classList.add('detective-action');
        } else {
          btn.textContent = key.normal;
          btn.dataset.row = ri;
          btn.dataset.col = ci;
          btn.addEventListener('click', () => handleDetectiveClick(ri, ci, btn, diffs));
        }
        // Apply width classes similar to vkb but smaller
        if (key.width === 'vkb-w15') btn.classList.add('detective-w15');
        else if (key.width === 'vkb-w2') btn.classList.add('detective-w2');
        else if (key.width === 'vkb-space') btn.classList.add('detective-space');

        rowDiv.appendChild(btn);
      });

      container.appendChild(rowDiv);
    });
  });

  updateDetectiveScore();
}

function handleDetectiveClick(row, col, btn, diffs) {
  const diffKey = `${row}-${col}`;

  // Already found this one
  if (detectiveState.found.has(diffKey)) return;

  // Check if this position is a diff
  const isDiff = diffs.some(d => d.row === row && d.col === col);

  if (isDiff) {
    detectiveState.found.add(diffKey);
    detectiveState.streak++;
    playSound('success');

    // Highlight this key on BOTH boards
    document.querySelectorAll(`.detective-key[data-row="${row}"][data-col="${col}"]`).forEach(k => {
      k.classList.add('detective-correct');
    });

    // Show fun fact
    const factIdx = Math.min(detectiveState.found.size - 1, DETECTIVE_FACTS.length - 1);
    const fact = DETECTIVE_FACTS[factIdx];
    const msg = $('detectiveMessage');
    if (msg) {
      msg.textContent = fact[currentLang] || fact.en;
      msg.style.display = '';
    }

    // Check win condition
    if (detectiveState.found.size >= detectiveState.totalDiffs) {
      const winMsg = $('detectiveMessage');
      if (winMsg) winMsg.textContent = '🎉 ' + (LANG[currentLang].detectiveWin || 'You found all differences! Amazing detective!');
    }
  } else {
    detectiveState.streak = 0;
    playSound('error');
    btn.classList.add('detective-wrong');
    setTimeout(() => btn.classList.remove('detective-wrong'), 400);
  }

  updateDetectiveScore();
}

function updateDetectiveScore() {
  const found = $('detectiveFound');
  const total = $('detectiveTotal');
  const streak = $('detectiveStreak');
  if (found) found.textContent = detectiveState.found.size;
  if (total) total.textContent = detectiveState.totalDiffs;
  if (streak) streak.textContent = detectiveState.streak;
}

function resetDetectiveGame() {
  buildDetectiveBoards();
  const msg = $('detectiveMessage');
  if (msg) { msg.textContent = ''; msg.style.display = 'none'; }
}

// ═══════ WRONG KEYBOARD SIMULATOR ═══════

// Build lookup maps for each layout: char → [row,col] and [row,col] → char
function buildLayoutMaps() {
  const maps = {};
  ['azerty', 'qwerty'].forEach(name => {
    const layout = VKB_LAYOUTS[name];
    if (!layout) return;
    const charToPos = {};
    const posToChar = {};
    layout.rows.forEach((row, ri) => {
      row.forEach((key, ci) => {
        if (key.action) return;
        const ch = key.normal;
        charToPos[ch] = [ri, ci];
        charToPos[ch.toUpperCase()] = [ri, ci]; // uppercase maps to same position
        posToChar[`${ri}-${ci}`] = { normal: ch, shift: key.shift || ch.toUpperCase() };
      });
    });
    maps[name] = { charToPos, posToChar };
  });
  return maps;
}

const WKB_MAPS = buildLayoutMaps();

function translateLayout(text, fromLayout, toLayout) {
  const fromMap = WKB_MAPS[fromLayout];
  const toMap = WKB_MAPS[toLayout];
  if (!fromMap || !toMap) return text;

  let result = '';
  for (const ch of text) {
    const isUpper = ch === ch.toUpperCase() && ch !== ch.toLowerCase();
    const pos = fromMap.charToPos[ch.toLowerCase()];
    if (pos) {
      const posKey = `${pos[0]}-${pos[1]}`;
      const target = toMap.posToChar[posKey];
      if (target) {
        result += isUpper ? (target.shift || target.normal.toUpperCase()) : target.normal;
      } else {
        result += ch;
      }
    } else {
      result += ch;
    }
  }
  return result;
}

function updateWkbSimulation() {
  const input = $('wkbInput');
  const results = $('wkbResults');
  if (!input || !results) return;

  const text = input.value;
  const source = $('wkbSourceSelect')?.value || 'qwerty';
  results.innerHTML = '';

  if (!text) return;

  const targets = ['azerty', 'qwerty'].filter(l => l !== source);

  targets.forEach(target => {
    const translated = translateLayout(text, source, target);
    if (translated !== text) {
      const row = document.createElement('div');
      row.className = 'wkb-result-row';

      const label = document.createElement('span');
      label.className = 'wkb-result-label';
      label.textContent = target.toUpperCase() + ':';
      row.appendChild(label);

      const value = document.createElement('span');
      value.className = 'wkb-result-value';
      value.textContent = translated;
      row.appendChild(value);

      const copyBtn = document.createElement('button');
      copyBtn.className = 'btn-sm wkb-copy-btn';
      copyBtn.textContent = '📋';
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(translated).then(() => {
          playSound('success');
          copyBtn.textContent = '✅';
          setTimeout(() => copyBtn.textContent = '📋', 1000);
        });
      });
      row.appendChild(copyBtn);

      results.appendChild(row);
    }
  });

  if (results.children.length === 0 && text) {
    results.innerHTML = '<div class="wkb-same">Same on all layouts! These keys don\'t change.</div>';
  }
}

function decodeWkbGibberish() {
  const input = $('wkbDecodeInput');
  const results = $('wkbDecodeResults');
  if (!input || !results) return;

  const text = input.value;
  if (!text) return;
  results.innerHTML = '';

  const layouts = ['azerty', 'qwerty'];
  const possibilities = [];

  layouts.forEach(from => {
    layouts.forEach(to => {
      if (from === to) return;
      const decoded = translateLayout(text, from, to);
      if (decoded !== text) {
        possibilities.push({
          from: from.toUpperCase(),
          to: to.toUpperCase(),
          text: decoded
        });
      }
    });
  });

  if (possibilities.length === 0) {
    results.innerHTML = '<div class="wkb-same">Could not decode — text may not be from a wrong keyboard layout.</div>';
    return;
  }

  const heading = document.createElement('div');
  heading.className = 'wkb-decode-heading';
  heading.textContent = LANG[currentLang]?.decodeResults || 'Possible corrections:';
  results.appendChild(heading);

  possibilities.forEach(p => {
    const row = document.createElement('div');
    row.className = 'wkb-result-row';

    const label = document.createElement('span');
    label.className = 'wkb-result-label';
    label.textContent = `${p.from} → ${p.to}:`;
    row.appendChild(label);

    const value = document.createElement('span');
    value.className = 'wkb-result-value';
    value.textContent = p.text;
    row.appendChild(value);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn-sm wkb-copy-btn';
    copyBtn.textContent = '📋';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(p.text).then(() => {
        playSound('success');
        copyBtn.textContent = '✅';
        setTimeout(() => copyBtn.textContent = '📋', 1000);
      });
    });
    row.appendChild(copyBtn);

    results.appendChild(row);
  });
}

function switchWkbMode(mode) {
  document.querySelectorAll('.wkb-mode').forEach(b => {
    b.classList.toggle('active', b.dataset.wmode === mode);
  });
  $('wkbSimulateContent').style.display = mode === 'simulate' ? '' : 'none';
  $('wkbDecodeContent').style.display = mode === 'decode' ? '' : 'none';
}

function init() {
  // Splash
  initSplash();

  // Inject logo
  const lw = $('logoWrap');
  if (lw) lw.innerHTML = LOGO_SVG;

  // Log buttons
  const cb = $('clearLogBtn'), cpb = $('copyLogBtn'), exb = $('exportLogBtn');
  if (cb) cb.onclick = clearLog;
  if (cpb) cpb.onclick = copyLog;
  if (exb) exb.onclick = exportLog;
  initLogFilters();

  // Help panel (left)
  const hBtn = $('helpBtn'), hClose = $('helpCloseBtn'), hOv = $('helpOverlay');
  if (hBtn) hBtn.onclick = openHelp;
  if (hClose) hClose.onclick = closeHelp;
  if (hOv) hOv.onclick = closeHelp;
  initHelpTabs();

  // Settings panel (right)
  const sBtn = $('settingsBtn'), sClose = $('settingsCloseBtn'), sOv = $('settingsOverlay');
  if (sBtn) sBtn.onclick = openSettings;
  if (sClose) sClose.onclick = closeSettings;
  if (sOv) sOv.onclick = closeSettings;

  // Log panel (right, docked)
  const lBtn = $('logBtn'), lClose = $('logCloseBtn');
  if (lBtn) lBtn.onclick = toggleLog;
  if (lClose) lClose.onclick = closeLog;
  initLogResize();

  // Sound toggle
  const soundTgl = $('soundToggle');
  if (soundTgl) {
    try { soundEnabled = localStorage.getItem('wdiy-sound') === 'true'; } catch {}
    soundTgl.checked = soundEnabled;
    soundTgl.addEventListener('change', () => {
      soundEnabled = soundTgl.checked;
      try { localStorage.setItem('wdiy-sound', soundEnabled); } catch {}
      if (soundEnabled) playSound('click');
    });
  }

  // Whisper mode
  const whisperBtn = $('whisperBtn');
  if (whisperBtn) whisperBtn.onclick = toggleWhisper;

  // Breathing guide + dhikr
  const breathBtn = $('breathingBtn');
  const dhikrDisp = $('dhikrDisplay');
  const dhikrBtn = $('dhikrBtn');
  if (breathBtn) breathBtn.onclick = () => {
    toggleBreathing();
    if (dhikrDisp) dhikrDisp.style.display = breathingActive ? 'flex' : 'none';
  };
  if (dhikrBtn) dhikrBtn.onclick = incrementDhikr;

  // Music mode
  const musicBtn = $('musicBtn');
  if (musicBtn) musicBtn.onclick = toggleMusicMode;

  // Escape key + focus trap
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllPanels();
    if (e.key === 'Tab') trapFocus(e);
  });

  // Language dropdown
  const langSel = $('langSelect');
  if (langSel) langSel.addEventListener('change', () => setLanguage(langSel.value));

  // Theme dropdown
  const themeSel = $('themeSelect');
  if (themeSel) themeSel.addEventListener('change', () => setTheme(themeSel.value));

  // Feature 10: Auto-detect layout and language before anything else
  const detectedLayout = detectLayout();
  currentLayout = detectedLayout;

  // Restore saved preferences
  try {
    const savedLang = localStorage.getItem('wdiy-lang');
    const savedTheme = localStorage.getItem('wdiy-theme');
    if (savedTheme) setTheme(savedTheme);
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      // Auto-set language based on navigator.language
      const navLang = (navigator.language || 'en').toLowerCase();
      if (navLang.startsWith('fr')) setLanguage('fr');
      else if (navLang.startsWith('ar')) setLanguage('ar');
      else setLanguage('en');
    }
  } catch {}

  // Feature 7: Load favorites from localStorage
  loadFavorites();

  // Version check
  checkVersion();

  // App messaging listener
  onAppMessage(msg => {
    log(`📨 ${msg.from}: ${msg.type}`, 'rx');
  });

  // Geeky features
  initKonami();
  initMorseLog();
  initMatrixTrigger();
  initDebug();
  initShakeReport();
  initTimeTravel();
  initHijriDate();

  // Magic features
  initGhostUsers();
  initPixelPet();
  initNightMode();
  initLogoTracker();
  initAR();
  initAIChat();

  // Symbol grid & category tabs (v1.1)
  buildCategoryTabs();
  buildSymbolGrid();

  // Symbol info card close button (v1.2)
  const closeInfoBtn = $('closeInfoBtn');
  if (closeInfoBtn) closeInfoBtn.onclick = hideSymbolInfo;

  // Interactive Keyboard (v1.3)
  buildKeyboard();
  document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.addEventListener('click', () => toggleLayout(btn.dataset.layout));
  });
  const xrayBtn = $('xrayBtn');
  if (xrayBtn) xrayBtn.addEventListener('click', toggleXray);

  // Mac Special Keys & Secrets (v1.4)
  buildSpecialKeys();
  buildSecrets();

  // Challenge Mode & Cheat Sheet (v1.5)
  generateQuiz();
  const nextQuizBtn = $('nextQuizBtn');
  if (nextQuizBtn) nextQuizBtn.addEventListener('click', generateQuiz);
  buildCheatSheet();
  const copyCheatBtn = $('copyCheatBtn');
  if (copyCheatBtn) copyCheatBtn.addEventListener('click', copyCheatSheet);

  // Quick Bar, Recent Bar, Search Bar, Key Listener (v1.6)
  try {
    const savedRecent = localStorage.getItem('mwk-recent');
    if (savedRecent) recentlyCopied = JSON.parse(savedRecent);
  } catch {}
  buildQuickBar();
  buildRecentBar();
  buildFavoritesBar();
  buildSearchBar();
  initKeyListener();

  // Features v2.0
  buildMultiBar();
  showSymbolOfTheDay();

  // Virtual Keyboard (v2.2)
  switchVkbOS('mac');
  document.querySelectorAll('.vkb-os-tab').forEach(tab => {
    tab.addEventListener('click', () => switchVkbOS(tab.dataset.os));
  });
  document.querySelectorAll('.vkb-tab').forEach(tab => {
    tab.addEventListener('click', () => switchVkbLayout(tab.dataset.layout));
  });
  document.querySelectorAll('.vkb-mod').forEach(btn => {
    btn.addEventListener('click', () => setVkbModifier(btn.dataset.mod));
  });
  const vkbCopyBtn = $('vkbCopyBtn');
  if (vkbCopyBtn) vkbCopyBtn.addEventListener('click', copyVkbText);
  const vkbClearBtn = $('vkbClearBtn');
  if (vkbClearBtn) vkbClearBtn.addEventListener('click', clearVkbText);
  const vkbCompareBtn = $('vkbCompareBtn');
  if (vkbCompareBtn) vkbCompareBtn.addEventListener('click', toggleVkbCompare);
  updateCompareVisibility();

  // Keyboard Detective
  buildDetectiveBoards();
  const detectiveResetBtn = $('detectiveResetBtn');
  if (detectiveResetBtn) detectiveResetBtn.addEventListener('click', resetDetectiveGame);

  // Learn to Type / Finger Guide
  buildFingerKeyboard('fingerZonesKeyboard', fingerLayout, 'zones');
  buildFingerKeyboard('fingerFinderKeyboard', fingerLayout, 'finder');
  buildFingerLegend();
  document.querySelectorAll('.finger-tab').forEach(tab => {
    tab.addEventListener('click', () => switchFingerTab(tab.dataset.ftab));
  });
  document.querySelectorAll('.finger-layout-btn').forEach(btn => {
    btn.addEventListener('click', () => switchFingerLayout(btn.dataset.flayout));
  });
  document.querySelectorAll('.practice-level').forEach(btn => {
    btn.addEventListener('click', () => switchPracticeLevel(btn.dataset.level));
  });
  document.addEventListener('keydown', handlePracticeKeydown);

  // Wrong Keyboard Simulator
  const wkbInput = $('wkbInput');
  if (wkbInput) wkbInput.addEventListener('input', updateWkbSimulation);
  const wkbSourceSelect = $('wkbSourceSelect');
  if (wkbSourceSelect) wkbSourceSelect.addEventListener('change', updateWkbSimulation);
  const wkbDecodeBtn = $('wkbDecodeBtn');
  if (wkbDecodeBtn) wkbDecodeBtn.addEventListener('click', decodeWkbGibberish);
  document.querySelectorAll('.wkb-mode').forEach(btn => {
    btn.addEventListener('click', () => switchWkbMode(btn.dataset.wmode));
  });

  log(LANG[currentLang].ready, 'success');
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', init)
  : init();
