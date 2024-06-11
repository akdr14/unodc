/* eslint-disable no-param-reassign */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CommonActions } from '@react-navigation/native'
import _ from 'lodash'
import { Image, ImageSourcePropType } from 'react-native'

import { storage, availableLanguages } from 'src/utils/constants'
import {
  Country,
  CountryItemList,
  Data,
  DataType,
  MappedCrimes,
  MappingRule,
  MappingRuleGrouping,
  Note,
  Material,
} from 'src/screens/types'

import DownloadableMaterialsES from 'src/translations/es/downloadable-materials.es.json'
import DownloadableMaterialsEN from 'src/translations/en/downloadable-materials.en.json'

/**
 * Function used to set current language to app storage
 *
 * @export
 * @param {string} language language available in the app (e.g. es, en)
 */
export const setCurrentLanguage = (language: string): void => {
  try {
    AsyncStorage.setItem(storage.APP_LANGUAGE, language)
  } catch (error) {
    console.error('error setCurrentLanguage', error)
  }
}

/**
 * Function used to get current language stored in app
 *
 * @export
 * @returns {Promise<string>} Promise with current language stored in app (e.g. es, en)
 */
export const getCurrentLanguage = async (): Promise<string> => {
  let currentLanguage: string

  try {
    // await AsyncStorage.removeItem(storage.APP_LANGUAGE)
    currentLanguage = await AsyncStorage.getItem(storage.APP_LANGUAGE)
  } catch (error) {
    console.error('error getCurrentLanguage', error)
  }

  return currentLanguage
}

/**
 * Function used to reset the app navigation
 *
 * @export
 * @param {*} navigation react navigation prop
 * @param {string} routeName screen name
 */
export const resetNavigation = (navigation: any, routeName: string): void => {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: routeName }],
    }),
  )
}

/**
 * Function used to validate if a variable is an array and if the array has a length greater than 0
 *
 * @export
 * @param {Array<any>} array
 * @returns {boolean} boolean
 */
export const isNotEmptyArray = (array: Array<any>): boolean => Array.isArray(array) && array.length > 0

/**
 * Function used to get the set dataRelations property with the complete Data object (id, title, sections, etc)
 *
 * @export
 * @param {Array<Data>} data crimes array
 * @returns {Array<Data>} crimes array with set dataRelations property
 */
export const getCompleteDataPath = (data: Array<Data>, filterParentId = true): Array<Data> => {
  const crimes: Array<Data> = JSON.parse(JSON.stringify(data))

  const rootCrimes = _(crimes)
    .map((value) => {
      if (value.id.length === 2) value.level = 0
      if (isNotEmptyArray(value.relations)) {
        if (isNotEmptyArray(value.relations[0].relatedPostsIds)) {
          const dataRelations: Array<Data> = []
          for (let i = 0; i < value.relations[0].relatedPostsIds.length; i += 1) {
            for (let j = 0; j < crimes.length; j += 1) {
              if (value.relations[0].relatedPostsIds[i] === crimes[j].id) {
                let level: number
                const codeLength = crimes[j].id.length

                if (crimes[j].type === DataType.CRIME) {
                  switch (codeLength) {
                    case 4:
                      level = 1
                      break

                    case 5:
                      level = 2
                      break

                    case 6:
                      level = 3
                      break

                    default:
                      break
                  }
                }

                if (crimes[j].type === DataType.ADDITIONAL) {
                  switch (codeLength) {
                    case 4:
                      level = 1
                      break

                    case 6:
                      level = 2
                      break

                    case 8:
                      level = 3
                      break

                    case 10:
                      level = 4
                      break

                    case 12:
                      level = 5
                      break

                    default:
                      break
                  }
                }

                crimes[j].level = level
                dataRelations.push(crimes[j])
              }
            }
          }
          value.dataRelations = dataRelations
        }
      }

      return value
    })
    .value()

  if (filterParentId) return _.filter(rootCrimes, (crime) => !crime.parentId)
  return rootCrimes
}

/**
 * Function used to to replace the relations property of variables (variable.relations) with the variable object (id, title, sections etc)
 *
 * @export
 * @param {Array<any>} data array
 * @returns {Array<any>} variables array
 */
export const getCompleteVariablePath = (data: Array<Data>): Array<Data> => {
  const newVariables: Array<Data> = JSON.parse(JSON.stringify(data))

  const groupedVariables = _(newVariables)
    .groupBy((variable) => variable.parentId)
    .map((value, key) => {
      if (key === 'undefined') key = 'root'
      return { id: key, variables: value }
    })
    .value()

  const rootVariables = _.filter(groupedVariables, (variable) => variable.id === 'root')[0]?.variables
  const variables = _.filter(groupedVariables, (variable) => variable.id !== 'root')

  if (isNotEmptyArray(rootVariables)) {
    rootVariables.forEach((rootVariable) => {
      if (isNotEmptyArray(variables)) {
        variables.forEach((variable) => {
          if (rootVariable.id === variable.id) rootVariable.dataRelations = variable.variables
        })
      }
    })
  }

  return rootVariables
}

/**
 * Function used to get all the notes of crimes, variables or additional array
 *
 * @export
 * @param {Array<Data>} relations array
 * @returns {Array<any>} notes array
 */
export const getLevelNotes = (dataRelations: Array<Data>): Array<Note> => {
  const notesArray: Array<Note> = []
  let counter = 10000

  if (isNotEmptyArray(dataRelations)) {
    dataRelations.forEach((relation) => {
      if (isNotEmptyArray(relation.sections?.notes?.content)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        relation.sections?.notes?.content.forEach((note) => {
          const splitNote = note.split('-')
          //const splitNote = note.split(/(- |-| - | -)/g)
          let id: number
          let definition: string

          if (isNotEmptyArray(splitNote) && splitNote.length === 1) {
            const [noteDefinition] = splitNote
            id = counter
            definition = noteDefinition
            counter += 1
          }

          if (isNotEmptyArray(splitNote) && splitNote.length === 2) {
            const [number, noteDefinition] = splitNote
            id = Number(number)
            definition = noteDefinition
          }

          notesArray.push({ id, definition })
        })
      }
    })

    const removeDuplicateNotes = _(notesArray)
      .sortBy((note) => note.id)
      .uniqBy((note) => note.id)
      .value()

    return removeDuplicateNotes
  }

  return null
}

/**
 * Function used to split the crime level code depending on its level (level 1, 2, 3 or 4)
 *
 * @export
 * @param {string} code crime level code (e.g. 02, 0201, 02011)
 * @returns {{ baseCode: string; levelCode: string }} object with baseCode, levelCode properties (e.g. 0201 (level 2) --> baseCode: 02, levelCode: 01)
 */
export const splitCode = (code: string): { baseCode: string; levelCode: string } => {
  if (code) {
    const codeLength = code.length
    let levelCode: string
    let baseCode: string

    switch (codeLength) {
      case 4:
        baseCode = code.slice(0, 2)
        levelCode = code.slice(2)
        break

      case 5:
        baseCode = code.slice(0, 4)
        levelCode = code.slice(4)
        break

      default:
        baseCode = code.slice(0, 5)
        levelCode = code.slice(5)
        break
    }

    return { baseCode, levelCode }
  }

  return null
}

export const formatCountriesList = (countriesList: Array<Country>): Promise<Array<CountryItemList>> =>
  new Promise((resolve, reject) => {
    // eslint-disable-next-line prefer-promise-reject-errors
    if (!isNotEmptyArray(countriesList)) reject('No countries to format')

    const formattedCountriesList = _(countriesList)
      .map((country) => {
        const mappedCrimes: Array<MappedCrimes> = []
        const mappedCrimesColor: Array<string> = []

        Object.keys(country.sections).forEach((item) => {
          if (item.startsWith('s0') || item.startsWith('s1')) {
            const id = item.split('s')[1]

            if (isNotEmptyArray(country.sections[item]?.content) && country.sections[item].content.length > 1) {
              const value = Number(country.sections[item].content[0])
              const color: string = country.sections[item].content[1]

              mappedCrimesColor.push(color)
              mappedCrimes.push({ id, x: ' ', y: value, color })
            }
          }
        })

        country.mappedCrimes = mappedCrimes
        country.mappedCrimesColor = mappedCrimesColor
        country.totalMappedCrimes = _.sumBy(mappedCrimes, (crime) => crime.y)

        return { label: country.title, value: country.id, data: country }
      })
      .orderBy((country) => country.label)
      .value()

    resolve(formattedCountriesList)
  })

/**
 * Function used to split variable code in title, code
 *
 * @export
 * @param {string} title variable title
 * @returns {{ variableCode: string; variableTitle: string; titleLength: number }} object with variableCode, variableTitle and titleLength properties
 */
export const splitVariableCode = (
  title: string,
): { variableCode: string; variableTitle: string; titleLength: number } => {
  if (title) {
    let variableCode: string
    let variableTitle: string

    const splitTitle = title.split(' - ')
    const titleLength = splitTitle.length

    if (titleLength === 1) {
      const [information] = splitTitle
      variableTitle = information
    }

    if (titleLength === 2) {
      const [code, information] = splitTitle
      variableCode = code
      variableTitle = information
    }

    return { variableCode, variableTitle, titleLength }
  }

  return null
}

/**
 * Function used to generate a random id
 *
 * @export
 * @returns {string} id
 */
export const shortId = (): string => Math.random().toString(36).substr(2, 16)

export const sortMappingRules = (
  rules: Array<MappingRule>,
  lang: string,
  groupings: Array<MappingRuleGrouping>,
): any => {
  const groupingLabels = ['groundwork', 'kickoff', 'classification', 'specialCases', 'verification']
  const rulesMap = {}
  groupings.forEach((grouping, index) => {
    rulesMap[
      lang === availableLanguages.EN ? grouping[groupingLabels[index]].en : grouping[groupingLabels[index]].es
    ] = []
  })

  rules.forEach((rule) => {
    const formattedRuleGroupingText = rule.sections.grouping.content[0].replace('.', '').trim().toLowerCase()
    rulesMap[formattedRuleGroupingText].push(rule)
  })

  return rulesMap
}

/**
 * Function used to build the complete crime path using its id
 *
 * @export
 * @param {string} id crime id
 * @param {Array<Data>} crimes crimes array
 * @param {Array<Data>} [crimePathArray=[]] this parameter should not be modified, it is used to add crimes recursively
 * @returns {Array<Data>} crimes path array
 */
export const buildCrimePath = (id: string, crimes: Array<Data>, crimePathArray: Array<Data> = []): Array<Data> => {
  if (isNotEmptyArray(crimes)) {
    const crimeFound = _.find(crimes, (crime) => crime.id === id)

    if (crimeFound) {
      crimePathArray.push(crimeFound)
      if (crimeFound.parentId) buildCrimePath(crimeFound.parentId, crimes, crimePathArray)
    }
  }

  const cloneCrimePathArray: Array<Data> = JSON.parse(JSON.stringify(crimePathArray))

  if (isNotEmptyArray(cloneCrimePathArray) && !cloneCrimePathArray[cloneCrimePathArray.length - 1].parentId)
    return cloneCrimePathArray.reverse()

  return []
}

/**
 * Function used to remove html tags from a string
 *
 * @export
 * @param {string} text
 * @returns {string} string without html tags
 */
export const removeHtmlTags = (text: string): string => text.replace(/<[^>]*>?/gm, '')

/**
 * Function used to remove html tags and numbers from a string
 *
 * @export
 * @param {string} text
 * @returns {string} string without html tags and numbers
 */
export const removeHtmlTagsAndNumbers = (text: string): string => removeHtmlTags(text).replace(/[0-9]/g, '')

/**
 * Function used to find a word in a text
 *
 * @export
 * @param {string} text
 * @param {string} word word to find
 * @returns {number} index of the word found
 */
export const matchWord = (text: string, word: string): number => {
  const re = new RegExp(`\\b${word}\\b`)
  return text.search(re)
}

/**
 * Function used to extract a part of the text where the search term is found, either in the title, description, inclusions or notes.
 *
 * @export
 * @param {Data} data
 * @param {string} searchText
 * @param {string} splitSearchText array of strings
 * @returns {string} search text excerpt
 */
export const getSearchTextExcerpt = (data: Data, splitSearchText: Array<string>): string => {
  const propertiesToSearch = ['title', 'sections']
  const secondLevelProperties = ['description', 'inclusions', 'notes']
  let searchTextToShow: string

  for (let i = 0; i < propertiesToSearch.length; i += 1) {
    const searchTerm = data[propertiesToSearch[i]]

    if (propertiesToSearch[i] === 'title') {
      const formattedSearchTerm = searchTerm?.toLowerCase()
      let foundWordInTitle: string

      for (let h = 0; h < splitSearchText.length; h += 1) {
        if (matchWord(formattedSearchTerm, splitSearchText[h]) > -1) {
          // if (formattedSearchTerm.indexOf(splitSearchText[h]) > -1) {
          foundWordInTitle = splitSearchText[h]
          break
        }

        if (foundWordInTitle) break
      }

      if (foundWordInTitle) break
    }

    if (propertiesToSearch[i] === 'sections') {
      for (let j = 0; j < secondLevelProperties.length; j += 1) {
        const sectionContent = data[propertiesToSearch[i]]?.[secondLevelProperties[j]]?.content

        if (isNotEmptyArray(sectionContent)) {
          for (let k = 0; k < sectionContent.length; k += 1) {
            for (let h = 0; h < splitSearchText.length; h += 1) {
              if (matchWord(sectionContent[k]?.toLowerCase(), splitSearchText[h]) > -1) {
                // if (sectionContent[k]?.toLowerCase().indexOf(splitSearchText[h]) > -1) {
                const index = matchWord(sectionContent[k]?.toLowerCase(), splitSearchText[h])
                // const index = sectionContent[k]?.toLowerCase().indexOf(splitSearchText[h])
                searchTextToShow = removeHtmlTagsAndNumbers(
                  `...${sectionContent[k]?.toLowerCase().substring(index - 25, index + 50)}...`,
                )
                break
              }

              if (searchTextToShow) break
            }
          }
        }

        if (searchTextToShow) break
      }
    }
  }

  return searchTextToShow
}
