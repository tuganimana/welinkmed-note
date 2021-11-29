/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { api } from '../../../../utils/apiRequest'
import { backEndPoints } from '../../../../utils/enums'
import { StyleSheet, Text, View } from '@react-pdf/renderer'
const styles = StyleSheet.create({
  page: {
    padding: 5,
    backgroundColor: '#E4E4E4'
  },
  content: {
    flexDirection: 'row',
    margin: 2,
    paddingTop: 8
  },
  contheader: {
    padding: 10
  },
  contButton: {
    marginRight: 40
  },
  title: {
    color: 'green',
    fontSize: 10,
    fontWeight: 50
  },
  buttontitle: {
    color: 'black',
    fontSize: 9
  },
  site: {
    color: 'red',
    fontSize: 10
  },
  table: {
    display: 'flex',
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tablered: {
    display: 'flex',
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    flexDirection: 'row'
  },
  tableCol: {
    width: '10%',
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColData: {
    width: '302%',
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColB: {
    width: '20%',
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColSig: {
    width: '12%',
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColTitle: {
    width: '40%',
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableColNit: {
    width: '5%',
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCellNit: {
    color: 'white',
    backgroundColor: 'red',
    padding: 2,
    fontWeight: 20,
    fontSize: 7
  },
  tableCellSig: {
    color: 'white',
    backgroundColor: 'red',
    padding: 2,
    fontSize: 7
  },
  tableCellContent: {
    color: 'green',
    backgroundColor: 'white',
    padding: 2,
    fontWeight: 20,
    fontSize: 7
  },
  tableCellContentPink: {
    color: 'black',
    backgroundColor: 'pink',
    padding: 2,
    fontSize: 6
  },
  tableCellContentWhite: {
    color: 'black',
    backgroundColor: 'white',
    padding: 2,
    fontSize: 7
  },
  tableCell: {
    color: 'white',
    backgroundColor: 'green',
    padding: 2,
    fontSize: 7
  }
})

export default function AdministeredUser (props:any) {
  const [AdministerOrder, setAdministerOrder] = useState([])
  useEffect(() => {
    const getAllAdministerOrder = async () => {
      const urlPath = `${backEndPoints.CHECK_ADMINISTER}/${props.orderId}`
      try {
        const response = await api.get(urlPath)
        // console.log(response.data)
        if (response.data !== null) {
          setAdministerOrder(response.data)
        }
      } catch (error) {}
    }
    getAllAdministerOrder()
  }, [])
  return (<>
                 {
    AdministerOrder.map((item:any, index) => {
      return (
        <View key={index}>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.time}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day1}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day2}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day3}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day4}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day5}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day6}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day7}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day8}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day9}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day10}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day11}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day2}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day13}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day14}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day15}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day16}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day17}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day18}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day19}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day20}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day21}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day22}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day23}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day24}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day25}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day26}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day27}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day28}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day29}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day30}</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>{item.day31}</Text>
                </View>
              </View>
              </View>
      )
    }
    )
        }
  </>)
}
