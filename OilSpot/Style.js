// NOTE regex example styles\.btn[^a-z_]
import { StyleSheet } from 'react-native';
const globals = require('./Globals.js')
const c = globals.Colors;

//https://coolors.co/5c7474-5ca5e9-c4ee62-ec9366-f4efe7

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 9,
    // paddingTop: 18,
  },
  content: {
    flex: 5,
    alignItems: 'center',
    width: '100%',
  },
  containerContent: {
    alignItems: 'center',
    width: '100%',
  },
  containerWithoutAlign: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: 9,
    paddingTop: 18,
  },
  //primary button (e.g. main menu, modal)
  btn: {
    marginTop: 12,
    padding: 12,
    paddingRight: 33,
    paddingLeft: 33,
    // backgroundColor: '#eee',
  },
  //primary button text (e.g. main menu, modal)
  btn_text: {
    fontSize: 18,
    letterSpacing: 9,
  },
  //secondary button (e.g. units)
  btnSec: {
    // paddingTop: 8, //fixed Flowrate units display issue on iPad 9.7" 
    marginTop: -5,
    marginBottom: -10, //fixed Flowrate units display issue on iPad 9.7" 
  },
  //secondary button text (e.g. units)
  btnSec_text: {
    alignItems: 'center',
    marginBottom: 7,  // is this going to look good on all screens?
  },
  // 'list'/'row' item
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 5,
  },
  textInput: {
    textAlign: 'right',
    marginLeft: 12,
    marginRight: 12,
    padding: 7,
    paddingRight: 14,
    paddingBottom: 4,
    borderRadius: 7,
    height: 39,
  },

  // FONT SIZE
  font: { fontSize: 22, },
  font_bigger: { fontSize: 26, },
  font_biggest: { fontSize: 46, }, //36
  font_smallest: { fontSize: 12, },
  // FONT STYLE
  font_bold: {
    fontWeight: 'bold',
  },
  font_spaced: {
    letterSpacing: 50,
  },
  fontFamily_accent: {
    fontFamily: 'Avenir-Oblique',
  },
  // TEXT ALIGNMENT
  text_left: { textAlign: 'left', },
  text_center: { textAlign: 'center', },
  text_right: { textAlign: 'right', },
  // FLEX SIZE
  flex_1: { flex: 1, },
  flex_2: { flex: 2, },
  flex_3: { flex: 3, },
  flex_4: { flex: 4, },
  flex_5: { flex: 5, },
  flex_6: { flex: 6, },
  // SIZE
  width_full: {
    width: '90%',
  },
  // LOCATION 
  bottom: {
    position: 'absolute',
    bottom: 14,
  },
  // COLORS
  //  NIGHT MODE
  color_font_primary: { color: c.black[4], },
  color_font_secondary: { color: c.black[1], },
  color_font_accent: { color: c.green[3], },
  color_font_selected: { color: c.green[1], fontWeight: 'bold', },
  color_btn_primary: { backgroundColor: c.black[3], },
  color_btn_secondary: { backgroundColor: c.black[1], },
  color_btn_disabled: { backgroundColor: c.black[2], },
  color_background_primary: { backgroundColor: c.black[1], },
  color_background_secondary: { backgroundColor: c.black[0], },
  //  DAY MODE
  // color_font_primary: { color: '#111', },
  // color_font_secondary: { color: '#eee', },
  // color_font_accent: { color: '#3eacab', },
  // color_font_selected: { color: '#199', fontWeight: 'bold', },
  // color_btn_primary: { backgroundColor: '#111', },
  // color_btn_secondary: { backgroundColor: '#eee', },
  // color_btn_disabled: { backgroundColor: '#777', },
  // color_background_primary: { backgroundColor: '#eee', },
  // color_background_secondary: { backgroundColor: '#fff', },

  //TODO - ensure compatibility with different devices / redesign
  //FormulaView
  spacing: {
    flex: 3,
    // height: 290,
    // marginTop: 9,
    // backgroundColor: '#444',
  },




  // TODO - eliminate class; refactor into separate classes
  //FormulaItem and UnitConverterItem
  parameter: {
    flex: 5,
    // color: '#eee',
    textAlign: 'right',
    // textTransform: 'upper-case',
    // flexWrap: 'wrap',
  },
  // TODO - eliminate class; refactor into separate classes
  modalView: {
    backgroundColor: c.black[2],
    justifyContent: 'center',
    height: '100%',
    padding: 44,
  },
  //UnitConverter
  // TODO - eliminate class; refactor into separate classes
  parameterName: {
    fontSize: 21,
    textAlign: 'center',
    margin: 9,
  },

});

module.exports = styles;
