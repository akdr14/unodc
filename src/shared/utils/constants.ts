/* eslint-disable global-require */
import { Platform, Dimensions } from 'react-native'

export const API_BASE_URL = 'https://posts.iccs.unodc.technogi.com.mx/api/v1/' // PROD
// export const API_BASE_URL = 'https://posts.dev.iccs.unodc.technogi.com.mx/api/v1/' // DEV
export const TEMP_ICCS_FILES_BASE_URL = 'https://s3.amazonaws.com/downloads.dev.iccs.unodc.technogi.com.mx/'
export const UNODC_ICCS_MANDATES_URL = 'https://www.unodc.org/unodc/en/data-and-analysis/statistics/iccs/reports.html'

export const platform = Platform.OS
export const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')
export const isAndroid = platform === 'android'
export const isIOS = platform === 'ios'
export const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (deviceHeight === 780 ||
    deviceWidth === 780 ||
    deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 844 ||
    deviceWidth === 844 ||
    deviceHeight === 896 ||
    deviceWidth === 896 ||
    deviceHeight === 926 ||
    deviceWidth === 926)

export const DEFAULT_LANGUAGE = 'en'

export const storage = {
  APP_LANGUAGE: 'appLanguage',
}

export const availableLanguages = {
  ES: 'es',
  EN: 'en',
}

export const informationType = {
  CRIME: 'crime',
  VARIABLE: 'variable',
  ADDITIONAL: 'additional',
}
export const countryCorrespondenceTableEmail = 'unodc-mexico.cde.estadistica@un.org'

export const mappingRulesGroupings = [
  {
    groundwork: {
      en: 'groundwork',
      es: 'trabajo preliminar',
    },
  },
  {
    kickoff: {
      en: 'kick off',
      es: 'saque inicial',
    },
  },
  {
    classification: {
      en: 'classification',
      es: 'clasificación',
    },
  },
  {
    specialCases: {
      en: 'special cases',
      es: 'casos particulares',
    },
  },
  {
    verification: {
      en: 'verification',
      es: 'verificación',
    },
  },
]

export const mappingRulesLabelsEs = [
  {
    id: '0',
    title: 'Trabajo Preliminar',
    code: 'trabajo preliminar',
  },
  {
    id: '1',
    title: 'Saque Inicial',
    code: 'saque inicial',
  },
  {
    id: '2',
    title: 'Clasificación',
    code: 'clasificación',
  },
  {
    id: '3',
    title: 'Casos Particulares',
    code: 'casos particulares',
  },
  {
    id: '4',
    title: 'Verificación',
    code: 'verificación',
  },
]

export const mappingRulesLabelsEn = [
  {
    id: '0',
    title: 'Groundwork',
    code: 'groundwork',
  },
  {
    id: '1',
    title: 'Kick off',
    code: 'kick off',
  },
  {
    id: '2',
    title: 'Classification',
    code: 'classification',
  },
  {
    id: '3',
    title: 'Special cases',
    code: 'special cases',
  },
  {
    id: '4',
    title: 'Verification',
    code: 'verification',
  },
]

export const downloadableMaterialsStaticObject = {
  es: [
    {
      id: 0,
      title: 'Clasificación Internacional de Delitos con Fines Estadísticos',
      description:
        'Edición impresa de la ICCS, versión 1.0. Este documento presenta el marco metodológico para la clasificación de estadísticas sobre la delincuencia y justicia penal, según el mandato de la Comisión de Estadísticas de las Naciones Unidas y de la Comisión de Prevención del Delito y Justicia Penal. La ICCS es una herramienta que permite comprender las causas y el alcance del delito.',
      fileName: 'https://www.unodc.org/documents/data-and-analysis/statistics/crime/ICCS/ICCS_SPANISH_2016_web.pdf',
      thumbnail: require('src/assets/images/materials/03-ICCS_English_2016_web-min.png'),
    },
    {
      id: 1,
      title: '¿Qué es la ICCS? Clasificar para entender',
      description:
        'Folleto informativo sobre la ICCS. Este documento presenta de forma esquemática los objetivos, contenidos y ventajas de la Clasificación. También presenta de manera corta los principios metodológicos que guiaron el desarrollo de la ICCS.',
      fileName: 'http://www.cdeunodc.inegi.org.mx/unodc/wp-content/uploads/2021/02/ICCS-Flyer-NEW-ESP-A4.pdf',
      thumbnail: require('src/assets/images/materials/02-ICCS_Folleto_ESP_min.png'),
    },
    {
      id: 2,
      title: 'Preguntas guía para implementar la ICCS',
      description:
        'Este documento presenta una serie de preguntas preliminares que las autoridades nacionales deben considerar de forma previa a la adopción de la ICCS. Estas preguntas ayudan a delimitar los alcances y contenidos de los sistemas estadísticos nacionales sobre seguridad y justicia, y las áreas en las que se deberá implementar la Clasificación para su adopción integral. Por el momento, sólo se cuenta con la versión en inglés.',

      fileName: 'http://www.cdeunodc.inegi.org.mx/unodc/wp-content/uploads/2021/02/ICCS-Preliminary-Questions.pdf',
      thumbnail: require('src/assets/images/materials/05-ICCS-Preliminary-Questions-min.png'),
    },
    {
      id: 3,
      title: 'El homicidio intencional bajo la óptica de la ICCS',
      description:
        'Esta nota informativa refiere los criterios que una muerte violenta debe cumplir en el marco de la ICCS para considerarse como un homicidio intencional. Asimismo, se discuten las variables de desagregación que pemiten contar con información detallada del contexto y mecanismos sociales que detonan este tipo de delitos.',
      fileName: 'http://www.cdeunodc.inegi.org.mx/unodc/wp-content/uploads/2021/02/Nota-ICCS_Homicidio-intencional.pdf',
      thumbnail: require('src/assets/images/materials/06-Nota-Informativa-ICCS-Homicidio-Intencional-Optica-ICCS-min.png'),
    },
    {
      id: 4,
      title: 'Violencia contra las mujeres y otros temas de género bajo la óptica de la ICCS',
      description:
        'Esta nota informativa describe la capacidad de la ICCS para hacer un análisis de las dimensiones del género del delito. La implementación de la ICCS permite identificar el rol de la variable de género en las víctimas y perpetradores del crimen, así como facilitar el monitoreo de la igualdad de género en las operaciones del sistema de justicia penal de cada país.',
      fileName: 'http://www.cdeunodc.inegi.org.mx/unodc/wp-content/uploads/2021/02/Nota-ICCS_Violencia-gÃ©nero.pdf',
      thumbnail: require('src/assets/images/materials/07-Nota-Informativa-ICCS-Midiendo-la-violencia-contra-las-mujeres-min.png'),
    },
    {
      id: 5,
      title: 'Formato de tabla de correspondencia',
      description:
        'Archivo tipo Excel. El formato de la tabla de correspondencia es un modelo para el mapeo de las conductas/categorías/variables o indicadoresdelictivos que se tienen a nivel nacional con las categorías de la ICCS. Las columnas del formato de la tabla de correspondencia que hacen referencia a la ICCS vienen pre-llenadas. En tanto, el resto de la tabla deja espacio en blanco para que la información nacional sea introducida.',
      fileName:
        'http://www.cdeunodc.inegi.org.mx/unodc/wp-content/uploads/2021/02/ICCS-Tabla-Correspondencia-EspaÃ±ol-limpia.xlsx',
      thumbnail: require('src/assets/images/logo/es/unodc-es.logo.png'),
    },
  ],
  en: [
    {
      id: 0,
      title: 'International Classification of Crime for Statistical Purposes',
      description:
        'ICCS print edition, version 1.0. This document presents the methodological framework for the classification of crime and criminal justice statistics, as mandated by the United Nations Statistical Commission and the Commission on Crime Prevention and Criminal Justice. The ICCS is also a tool for understanding the drivers and magnitude of crime.',
      fileName: 'https://www.unodc.org/documents/data-and-analysis/statistics/crime/ICCS/ICCS_English_2016_web.pdf',
      thumbnail: require('src/assets/images/materials/03-ICCS_English_2016_web-min.png'),
    },
    {
      id: 1,
      title: "What's the ICCS? Classifying to understand crime",
      description:
        'Brochure on ICCS. This document presents the objectives, contents and benefits of the Classification. It also briefly and schematically presents the methodological principles that guided the development of ICCS.',
      fileName: 'http://www.cdeunodc.inegi.org.mx/unodc/wp-content/uploads/2021/02/ICCS-Flyer-NEW-ENG-A4.pdf',
      thumbnail: require('src/assets/images/materials/04-ICCS-Flyer-NEW-ENG-A4-min.png'),
    },
    {
      id: 2,
      title: 'Guiding questions for the ICCS implementation',
      description:
        'This document presents a series of preliminary questions that national authorities should consider prior to the adoption of the ICCS. These questions help to outline the scope and contents of national statistical systems on crime and justice, and the areas in which the Classification should be implemented for a comprehensive adoption.',
      fileName: 'http://www.cdeunodc.inegi.org.mx/unodc/wp-content/uploads/2021/02/ICCS-Preliminary-Questions.pdf',
      thumbnail: require('src/assets/images/materials/05-ICCS-Preliminary-Questions-min.png'),
    },
    {
      id: 3,
      title: 'Unlawful killings in conflict situations',
      description:
        'Briefing note. The statistical treatment of violent deaths in conflict situations is a complex matter due to the existence of legal, operational and statistical challenges. The ICCS provides a firm ground for the definition and classification of unlawful killings, both in situations of conflict and nonconflict.',
      fileName:
        'https://www.unodc.org/documents/data-and-analysis/statistics/crime/ICCS/Unlawful_killings_conflict_situations_ICCS.pdf',
      thumbnail: require('src/assets/images/materials/08-Unlawful_killings_conflict_situations_ICCS-min.png'),
    },
    {
      id: 4,
      title: 'Violence against women and other gender issues through ICCS lenses',
      description:
        'Briefing note. Can the ICCS be employed to measure the gender-bias dimension of crime? This document explains how the ICCS takes into account the different ways in which inequalities between women and men, gender roles and attitudes can influence criminal behaviours.',
      fileName: 'https://www.unodc.org/documents/data-and-analysis/statistics/crime/ICCS/Gender_and_the_ICCS.pdf',
      thumbnail: require('src/assets/images/materials/01Gender_and_the_ICCS-min.png'),
    },
    {
      id: 5,
      title: 'Correspondence table template',
      description:
        'Excel file. The correspondence table template is a format for mapping national criminal offences/categories/variables/indicators into categories of the ICCS. The columns of the correspondence table referring to the ICCS are already pre-filled. The rest of the table leaves space for the national-level information to be classified.',
      fileName:
        'http://www.cdeunodc.inegi.org.mx/unodc/wp-content/uploads/2021/02/ICCS-Correspondence-Table-Template-clean.xlsx',
      thumbnail: require('src/assets/images/logo/en/unodc-en.logo.png'),
    },
  ],
}
