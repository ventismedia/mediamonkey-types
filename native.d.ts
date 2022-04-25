declare class SharedBase{
    /**
    Call defined method with locked data so user can access them.

    @method locked
    @param {method} func Method to call
    */
	locked(func: Function);
    /**
    Gets object from specified index. List needs to be locked before use (see {{#crossLink "SharedBase/locked"}}{{/crossLink}}).

    @method getValue
    @param {integer} index Index of item
    @return {object}
    */
	getValue(index: number): any;
    /**
    Total count of items in list.

    @property count
    @type integer
    */
	count: number;
    /**
    Gets fast access to item at specified index. Note that this call always returns the same JS object, just modifies the internals so that properties/methods work on different data.
    It means, that you shouldn't preserve this object for later use, because it would be modified and the result would be unexpected.

    @method getFastObject
    @param {integer} index Index of the item
    @param {object} object Object to pass
    @return {object}
    */
	getFastObject(index: number, object: any);
}

declare class SharedList extends SharedBase{
	
}

declare class Tracklist extends SharedList {
	
}

declare class ObservableObject {
	notifyChange();
}

declare class App {
	listen(elem: any, event: string, handler: Function, idk?: boolean);
	unlisten(elem: any, event: string, handler: Function, idk?: boolean);
	setValue(key: string, value: any);
	getValue(key: string, defaultValue: any);
	inPartyMode: boolean;
	settings: Settings;
	filesystem: Filesystem;
	tests: any;
	idle();
}

declare class Settings {
	setJSON(a, b); //todo
	getJSON(filter): any;
}

declare class Filesystem {
	
}

declare class BackgroundTasks extends SharedBase {
	
    /**
    OnChange event is called every time something is changed in any background task.</br>
    Available operations:</br>
      'unregistered' - task was removed</br>
      'registered'   - task is just started</br>
      'enabled'      - task is enabled</br>
      'disabled'     - task is disabled</br>
      'textchanged'  - text of the progress was changed</br>
      'progresschanged' - percent of progress was changed</br>
      'descriptionchanged' - description of the progress was changed


    @property onChanged
    @param {string} op Operation performed to task.
    @param {BackgroundTask} task task related do operation. When operation is 'unregistered', ID is returned instead of task
	*/
}

interface Window {
	app: App;
}

declare const app: App;

declare function _(str: string) : string; // translator
declare function ODS(str: string);
declare function _alert(a, b?, c?, d?); // no regular way to define an infinite parameter function, apparently

// SharedWindow
declare class SharedWindow {
	updateDevicePixelRatio: Function;
	applyWindowStates: Function;
	setDock: Function;
	callDialogInit: Function;
	customMenuItemClick: Function;
	identifier: Function;
	setMoveableColor: Function;
	notifyLoaded: Function;
	runJSCode_callback: Function;
	getWindowMonitor: Function;
	getAsyncShowToken: Function;
	setMoveableArea: Function;
	executeCode: Function;
	executeFile: Function;
	activate: Function;
	createOwnWindow: Function;
	setBounds: Function;
	setSize: Function;
	setClientSize: Function;
	minimize: Function;
	maximize: Function;
	restore: Function;
	closeWindow: Function;
	hide: Function;
	show: Function;
	showModal: Function;
	include: Function;
	loadFile: Function;
	_: Function;
	callODS: Function;
	handleEmbeddedWindow: Function;
	setWindowState: Function;
	runCommand: Function;
	getValueInWindowContext: Function;
	setValue: Function;
	getValue: Function;
	notifyOnReady: Function;
	notifyOnClose: Function;
	showDevTools: Function;
	newStringList: Function;
	preventClose: Function;
	_alert: Function;
	messageDlg: Function;
	locked: Function;
	getClassName: Function;
	forceClose: boolean;
	isMainWindow: boolean;
	magnetToWindows: boolean;
	magnetToScreen: boolean;
	systemDevicePixelRatio: number;
	textZoomRatio: number;
	url: string;
	_window: object;
	thisWindow: object;
	headerClass: object;
	inData: string;
	outData: string;
	isMenu: boolean;
	isModal: boolean;
	windowIsLoaded: boolean;
	title: string;
	posSaveName: string;
	resizeable: boolean;
	moveable: boolean;
	toolWindow: boolean;
	bordered: boolean;
	flat: boolean;
	atTop: boolean;
	atTopMost: boolean;
	dockPos: string;
	dockAlign: string;
	fadeTime: number;
	modalResult: number;
	opacity: number;
	active: boolean;
	maximized: boolean;
	minimized: boolean;
	canMinimize: boolean;
	canMaximize: boolean;
	visible: boolean;
	clientWidth: number;
	clientHeight: number;
	builtInMenu: boolean;
	menuJSON: string;
	showAsVideoPlayer: boolean;
	shape: string;
	shapeColor: number;
	addHeader: boolean;
	borderSize: number;
	reloadInProgress: boolean;
	inspectElementSupported: boolean;
	devToolsUrl: string;
	bounds: object;
	statusInfo: any;
	native: boolean
}

declare var thisWindow: SharedWindow;



/**
 * A number which is not a decimal.
 */
 declare type integer = number; 