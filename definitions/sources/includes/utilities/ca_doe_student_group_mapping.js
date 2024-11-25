function applyCodeMapping (type) {
  const codeMap = {
    "All Students": ['"001"'],
    "Reported disabilities": ['"128"'],
    "No reported disabilities": ['"099"'],
    "Socioeconomically disadvantaged": ['"031"'],
    "Not socioeconomically disadvantaged": ['"111"'],
    "IFEP, RFEP, and EO (Fluent English proficient and English only)": ['"006"'],
    "IFEP (Initial fluent English proficient)": ['"007"'],
    "RFEP (Reclassified fluent English proficient)": ['"008"'],
    "ELs enrolled less than 12 months": ['"120"'],
    "ELs enrolled 12 months or more": ['"142"'],
    "EL (English learner)": ['"160"'],
    "ADEL (Adult English learner)": ['"243"'],
    "EO (English only)": ['"180"'],
    "Ever–EL": ['"170"'],
    "LTEL (Long-Term English learner)": ['"250"'],
    "AR–LTEL (At-Risk of becoming LTEL)": ['"251"'],
    "Never–EL": ['"252"'],
    "EL TBD (To be determined)": ['"190"'],
    "American Indian or Alaska Native": ['"075"'],
    "Asian": ['"076"'],
    "Black or African American": ['"074"'],
    "Filipino": ['"077"'],
    "Hispanic or Latino": ['"078"'],
    "Native Hawaiian or Pacific Islander": ['"079"'],
    "White": ['"080"'],
    "Two or more races": ['"144"'],
    "American Indian or Alaska Native - Economically Disadvantaged": ['"201"'],
    "Asian - Economically Disadvantaged": ['"202"'],
    "Black or African American - Economically Disadvantaged": ['"200"'],
    "Filipino - Economically Disadvantaged": ['"203"'],
    "Hispanic or Latino - Economically Disadvantaged": ['"204"'],
    "Native Hawaiian or Pacific Islander - Economically Disadvantaged": ['"205"'],
    "White - Economically Disadvantaged": ['"206"'],
    "Two or more races - Economically Disadvantaged": ['"207"'],
    "American Indian or Alaska Native - Not Economically Disadvantaged": ['"221"'],
    "Asian - Not Economically Disadvantaged": ['"222"'],
    "Black or African American - Not Economically Disadvantaged": ['"220"'],
    "Filipino - Not Economically Disadvantaged": ['"223"'],
    "Hispanic or Latino - Not Economically Disadvantaged": ['"224"'],
    "Native Hawaiian or Pacific Islander - Not Economically Disadvantaged": ['"225"'],
    "White - Not Economically Disadvantaged": ['"226"'],
    "Two or more races - Not Economically Disadvantaged": ['"227"'],
    "Female": ['"004"'],
    "Male": ['"003"'],
    "Migrant education": ['"028"'],
    "Not migrant education": ['"029"'],
    "Parent Education - Not a high school graduate": ['"090"'],
    "Parent Education - High school graduate": ['"091"'],
    "Parent Education - Some college (includes AA degree)": ['"092"'],
    "Parent Education - College graduate": ['"093"'],
    "Parent Education - Graduate school/Postgraduate": ['"094"'],
    "Parent Education - Declined to state": ['"121"'],
    "Armed forces family member": ['"050"'],
    "Not armed forces family member": ['"051"'],
    "Homeless": ['"052"'],
    "Not homeless": ['"053"'],
    "Foster youth": ['"240"'],
    "Not foster youth": ['"241"']
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