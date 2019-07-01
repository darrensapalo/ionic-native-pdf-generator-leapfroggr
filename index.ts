/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name @ionic-native/ P D F Generator
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { @ionic-native/PDFGenerator } from '@ionic-native/ionic-native-pdf-generator';
 *
 *
 * constructor(private @ionic-native/PDFGenerator: @ionic-native/PDFGenerator) { }
 *
 * ...
 *
 *
 * this.@ionic-native/PDFGenerator.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: '@ionic-native/PDFGenerator',
  plugin: 'bpiloans-pdf-generator-leapfroggr', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.PDFGenerator', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class PDFGenerator extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  coolMethod(arg1: string, arg2: number): Observable<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
