function applyCodeMapping (type) {
  const codeMap = {
    "African American":                       ['"RB"', '"RE_B"'],
    "American Indian or Alaska Native":       ['"RI"', '"RE_I"'],
    "Asian":                                  ['"RA"', '"RE_A"'],
    "Filipino":                               ['"RF"', '"RE_F"'],
    "Hispanic or Latino":                     ['"RH"', '"RE_H"'],
    "Race Not Reported":                      ['"RD"', '"RE_D"'],
    "Pacific Islander":                       ['"RP"', '"RE_P"'],
    "Two or More Races":                      ['"RT"', '"RE_T"'],
    "White":                                  ['"RW"', '"RE_W"'],
    "Male":                                   ['"GM"', '"GN_M"'],
    "Female":                                 ['"GF"', '"GN_F"'],
    "Non-Binary Gender (Beginning 2019–20)":  ['"GX"', '"GN_X"'],
    "Missing Gender":                         ['"GZ"', '"GN_Z"'],
    "English Learners":                       ['"SE"', '"SG_EL"', '"ELAS_EL"'],
    "Adult English Learner":                  ['"ELAS_ADEL"'],
    "English Only":                           ['"ELAS_EO"'],
    "Initial Fluent English Proficient":      ['"ELAS_IFEP"'],
    "ELA Missing":                            ['"ELAS_MISS"'],
    "Reclassified Fluent English Proficient": ['"ELAS_RFEP"'],
    "ELA To Be Determined":                   ['"ELAS_TBD"'],
    "Students with Disabilities":             ['"SD"', '"SG_DS"'],
    "Socioeconomically Disadvantaged":        ['"SS"', '"SG_SD"'],
    "Migrant Youth":                          ['"SM"', '"SG_MG"'],
    "Foster Youth":                           ['"SF"', '"SG_FS"'],
    "Homeless Youth":                         ['"SH"', '"SG_HM"'],
    "Total":                                  ['"TA"'],
    "Children enrolled in K-12 grades who are 0 to 3 years old":                           ['"AR_03"'],
    "Students enrolled in K-12 grades who are 4 to 18 years old":                          ['"AR_0418"'],
    "Continuing students enrolled in K-12 grades who are 19 to 22 years old":              ['"AR_1922"'],
    "Non-traditional adult students enrolled in K-12 grades who are 23 to 29 years old":   ['"AR_2329"'],
    "Non-traditional adult students enrolled in K-12 grades who are 30 to 39 years old":   ['"AR_3039"'],
    "Non-traditional adult students enrolled in K-12 grades who are 40 to 49 years old":   ['"AR_4049"'],
    "Non-traditional adult students enrolled in K-12 grades who are 50 or more years old": ['"AR_50P"']
  }

  const codeMapKeys = Object.keys(codeMap) 

  const queryString = codeMapKeys.map((k,i) => {
    let top = (i == 0) ? 'CASE \n' : ''
    let bottom = (i == (codeMapKeys.length - 1)) ? '\n ELSE "Unknown" \n END' : ''

    let items = codeMap[k].map((it, i) => {
        if (i == 0) {
          return `WHEN ${type} = ${it}`
        } else {
          return `${type} = ${it}`
        }
    })

    let joinedItems = items.join(" OR ")

    return top + joinedItems + ` THEN "${k}"` + bottom
  })

  return queryString.join('\n')
}

module.exports = { applyCodeMapping }