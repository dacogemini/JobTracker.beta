function selectionModel() {

    var selection = "";
    var removeFlag = false; //helps to identify whether this particular task should be deleted or not.

    this.setselection = function (selectionName) { // binds an object property to a function to be called when there is an attempt to set that property.
        selection = selectionName;
    }

    this.getselection = function () { //binds an object property to a function that will be called when that property is looked up.
        return selection;
    }

    this.setFlag = function (flag) {
        removeFlag = flag;
    }

    this.getFlag = function () {
        return removeFlag;
    }

}