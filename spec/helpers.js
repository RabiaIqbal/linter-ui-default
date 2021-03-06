/* @flow */

import { $range, $file } from '../src/helpers'

export function getMessage(type: ?string = 'Error', filePath: ?string, range: ?Object): Object {
  const message = {
    type,
    text: 'Some Message',
    filePath,
    range,
    version: 1,
  }
  Object.defineProperty(message, $file, {
    get: () => message.filePath,
  })
  Object.defineProperty(message, $range, {
    get: () => message.range,
  })

  return message
}

export function getLinter(): Object {
  return {
    name: 'some',
    grammarScopes: [],
    lint() {},
  }
}

export function dispatchCommand(target: Object, commandName: string) {
  atom.commands.dispatch(atom.views.getView(target), commandName)
}
