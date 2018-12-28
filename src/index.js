import fs from 'fs'
import path from 'path'
import ohm from 'ohm-js'

import Actions from './actions'

const grammar = ohm.grammar(fs.readFileSync(path.resolve(__dirname, './ohm', 'storyscript.ohm')))

export const operationName = 'parse'

export const semantics = () => {
  const semantics = grammar.createSemantics()
  semantics.addOperation(operationName, Actions)
}

export const load = (str) => {

}

/**
 * import load from 'storyscript'
 *
 * const s = 'const a = 1'
 *
 * load(s).then((res)=>{
 *
 * })
 */
