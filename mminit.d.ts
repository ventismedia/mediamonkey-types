declare function requirejs(files: string, callback?: Function, isolate?: boolean, local?: boolean, reload?: boolean);
declare function localRequirejs(files: string, callback?: Function, isolate?: boolean): void;
declare function setIconFast (div: HTMLElement, icon: SVGElement);
declare function setIconAriaLabel (div: HTMLElement, label: string);
declare function setVisibility (element: HTMLElement, visible: boolean, params?: object);
declare function isFunction(x: any): boolean;
declare function notifyLayoutChangeDown(elem: HTMLElement);
declare function notifyLayoutChangeUp(elem: HTMLElement);
declare function passiveSupported(): boolean;
declare function addPassiveOption(capture: any): any;
declare function alertInetException(url: string, error: any);
declare function myAlert(str: string);
declare function alertException(exception, addedInfo);
declare function getMessageWithStack(exception);
declare function getDocumentBody(): HTMLElement;
declare function assert(condition: any, message: string);
declare function asyncLoop(fn: Function, valFrom: number, token: object, finishedCallback: Function);
declare function asyncGenerator(fn: Function): Promise<any>;
declare function fixFile(fname: string): string;
declare function createNewCustomEvent(eventName: string, params?: any): Event;
declare function createNewEvent(eventName: string): Event;
declare function updateLoadedFile(fname, content);
declare function loadFile(fname: string, callback?: Function, params?: any): string;
declare function getValueAtIndex(list: SharedList, index: number);
declare function requestTimeout(callback: Function, time: number);
declare function assignProperties(target: any, source: any);
declare function getFrameRenderDuration(): number;
declare function filterTag(nodeList: ArrayLike): Array;
declare function filterCondition(nodeList: ArrayLike): Array;
declare function reloadScript(fn: string): void;
declare function loalListen(eventObject: Element, eventName: string, eventMethod: Function, eventCapture?: boolean): void;
declare function unlistenLocalListeners(): void;
declare function localPromise(promise: PromiseLike): PromiseLike;
declare function cleanUpLocalPromises(): void;

declare function queryLayoutAfterFrame(callback: Function): void;
declare function applyStylingAfterFrame(callback: Function): void;
declare function _applyLayoutQueryCallbacks(): void;
declare function _applyStylingCallbacks(): void;
declare var _callbacksQueue = {
	frameCallbacks: {}, // JL note: maybe this needs to be removed
	layoutQueryCallbacks: [],
	stylingCallbacks: []
}

declare function cleanupDocument(): void;
declare function cleanControlClass(e: HTMLElement|Node): void;

/**
Removes an element from DOM in a safe way, cleaning all its controls (including descendants).

@method removeElement
@param {HTMLElement} e Element to remove
@param {boolean} [hideParentWhenNoChild] Whether to hide the element's parentNode if it contains no additional children.
*/
declare function removeElement(e: HTMLElement, hideParentWhenNoChild?: boolean): void;


/**
Removes all children elements of the given element. Unlike cleanElement() function, it doesn't clean all inner controls and so it's an optimized version 
used when there aren't controls used (otherwise, it would leave memore leaks).

@method cleanBasicElement
@param {HTMLElement} e Element to clean
@return {HTMLElement} The same element
*/
declare function cleanBasicElement(e: HTMLElement): HTMLElement;


/**
Removes all children elements of the given element. Note that it uses e.removeChild() method in a loop, which is much faster than e.innerHTML=''.
Also calls cleanElement for all descendant controls.

@method cleanElement
@param {HTMLElement} e Element to clean
@param {Boolean} [onlyChildren] Default false, cleans only children of e if set to 'true'.
@return {HTMLElement} The same element
*/
declare function cleanElement(e: HTMLElement, onlyChildren?: boolean): HTMLElement|undefined;


/**
Returns control inside which this element is contained.

@method elementControl
@param {HTMLElement} el Element to check
@return {Control} Control found (or undefined).
*/
declare function elementControl(el?: HTMLElement): Control|undefined;


/**
Our version of requestAnimationFrame which respects window visibility and drops calling to 2 calls pers second when window is not visible
and reduce to 30FPS when window is not active.

@method requestAnimationFrameMM
@param {Function} [callback] Function to be called
*/
declare function requestAnimationFrameMM(callback: Function);

/**
 * Request an animation frame to run, with the same features as {{#crossLink "Window/requestAnimationFrameMM:method"}}requestAnimationFrameMM{{/crossLink}} but automatically stops if the user has closed the window.
 * @param {function} callback Callback to execute.
 * @method requestFrame
 */
declare function requestFrame(callback: Function);

/**
 * <b>[ADDED IN VERSION 5.0.3]</b><br> Cancel a frame returned by window.requestFrame() or window.requestAnimationFrameMM(). 
 * Because the token type of requestAnimationFrameMM can either be that of a Timeout or an AnimationFrame, you must use this method instead of cancelAnimationFrame() to guarantee that it is cancelled.
 * @example
 * 
 *      var token = requestFrame(myCall);
 *      cancelFrame(token);
 * @method cancelFrame
 * @param {number} token 
 */
 declare function cancelFrame(token: number): void;


/**
Loads a specific SVG file from 'skin/icon' folder. Handles duplicate requests and asynchronous loading. Instead of returning the SVG code, this method provides a live DOM element, which is faster.

Doesn't need to be called directly as it's automatically used by HTML like

	<div data-icon=’closeTab’></div>

The loaded icon can be further styled by CSS, e.g.

	fill: red;

@method loadIconFast
@param iconName {string} Name of the icon to load, without extension, e.g. 'close'.
@param {function} [callback] Function to call, when icon content is loaded.
@return {SVGElement} SVG element.
*/
declare function loadIconFast(iconName: string, callback?: Function): SVGElement;

/**
Loads a specific SVG file from 'skin/icon' folder. Handles duplicate requests and asynchronous loading. Returns the SVG code, not a live DOM element.

Doesn't need to be called directly as it's automatically used by HTML like

	<div data-icon=’closeTab’></div>

The loaded icon can be further styled by CSS, e.g.

	fill: red;

@method loadIcon
@param iconName {string} Name of the icon to load, without extension, e.g. 'close'.
@param [callback] {function} Function to call, when icon content is loaded.
@return {string} SVG code. Use innerHTML to create the icon.
*/
declare function loadIcon(iconName: string, callback: function): string;

/**
Returns class with all named elements inside the specified rootElement (document is used when not defined) to direct access.
Script can then do not need to call qid for any named element. 
@example

    var UI = getAllUIElements();
    UI.lvTracklist.controlClass.dataSource = data;

@method getAllUIElements
@param {HTMLElement} root element
@return {UIElements} class with named elements
*/
declare function getAllUIElements(rootElement?: HTMLElement);

/**
Returns the first document element for the selector. It's recommended to use more specific functions when possible, e.g. {{#crossLink "Window/qid:method"}}{{/crossLink}}, since its
faster than a generic selector usage.

@method q
@param s {String} Selector
@return {HTMLElement} Element found
*/
declare function q(s: string): HTMLElement;

/**
Returns all document elements for the selector.

@method qs
@param s {String} Selector
@return {NodeListOf<HTMLElement>} Elements found
*/
declare function qs(s: string): NodeListOf<HTMLElement>

/**
Returns the first document element for the given ID.

@method qid
@param id {String} ID of the requested element
@return {HTMLElement} Element found
*/
declare function qid(id: string): HTMLElement;

/**
Returns all elements for the given class.

@method qclass
@param cls {String} Class name of the requested elements
@return {HTMLCollectionOf<Element>} Elements found
*/
declare function qclass(cls: string): HTMLCollectionOf<Element>;

/**
Returns all elements for the given class, starting from a particular element.
@method qeclass
@param {HTMLElement} e Element to search within
@param {string} cls Class name of the requested elements
@returns {HTMLCollectionOf<Element>} Elements found
 */
declare function qeclass(e: HTMLElement, cls: string): HTMLCollectionOf<Element>;

/**
Returns all elements for a given tag name
@method qtag
@param {string} tg Tag name
@returns {HTMLCollectionOf<Element>} Elements found
 */
declare function qtag(tg: string): HTMLCollectionOf<Element>;

/**
Returns all elements for the tag name that are descendants of the given element
@method qetag
@param {HTMLElement} e Element to search within
@param {string} tg Tag name
@returns {HTMLCollectionOf<Element>} Elements found
 */
declare function qetag(e: HTMLElement, tg: string): HTMLCollectionOf<Element>;

/**
Returns the first element matching the selector (that is subnode of the given element)
@method qe
@param {HTMLElement|Document} e Element to search within
@param {string} s Query selector
@returns {HTMLElement} Found element
 */
declare function qe(e: HTMLElement|Document, s: string): HTMLElement;

/**
Returns all elements for the given selector that are subnodes of the given element.
@method qes
@param {HTMLElement|Window|Document} e Element to search within
@param {string} s Query selector
@returns {HTMLCollectionOf<Element>|NodeListOf<HTMLElement>} Found elements
 */
declare function qes(e: HTMLElement|Window|Document, s: string): HTMLCollectionOf<Element>|NodeListOf<HTMLElement>;

/**
Returns the first descendant element of the given element matching the given data ID.
@method qeid
@param {HTMLElement} e Element to search within
@param {string} id data-id of the requested element
@returns {Element} Found element
 */
declare function qeid(e: HTMLElement, id: string): HTMLElement;

/**
Execute a callback function for every element in an array.
@example

    forEach(arr, function (item, idx) { ... });
@method forEach
@param {Array} nodeList List to iterate through
@param {function} callback Callback (It is passed each item of nodeList and its index)
 */
declare function forEach(nodeList: Array, callback: Function);

/**
Execute a callback function for every item in a SharedList, using getFastObject.
@example
 
     fastForEach(tracklist, function (item, idx) { ... });
@method fastForEach
@param {SharedList} list The list to iterate (e.g. songs, albums, etc.)
@param {function} callback Callback (It is passed each item of the list and its index)
 */
declare function fastForEach(list: SharedList, callback: Function);

/**
Get a comma-separated list of IDs of a SharedList.
@method listGetCommaIDs
@param {SharedList} list The list object
@param {Number} maxCount Max number of items (If there are more, it will be truncated with a ...)
@returns {string} Comma-separated list
 */
declare function listGetCommaIDs(list: SharedList, maxCount: number);

/**
Execute a callback function for every item in a SharedList, using getValue.
@example
 
     listForEach(tracklist, function (item, idx) { ... });
@method listForEach
@param {SharedList} list The list to iterate (e.g. songs, albums, etc.)
@param {function} callback Callback (It is passed each item of the list and its index)
@param {function} [final_callback] Callback to be executed after all items have been gone through
 */
declare function listForEach(list: SharedList, callback: Function, final_callback?: Function);

/**
Asynchronously process each item in an array.
@example

    asyncForEach(arr, function (item, next) {
        ...
        next();
    });
@method asyncForEach
@param {Array} list Array to process
@param {function} next_item_callback Callback for each item. Parameter 2 is the callback function to process the next item. Parameter 3 is item index.
@param {function} [final_callback] Final callback after everything has been done.
 */
declare function asyncForEach(list: Array, next_item_callback: Function, final_callback?: Function);

/**
Asynchronously process each item in a SharedList or ArrayDataSource.
@example 

    listAsyncForEach(tracklist, function (item, next) {
        ...
        next();
    });
@method listAsyncForEach
@param {SharedList|ArrayDataSource} list Array to process
@param {function} next_item_callback Callback for each item. Parameter 2 is the callback function to process the next item. Parameter 3 is item index.
@param {function} [final_callback] Final callback after everything has been done.
 */
declare function listAsyncForEach(list: SharedList|ArrayDataSource, next_item_callback: Function, final_callback?: Function);

/**
<b>[ADDED IN VERSION 5.0.1]</b><br> For screen reader support: Sets a focused element's active descendant. Required for keyboard navigation to work properly with screen readers. <br>
Gives the div a unique ID and sets the parent's aria-activedescendant. Use in conjunction with ARIA roles: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques <br>
The parent element must have a role (for example: table) as well as the active element (for example: row)

@method setAriaActiveDescendant
@param {Element} div The div which is active
@param {Element} parent The parent element which is focused
 */
declare function setAriaActiveDescendant(div: HTMLElement, parent: HTMLElement);

/**
<b>[ADDED IN VERSION 5.0.1]</b><br> For screen reader support: Clears the element's unique ID.
@method clearAriaID
@param {HTMLElement} div The div which is no longer active
 */
declare function clearAriaID(div: HTMLElement);
/**
 * Resolve anything to a defined value. If a function is provided, then the return of that function is returned.
 * @param {any} property Property to resolve.
 * @param {any} [whenUndefined] Default value if undefined.
 * @param {any} [params] Parameters to apply, if property is a function.
 * @param {any} [bindObj] Object to bind, if the "this" property needs to be accessible.
 * @returns 
 */
declare function resolveToValue(property: any, whenUndefined: any, params: any, bindObj: any): any;


declare var settings: WindowSettings;
declare var fullWindowModeActive: boolean;
declare var webApp: boolean;
declare var oneSourceApp: boolean;
declare var isStub: boolean;
declare var opera: boolean;
declare var chrome: boolean;
declare var rootURL: string;
declare var isMainWindow: boolean;
declare var qUnit: boolean;
declare var _cleanUpCalled: boolean;
declare var reloading: boolean;
declare var __scriptName: string|undefined;
declare var customLoader: any;

interface Document {
	documentMode: boolean;
}

declare class WindowSettings{
	browser: any;
	disableCache: boolean;
	UI: any;
	init: Function;
	get: Function;
	set: Function;
	clearCache: Function;
}

interface Promise<T> {
	canceled: boolean;
}

declare class RegExp {
	constructor(pattern?: string, arg2?, arg3?)
}

/**
 * getAllUIElements returns an object with unknown keys but known values.
 */
interface UIElements extends Object {
	[key: string]: HTMLElement;
}

declare var InstallTrigger: any; // firefox
declare var extendedFixFile: Function|undefined;