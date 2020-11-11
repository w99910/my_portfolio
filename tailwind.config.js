module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins'],
        mono:['Syne Mono'],
      },
      colors:{
        primary:'#4F9783',
          deepOrange:'#FACF5A',
        deepGreen:{
          100:'#44E99C',
          200:'#085F63'},
        deepBlue:{100:'#4B89AC',200:'#2D7285'},

      },
      height:{
        '1/2':'50%',
        '5/7':'71.4285%',
        '12/10':'120%',
        '1/3':'35%',
        '8/10':'85%',
        '2/10':'15%',
      },
      width:{
        '12/10':'120%',
      },
      translate: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
  variants: {},
  plugins: [],
}
