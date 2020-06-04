
const Scene = require('Scene');
const Patch = require('Patches');
export const Diagnostics = require('Diagnostics');

var textObj = Scene.root.child('Device').child('Camera').child('Focal Distance').child('canvas0').find('mibName');
var imgIdx = Patch.getScalarValue('imageIdx');

imgIdx.monitor().subscribe(val => {
    switch(val.newValue){
        case 0: 
        textObj.text = "You are Agent J";
        break;
        case 1: 
        textObj.text = "You are Agent K";
        break;
        case 2: 
        textObj.text = "You are Ballchinian";
        break;
        case 3: 
        textObj.text = "You are Edgar the Bug";
        break;
        case 4: 
        textObj.text = "You are Frank the Pug";
        break;
        case 5: 
        textObj.text = "You are Jack Jeebs";
        break;
        case 6: 
        textObj.text = "You are Laurel Weaver";
        break;
        case 7: 
        textObj.text = "You are Zed";
        break;

    }
})
