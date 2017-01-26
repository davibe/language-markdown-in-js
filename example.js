import React from 'react'
import markdown from 'markdown-in-js'

const marked = markdown`

# Title

[link](www.dadeb.it)

- and
- a
- list

`

const something = 1
const else = () => {}

export default marked
