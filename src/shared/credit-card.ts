let defaultFormat = /(\d{1,4})/g;
let cards = [
  {
    type: 'maestro',
    patterns: [5018, 502, 503, 56, 58, 639, 6220, 67],
    format: defaultFormat,
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    cvvLength: [3],
    luhn: true
  }, {
    type: 'forbrugsforeningen',
    patterns: [600],
    format: defaultFormat,
    length: [16],
    cvvLength: [3],
    luhn: true
  }, {
    type: 'dankort',
    patterns: [5019],
    format: defaultFormat,
    length: [16],
    cvvLength: [3],
    luhn: true
  }, {
    type: 'visa',
    patterns: [4],
    format: defaultFormat,
    length: [13, 16, 19],
    cvvLength: [3],
    luhn: true
  }, {
    type: 'mastercard',
    patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
    format: defaultFormat,
    length: [16],
    cvvLength: [3],
    luhn: true
  }, {
    type: 'elo',
    patterns: [
        401178,
        401179,
        431274,
        438935,
        451416,
        457393,
        457631,
        457632,
        504175,
        506707,
        506708,
        506715,
        506717,
        506718,
        506719,
        506720,
        506721,
        506722,
        506723,
        506724,
        506725,
        506726,
        506727,
        506728,
        506729,
        506730,
        506731,
        506732,
        506733,
        506734,
        506735,
        506736,
        506739,
        506740,
        506741,
        506742,
        506743,
        506744,
        506745,
        506746,
        506747,
        506748,
        506753,
        506774,
        506775,
        506776,
        506777,
        506778,
        509000,
        509001,
        509002,
        509003,
        509004,
        509005,
        509006,
        509007,
        509008,
        509009,
        509010,
        509011,
        509012,
        509013,
        509014,
        509020,
        509021,
        509022,
        509023,
        509024,
        509025,
        509026,
        509027,
        509028,
        509029,
        509030,
        509031,
        509032,
        509033,
        509034,
        509035,
        509036,
        509037,
        509038,
        509039,
        509040,
        509041,
        509042,
        509043,
        509044,
        509045,
        509046,
        509047,
        509048,
        509049,
        509050,
        509051,
        509052,
        509053,
        509054,
        509055,
        509056,
        509057,
        509058,
        509059,
        509060,
        509061,
        509062,
        509063,
        509064,
        509065,
        509066,
        509067,
        509068,
        509069,
        509070,
        509071,
        509072,
        509073,
        509074,
        509075,
        509076,
        509077,
        509078,
        509079,
        509080,
        509081,
        509082,
        509083,
        509084,
        509085,
        509086,
        509087,
        509088,
        509089,
        509090,
        509091,
        509092,
        509093,
        509094,
        509095,
        509096,
        509097,
        509098,
        509099,
        509100,
        509101,
        509102,
        509103,
        509104,
        509105,
        509106,
        509107,
        509108,
        509109,
        509110,
        509111,
        509112,
        509113,
        509114,
        509115,
        509116,
        509117,
        509118,
        509119,
        509120,
        509121,
        509122,
        509123,
        509124,
        509125,
        509126,
        509127,
        509128,
        509129,
        509130,
        509131,
        509132,
        509133,
        509134,
        509135,
        509136,
        509137,
        509138,
        509139,
        509140,
        509141,
        509142,
        509143,
        509144,
        509145,
        509146,
        509147,
        509148,
        509149,
        509150,
        509151,
        509152,
        509153,
        509154,
        509155,
        509156,
        509157,
        509158,
        509159,
        509160,
        509161,
        509162,
        509163,
        509164,
        509165,
        509166,
        509167,
        509168,
        509169,
        509170,
        509171,
        509172,
        509173,
        509174,
        509175,
        509176,
        509177,
        509178,
        509179,
        509180,
        509181,
        509182,
        509183,
        509184,
        509185,
        509186,
        509187,
        509188,
        509189,
        509190,
        509191,
        509192,
        509193,
        509194,
        509195,
        509196,
        509197,
        509198,
        509199,
        509200,
        509201,
        509202,
        509203,
        509204,
        509205,
        509206,
        509207,
        509208,
        509209,
        509210,
        509211,
        509212,
        509213,
        509214,
        509215,
        509216,
        509217,
        509218,
        509219,
        509220,
        509221,
        509222,
        509223,
        509224,
        509225,
        509226,
        509227,
        509228,
        509229,
        509230,
        509231,
        509232,
        509233,
        509234,
        509235,
        509236,
        509237,
        509238,
        509239,
        509240,
        509241,
        509242,
        509243,
        509244,
        509245,
        509246,
        509247,
        509248,
        509249,
        509250,
        509251,
        509252,
        509253,
        509254,
        509255,
        509256,
        509257,
        509258,
        509259,
        509260,
        509261,
        509262,
        509263,
        509264,
        509265,
        509266,
        509267,
        509268,
        509269,
        509270,
        509271,
        509272,
        509273,
        509274,
        509275,
        509276,
        509277,
        509278,
        509279,
        509280,
        509281,
        509282,
        509283,
        509284,
        509285,
        509286,
        509287,
        509288,
        509289,
        509290,
        509291,
        509292,
        509293,
        509294,
        509295,
        509296,
        509297,
        509298,
        509299,
        509300,
        509301,
        509302,
        509303,
        509304,
        509305,
        509306,
        509307,
        509308,
        509309,
        509310,
        509311,
        509312,
        509313,
        509314,
        509315,
        509316,
        509317,
        509318,
        509319,
        509320,
        509321,
        509322,
        509323,
        509324,
        509325,
        509326,
        509327,
        509328,
        509329,
        509330,
        509331,
        509332,
        509333,
        509334,
        509335,
        509336,
        509337,
        509338,
        509339,
        509340,
        509341,
        509342,
        509343,
        509344,
        509345,
        509346,
        509347,
        509348,
        509349,
        509350,
        509351,
        509352,
        509353,
        509354,
        509355,
        509356,
        509357,
        509358,
        509359,
        509360,
        509361,
        509362,
        509363,
        509364,
        509365,
        509366,
        509367,
        509368,
        509369,
        509370,
        509371,
        509372,
        509373,
        509374,
        509375,
        509376,
        509377,
        509378,
        509379,
        509380,
        509381,
        509382,
        509383,
        509384,
        509385,
        509386,
        509387,
        509388,
        509389,
        509390,
        509391,
        509392,
        509393,
        509394,
        509395,
        509396,
        509397,
        509398,
        509399,
        509400,
        509401,
        509402,
        509403,
        509404,
        509405,
        509406,
        509407,
        509408,
        509409,
        509410,
        509411,
        509412,
        509413,
        509414,
        509415,
        509416,
        509417,
        509418,
        509419,
        509420,
        509421,
        509422,
        509423,
        509424,
        509425,
        509426,
        509427,
        509428,
        509429,
        509430,
        509431,
        509432,
        509433,
        509434,
        509435,
        509436,
        509437,
        509438,
        509439,
        509440,
        509441,
        509442,
        509443,
        509444,
        509445,
        509446,
        509447,
        509448,
        509449,
        509450,
        509451,
        509452,
        509453,
        509454,
        509455,
        509456,
        509457,
        509458,
        509459,
        509460,
        509461,
        509462,
        509463,
        509464,
        509465,
        509466,
        509467,
        509468,
        509469,
        509470,
        509471,
        509472,
        509473,
        509474,
        509475,
        509476,
        509477,
        509478,
        509479,
        509480,
        509481,
        509482,
        509483,
        509484,
        509485,
        509486,
        509487,
        509488,
        509489,
        509490,
        509491,
        509492,
        509493,
        509494,
        509495,
        509496,
        509497,
        509498,
        509499,
        509500,
        509501,
        509502,
        509503,
        509504,
        509505,
        509506,
        509507,
        509508,
        509509,
        509510,
        509511,
        509512,
        509513,
        509514,
        509515,
        509516,
        509517,
        509518,
        509519,
        509520,
        509521,
        509522,
        509523,
        509524,
        509525,
        509526,
        509527,
        509528,
        509529,
        509530,
        509531,
        509532,
        509533,
        509534,
        509535,
        509536,
        509537,
        509538,
        509539,
        509540,
        509541,
        509542,
        509543,
        509544,
        509545,
        509546,
        509547,
        509548,
        509549,
        509550,
        509551,
        509552,
        509553,
        509554,
        509555,
        509556,
        509557,
        509558,
        509559,
        509560,
        509561,
        509562,
        509563,
        509564,
        509565,
        509566,
        509567,
        509568,
        509569,
        509570,
        509571,
        509572,
        509573,
        509574,
        509575,
        509576,
        509577,
        509578,
        509579,
        509580,
        509581,
        509582,
        509583,
        509584,
        509585,
        509586,
        509587,
        509588,
        509589,
        509590,
        509591,
        509592,
        509593,
        509594,
        509595,
        509596,
        509597,
        509598,
        509599,
        509600,
        509601,
        509602,
        509603,
        509604,
        509605,
        509606,
        509607,
        509608,
        509609,
        509610,
        509611,
        509612,
        509613,
        509614,
        509615,
        509616,
        509617,
        509618,
        509619,
        509620,
        509621,
        509622,
        509623,
        509624,
        509625,
        509626,
        509627,
        509628,
        509629,
        509630,
        509631,
        509632,
        509633,
        509634,
        509635,
        509636,
        509637,
        509638,
        509639,
        509640,
        509641,
        509642,
        509643,
        509644,
        509645,
        509646,
        509647,
        509648,
        509649,
        509650,
        509651,
        509652,
        509653,
        509654,
        509655,
        509656,
        509657,
        509658,
        509659,
        509660,
        509661,
        509662,
        509663,
        509664,
        509665,
        509666,
        509667,
        509668,
        509669,
        509670,
        509671,
        509672,
        509673,
        509674,
        509675,
        509676,
        509677,
        509678,
        509679,
        509680,
        509681,
        509682,
        509683,
        509684,
        509685,
        509686,
        509687,
        509688,
        509689,
        509690,
        509691,
        509692,
        509693,
        509694,
        509695,
        509696,
        509697,
        509698,
        509699,
        509700,
        509701,
        509702,
        509703,
        509704,
        509705,
        509706,
        509707,
        509708,
        509709,
        509710,
        509711,
        509712,
        509713,
        509714,
        509715,
        509716,
        509717,
        509718,
        509719,
        509720,
        509721,
        509722,
        509723,
        509724,
        509725,
        509726,
        509727,
        509728,
        509729,
        509730,
        509731,
        509732,
        509733,
        509734,
        509735,
        509736,
        509737,
        509738,
        509739,
        509740,
        509741,
        509742,
        509743,
        509744,
        509745,
        509746,
        509747,
        509748,
        509749,
        509750,
        509751,
        509752,
        509753,
        509754,
        509755,
        509756,
        509757,
        509758,
        509759,
        509760,
        509761,
        509762,
        509763,
        509764,
        509765,
        509766,
        509767,
        509768,
        509769,
        509770,
        509771,
        509772,
        509773,
        509774,
        509775,
        509776,
        509777,
        509778,
        509779,
        509780,
        509781,
        509782,
        509783,
        509784,
        509785,
        509786,
        509787,
        509788,
        509789,
        509790,
        509791,
        509792,
        509793,
        509794,
        509795,
        509796,
        509797,
        509798,
        509799,
        509800,
        509801,
        509802,
        509803,
        509804,
        509805,
        509806,
        509807,
        509831,
        509832,
        509833,
        509834,
        509835,
        509836,
        509837,
        509838,
        509839,
        509840,
        509841,
        509842,
        509843,
        509844,
        509845,
        509846,
        509847,
        509848,
        509849,
        509850,
        509851,
        509852,
        509853,
        509854,
        509855,
        509856,
        509857,
        509858,
        509859,
        509860,
        509861,
        509862,
        509863,
        509864,
        509865,
        509866,
        509867,
        509868,
        509869,
        509870,
        509871,
        509872,
        509873,
        509874,
        509875,
        509876,
        509877,
        509878,
        509879,
        509897,
        509898,
        509899,
        509900,
        509918,
        509919,
        509920,
        509921,
        509922,
        509923,
        509924,
        509925,
        509926,
        509927,
        509928,
        509929,
        509930,
        509931,
        509932,
        509933,
        509934,
        509935,
        509936,
        509937,
        509938,
        509939,
        509940,
        509941,
        509942,
        509943,
        509944,
        509945,
        509946,
        509947,
        509948,
        509949,
        509950,
        509951,
        509952,
        509953,
        509954,
        509955,
        509956,
        509957,
        509958,
        509959,
        509960,
        509961,
        509962,
        509963,
        509964,
        509971,
        509972,
        509973,
        509974,
        509975,
        509976,
        509977,
        509978,
        509979,
        509980,
        509981,
        509982,
        509983,
        509984,
        509985,
        509986,
        509995,
        509996,
        509997,
        509998,
        509999,
        627780,
        636297,
        636368,
        650031,
        650032,
        650033,
        650035,
        650036,
        650037,
        650038,
        650039,
        650040,
        650041,
        650042,
        650043,
        650044,
        650045,
        650046,
        650047,
        650048,
        650049,
        650050,
        650051,
        650057,
        650058,
        650059,
        650060,
        650061,
        650062,
        650063,
        650064,
        650065,
        650066,
        650067,
        650068,
        650069,
        650070,
        650071,
        650072,
        650073,
        650074,
        650075,
        650076,
        650077,
        650078,
        650079,
        650080,
        650081,
        650405,
        650406,
        650407,
        650408,
        650409,
        650410,
        650411,
        650412,
        650413,
        650414,
        650415,
        650416,
        650417,
        650418,
        650419,
        650420,
        650421,
        650422,
        650423,
        650424,
        650425,
        650426,
        650427,
        650428,
        650429,
        650430,
        650431,
        650432,
        650433,
        650434,
        650435,
        650436,
        650437,
        650438,
        650439,
        650485,
        650486,
        650487,
        650488,
        650489,
        650490,
        650491,
        650492,
        650493,
        650494,
        650495,
        650496,
        650497,
        650498,
        650499,
        650500,
        650501,
        650502,
        650503,
        650504,
        650505,
        650506,
        650507,
        650508,
        650509,
        650510,
        650511,
        650512,
        650513,
        650514,
        650515,
        650516,
        650517,
        650518,
        650519,
        650520,
        650521,
        650522,
        650523,
        650524,
        650525,
        650526,
        650527,
        650528,
        650529,
        650530,
        650531,
        650532,
        650533,
        650534,
        650535,
        650536,
        650537,
        650538,
        650552,
        650553,
        650554,
        650555,
        650556,
        650557,
        650558,
        650559,
        650560,
        650561,
        650562,
        650563,
        650564,
        650565,
        650566,
        650567,
        650568,
        650569,
        650570,
        650571,
        650572,
        650573,
        650574,
        650575,
        650576,
        650577,
        650578,
        650579,
        650580,
        650581,
        650582,
        650583,
        650584,
        650585,
        650586,
        650587,
        650588,
        650589,
        650590,
        650591,
        650592,
        650593,
        650594,
        650595,
        650596,
        650597,
        650598,
        650720,
        650721,
        650722,
        650723,
        650724,
        650725,
        650726,
        650727,
        650901,
        650902,
        650903,
        650904,
        650905,
        650906,
        650907,
        650908,
        650909,
        650910,
        650911,
        650912,
        650913,
        650914,
        650915,
        650916,
        650917,
        650918,
        650919,
        650920,
        650921,
        650922,
        650928,
        650938,
        650939,
        650946,
        650947,
        650948,
        650949,
        650950,
        650951,
        650952,
        650953,
        650954,
        650955,
        650956,
        650957,
        650958,
        650959,
        650960,
        650961,
        650962,
        650963,
        650964,
        650965,
        650966,
        650967,
        650968,
        650969,
        650970,
        650971,
        650972,
        650973,
        650974,
        650975,
        650976,
        650977,
        650978,
        651652,
        651653,
        651654,
        651655,
        651656,
        651657,
        651658,
        651659,
        651660,
        651661,
        651662,
        651663,
        651664,
        651665,
        651666,
        651667,
        651668,
        651669,
        651670,
        651671,
        651672,
        651673,
        651674,
        651675,
        651676,
        651677,
        651678,
        651679,
        651680,
        651681,
        651682,
        651683,
        651684,
        651685,
        651686,
        651687,
        651688,
        651689,
        651690,
        651691,
        651692,
        651693,
        651694,
        651695,
        651696,
        651697,
        651698,
        651699,
        651700,
        651701,
        651702,
        651703,
        651704,
        655000,
        655001,
        655002,
        655003,
        655004,
        655005,
        655006,
        655007,
        655008,
        655009,
        655010,
        655011,
        655012,
        655013,
        655014,
        655015,
        655016,
        655017,
        655018,
        655019,
        655021,
        655022,
        655023,
        655024,
        655025,
        655026,
        655027,
        655028,
        655029,
        655030,
        655031,
        655032,
        655033,
        655034,
        655035,
        655036,
        655037,
        655038,
        655039,
        655040,
        655041,
        655042,
        655043,
        655044,
        655045,
        655046,
        655047,
        655048,
        655049,
        655050,
        655051,
        655052,
        655053,
        655054,
        655055,
        655056,
        655057,
        6550
        /*/^4(0117[89]|3(1274|8935)|5(1416|7(393|63[12])))/,
        /^50(4175|6(699|7([0-6]\d|7[0-8]))|9\d{3})/,
        /^6(27780|36(297|368)|5(0(0(3[1-35-9]|4\d|5[01])|4(0[5-9]|([1-3]\d|8[5-9]|9\d))|5([0-2]\d|3[0-8]|4[1-9]|[5-8]\d|9[0-8])|7(0\d|1[0-8]|2[0-7])|9(0[1-9]|[1-6]\d|7[0-8]))|16(5[2-9]|[67]\d)|50([01]\d|2[1-9]|[34]\d|5[0-8])))/
        4011,
        431274,
        438935,
        451416,
        457393,
        4576,
        457631,
        457632,
        504175,
        627780,
        636297,
        636368,
        636369,
        506699 à 506778,
        509000 à 509999,
        650031 à 650033,
        650035 à 650051,
        650405 à 650439,
        650485 à 650538,
        650541 à 650598,
        650700 à 650718,
        650720 à 650727,
        650901 à 650920,
        651652 à 651679,
        655000 à 655019,
        655021 à 655058*/
    ],
    format: defaultFormat,
    length: [16],
    cvvLength: [3],
    luhn: true
  },{
    type: 'amex',
    patterns: [34, 37],
    format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
    length: [15],
    cvvLength: [3, 4],
    luhn: true
  }, {
    type: 'dinersclub',
    patterns: [30, 36, 38, 39],
    format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
    length: [14],
    cvvLength: [3],
    luhn: true
  }, {
    type: 'hipercard',
    patterns: [606282],
    format: defaultFormat,
    length: [16],
    cvvLength: [3],
    luhn: true
  }, {
    type: 'discover',
    patterns: [60, 64, 65, 622],
    format: defaultFormat,
    length: [16],
    cvvLength: [3],
    luhn: true
  }, {
    type: 'unionpay',
    patterns: [62, 88],
    format: defaultFormat,
    length: [16, 17, 18, 19],
    cvvLength: [3],
    luhn: false
  }, {
    type: 'jcb',
    patterns: [35],
    format: defaultFormat,
    length: [16, 19],
    cvvLength: [3],
    luhn: true
  }
];

export class CreditCard {

  public static cards() {
    return cards;
  }

  public static cardFromNumber(num) {
    let card,
        p,
        pattern,
        ref;
    num = (num + '').replace(/\D/g, '');

    for (let i = 0, len = cards.length; i < len; i++) {
      card = cards[i];
      ref = card.patterns;

      for (let j = 0, len1 = ref.length; j < len1; j++) {
        pattern = ref[j];
        p = pattern + '';

        if (num.substr(0, p.length) === p) {
          return card;
        }
      }
    }
  }

  public static restrictNumeric(e): boolean {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }

  public static hasTextSelected(target) {
    return target.selectionStart !== null && target.selectionStart !== target.selectionEnd;
  }

  public static cardType(num) {
    if (!num) {
      return num;
    }

    let card = this.cardFromNumber(num);

    if (card !== null && typeof card !== 'undefined') {
      return card.type;
    } else {
      return null;
    }
  }

  public static formatCardNumber(num) {
    let card,
        groups,
        upperLength;

    num = num.replace(/\D/g, '');
    card = this.cardFromNumber(num);

    if (!card) {
      return num;
    }

    upperLength = card.length[card.length.length - 1];
    num = num.slice(0, upperLength);

    if (card.format.global) {
      let matches = num.match(card.format);
      if (matches != null) {
        return matches.join(' ');
      }
    } else {
      groups = card.format.exec(num);
      if (groups == null) {
        return;
      }
      groups.shift();
      return groups.filter(Boolean).join(' ');
    }
  }

  public static safeVal(value, target) {
    let cursor = null,
        last   = target.value,
        result: any = null;

    try {
      cursor = target.selectionStart;
    } catch (error) {}

    target.value = value;

    if (cursor !== null && target === document.activeElement) {
      if (cursor === last.length) {
        cursor = value.length;
      }

      if (last !== value) {
        let prevPair = last.slice(cursor - 1, +cursor + 1 || 9e9),
            currPair = value.slice(cursor - 1, +cursor + 1 || 9e9),
            digit = value[cursor];

        if (/\d/.test(digit) && prevPair === (`${digit} `) && currPair === (` ${digit}`)) {
          cursor = cursor + 1;
        }
      }

     result = cursor;
    }
    return result;
  }

  public static isCardNumber(key, target) {
    let card,
        digit,
        value,
        result;
    digit = String.fromCharCode(key);
    if (!/^\d+$/.test(digit)) {
      return false;
    }
    if (CreditCard.hasTextSelected(target)) {
      return true;
    }
    value = (target.value + digit).replace(/\D/g, '');
    card = CreditCard.cardFromNumber(value);
    if (card) {
      result = value.length <= card.length[card.length.length - 1];
    } else {
      result = value.length <= 16;
    }

    return result;
  }

  public static restrictExpiry(key, target) {
    let digit,
        value;
    digit = String.fromCharCode(key);
    if (!/^\d+$/.test(digit) || this.hasTextSelected(target)) {
      return false;
    }
    value = `${target.value}${digit}`.replace(/\D/g, '');

    return value.length > 6;
  }

  public static replaceFullWidthChars(str) {
    if (str === null) {
      str = '';
    }

    let chr,
        idx,
        fullWidth = '\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19',
        halfWidth = '0123456789',
        value = '',
        chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
      chr = chars[i];
      idx = fullWidth.indexOf(chr);
      if (idx > -1) {
        chr = halfWidth[idx];
      }
      value += chr;
    }
    return value;
  }

  public static formatExpiry(expiry) {
    let parts = expiry.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/),
        mon,
        sep,
        year;

    if (!parts) {
      return '';
    }

    mon  = parts[1] || '';
    sep  = parts[2] || '';
    year = parts[3] || '';

    if (year.length > 0) {
      sep = ' / ';
    } else if (sep === ' /') {
      mon = mon.substring(0, 1);
      sep = '';
    } else if (mon.length === 2 || sep.length > 0) {
      sep = ' / ';
    } else if (mon.length === 1 && (mon !== '0' && mon !== '1')) {
      mon = `0${mon}`;
      sep = ' / ';
    }
    return `${mon}${sep}${year}`;
  }

  public static restrictCvc(key, target) {
    let digit = String.fromCharCode(key);
    if (!/^\d+$/.test(digit) || this.hasTextSelected(target)) {
      return false;
    }
    let val = `${target.value}${digit}`;
    return val.length <= 4;
  }

  public static luhnCheck(num) {
    let digit,
        digits = num.split('').reverse(),
        odd    = true,
        sum    = 0;

    for (let i = 0; i < digits.length; i++) {
      digit = digits[i];
      digit = parseInt(digit, 10);
      if ((odd = !odd)) {
        digit *= 2;
      }
      if (digit > 9) {
        digit -= 9;
      }
      sum += digit;
    }

    return sum % 10 === 0;
  }
}
