// import React, { Component } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     Image,
//     Dimensions,
//     ScrollView,
//     TouchableOpacity,
// } from 'react-native';
//
// import {
//     Waffle
// } from '../../components/Charts';
//
// import {Pie} from 'react-native-pathjs-charts';
//
// export default class ChartView extends Component {
//   render() {
//       let data = [{
//         "name": "Washington",
//         "population": 7694980
//       }, {
//         "name": "Oregon",
//         "population": 2584160
//       }, {
//         "name": "Minnesota",
//         "population": 6590667
//       }, {
//         "name": "Alaska",
//         "population": 7284698
//       }]
//
//       let options = {
//         margin: {
//           top: 20,
//           left: 20,
//           right: 20,
//           bottom: 20
//         },
//         width: 350,
//         height: 350,
//         color: '#2980B9',
//         r: 50,
//         R: 150,
//         legendPosition: 'topLeft',
//         animate: {
//           type: 'oneByOne',
//           duration: 200,
//           fillTransition: 3
//         },
//         label: {
//           fontFamily: 'Arial',
//           fontSize: 8,
//           fontWeight: true,
//           color: '#ECF0F1'
//         }
//       }
//
//       return (
//         <View>
//           <Pie
//             data={data}
//             options={options}
//             accessorKey="population" />
//         </View>
//       )
//     }
//
//
//   // render() {
//   //   return (
//   //     <Waffle>
//   //     </Waffle>
//   //   );
//   // }
// }
//
// const styles = StyleSheet.create({
//   bg: {
//     height: 400,
//     width: 400,
//     alignSelf: 'stretch',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pacman: {
//     position: 'absolute',
//     width: 0,
//     height: 0,
//     borderTopWidth: 60,
//     borderTopColor: 'red',
//     borderLeftColor: 'red',
//     borderLeftWidth: 60,
//     borderRightColor: 'transparent',
//     borderRightWidth: 60,
//     borderBottomColor: 'red',
//     borderBottomWidth: 60,
//     borderTopLeftRadius: 60,
//     borderTopRightRadius: 60,
//     borderBottomRightRadius: 60,
//     borderBottomLeftRadius: 60,
//   },
//   pacman2: {
//     position: 'absolute',
//     width: 0,
//     height: 0,
//     borderTopWidth: 61,
//     borderTopColor: 'white',
//     borderLeftColor: 'white',
//     borderLeftWidth: 61,
//     borderRightColor: 'transparent',
//     borderRightWidth: 61,
//     borderBottomColor: 'white',
//     borderBottomWidth: 61,
//     borderTopLeftRadius: 61,
//     borderTopRightRadius: 61,
//     borderBottomRightRadius: 61,
//     borderBottomLeftRadius: 61,
//     transform: [{ rotate: '30deg'}]
//   }
// });
