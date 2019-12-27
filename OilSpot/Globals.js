globals = {
  aVariable: "a variable!",
  Item: class Item {  //never stores value
    constructor(displayName, units) {
      this.displayName = displayName;
      this.units = units; //array of possible units 
    }
    getDisplayName() {
      return this.displayName;
    }
    getUnits() {
      return this.units;
    }
  },
  Colors: {
    //https://coolors.co/5c7474-5ca5e9-c4ee62-ec9366-f4efe7
    black    : ['#000','#222','#777','#EEE','#FFF'],
    darkGreen: ['#000E0E','#001C1C','#002626','#5C7474','#B9C3C3'],
    blue     : ['#002A51','#0053A1','#0072DD','#5CA5E9','#B9D8F5'],
    green    : ['#3C5404','#77A707','#A3E509','#C4EE62','#E5F7BB'],
    orange   : ['#532006','#A53F0B','#E2560F','#EC9366','#F7D0BD'],
  }
}

module.exports = globals;
