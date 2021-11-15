// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { backEndPoints } from '../../../utils/enums'
import { api } from '../../../utils/apiRequest'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'

// useEffect(() => {
//   const [fullname, setFullname] = useState('')
//   const [dob, setDob] = useState('')
//   const [religion, setReligion] = useState('')
//   const [attendingPhysician, setAttendingPhysician] = useState('')
//   useApi.getSingleresident(`/${residentid}`)
//     .then((res:any) => {
//       if (res) {
//         setFullname(`${res.data.firstName} ${res.data.lastName}`)
//         setDob(res.data.dateOfBirth)
//         setReligion(res.data.religion)
//         setAttendingPhysician(res.data.attendingPhysician)
//       }
//     })
//     .catch((error) => {
//       console.log(`${error}`)
//     })
// }, [])
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
    fontSize: 7
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
const Mardata = [
  {
    routine: 'Paracotitamor',
    freq: 'fr31'
  },
  {
    routine: 'Anniveral',
    freq: '2fre'
  },
  {
    routine: 'Hypo nics',
    freq: 'fre0'
  },
  {
    routine: 'Inosa',
    freq: 'fre0'
  },
  {
    routine: 'Marelia',
    freq: 'fre0'
  },
  {
    routine: 'Headache',
    freq: 'fre0'
  }
]

const MarComponents = () => {
  const [residentData, setResidentData] = useState([])
  useEffect(() => {
    const getRsidentData = async () => {
      const urlPath = `${backEndPoints.CREATE_RESIDENT}`
      const response = await api.get(urlPath)
      console.log(response.status)
      if (response.status === 200) {
        setResidentData(response.data.data)
      }
    }
    getRsidentData()
  }, [])
  return (<><Document >
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.content}>
        <View style={styles.contheader}>
          <Text style={styles.title}>SYMBOL KEY:</Text>
        </View>
        <View style={styles.contheader}>
          <Text style={styles.title}>B-</Text>
          <Text style={styles.title}>H-</Text>
          <Text style={styles.title}>L-</Text>
          <Text style={styles.title}>X-</Text>
          <Text style={styles.title}>Q-</Text>
          <Text style={styles.title}>/-</Text>
          <Text style={styles.title}>IS-</Text>
          <Text style={styles.title}>H/H</Text>
          <Text style={styles.title}>NR</Text>
        </View>
        <View style={styles.contheader}>
          <Text style={styles.title}>BED HOLD</Text>
          <Text style={styles.title}>HOSPITAL</Text>
          <Text style={styles.title}>LEAVE OF ABSENCE</Text>
          <Text style={styles.title}>NOT DUE</Text>
          <Text style={styles.title}>NOT ADMINISTERED See Notes</Text>
          <Text style={styles.title}>MISSED DOSE</Text>
          <Text style={styles.title}>SELF ADMINISTERED</Text>
          <Text style={styles.title}>HOME HEALTH</Text>
          <Text style={styles.title}>NOT RECORDED</Text>
        </View>
        <View style={styles.contheader}>
          <Text style={styles.site}>SITE KEY:</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColTitle}>
              <Text style={styles.tableCellContent}>Routine Med Order</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContent}>Freq.</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>2</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>3</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>4</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>5</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>6</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>7</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>8</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>9</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>10</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>11</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>12</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>13</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>14</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>15</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>16</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>17</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>18</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>19</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>20</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>21</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>22</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>23</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>24</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>25</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>26</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>27</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>28</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>29</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>30</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>31</Text>
            </View>
          </View>
          {
    Mardata.map((items:any, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.tableColTitle}>
                <Text style={styles.tableCellContent}>{items.routine}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>{items.freq}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>1</Text>
            </View>
          </View>))
      }
      <View style={styles.tableRow}>
        <View style={styles.tableColTitle}>
          <Text style={styles.tableCellContent}>Routine Med Order</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCellContent}>Freq.</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>1</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>2</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>3</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>4</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>5</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>6</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>7</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>8</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>9</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>10</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>11</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>12</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>13</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>14</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>15</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>16</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>17</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>18</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>19</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>20</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>21</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>22</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>23</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>24</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>25</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>26</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>27</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>28</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>29</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>30</Text>
        </View>
        <View style={styles.tableCol}>
            <Text style={styles.tableCell}>31</Text>
        </View>
      </View>
        </View>
      </View>
      {
              residentData.map((item:any, index) => {
                return (
                    <View key={index} style={styles.content}>
                        <View style={styles.contButton}>
                        <Text style={styles.buttontitle}>Resident: {item.fullname}</Text>
                        <Text style={styles.buttontitle}>DOB: {item.dob}</Text>
                        <Text style={styles.buttontitle}>Diet: </Text>
                        </View>
                        <View style={styles.contButton}>
                        <Text style={styles.buttontitle}>MedRecNo:</Text>
                        <Text style={styles.buttontitle}>Physician: {item.religion}</Text>
                        </View>
                        <View style={styles.contButton}>
                        <Text style={styles.buttontitle}>Benchmark Valley</Text>
                        <Text style={styles.buttontitle}>Allergies: None</Text>
                        </View>
                        <View style={styles.contButton}>
                        <Text style={styles.buttontitle}>Location: {item.attendingPhysician}</Text>
                        <Text style={styles.buttontitle}>Diagnosis: None</Text>
                        </View>
                    </View>
                )
              })
            }
      <View style={styles.content}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColTitle}>
              <Text style={styles.tableCellContent}>PRN Medications</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContent}>Freq.</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>2</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>3</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>4</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>5</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>6</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>7</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>8</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>9</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>10</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>11</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>12</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>13</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>14</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>15</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>16</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>17</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>18</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>19</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>20</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>21</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>22</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>23</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>24</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>25</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>26</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>27</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>28</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>29</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>30</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCell}>31</Text>
            </View>
          </View>
          {
    Mardata.map((items:any, index) => (
          <><View key={index} style={styles.tableRow}>
            <View style={styles.tableColTitle}>
                <Text style={styles.tableCellContent}>{items.routine}</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>Date</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentPink}>0</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>1</Text>
            </View>
            <View style={styles.tableCol}>
                <Text style={styles.tableCellContentWhite}>1</Text>
            </View>
        </View><View key={index} style={styles.tableRow}>
                <View style={styles.tableColTitle}>
                    <Text style={styles.tableCellContent}></Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>Time</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
            </View>
            <View key={index} style={styles.tableRow}>
                <View style={styles.tableColTitle}>
                    <Text style={styles.tableCellContent}></Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>Initial</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
            </View>
            <View key={index} style={styles.tableRow}>
                <View style={styles.tableColTitle}>
                    <Text style={styles.tableCellContent}></Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>Result</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
            </View><View key={index} style={styles.tableRow}>
                <View style={styles.tableColTitle}>
                    <Text style={styles.tableCellContent}></Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>QTY</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentPink}>0</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCellContentWhite}>1</Text>
                </View>
            </View></>))
      }
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.tablered}>
          <View style={styles.tableRow}>
            <View style={styles.tableColNit}>
              <Text style={styles.tableCellNit}>NIT</Text>
            </View>
            <View style={styles.tableColSig}>
                <Text style={styles.tableCellSig}>Full Signature And Title</Text>
            </View>
            <View style={styles.tableColNit}>
              <Text style={styles.tableCellNit}>NIT</Text>
            </View>
            <View style={styles.tableColSig}>
                <Text style={styles.tableCellSig}>Full Signature And Title</Text>
            </View>
            <View style={styles.tableColNit}>
              <Text style={styles.tableCellNit}>NIT</Text>
            </View>
            <View style={styles.tableColSig}>
                <Text style={styles.tableCellSig}>Full Signature And Title</Text>
            </View>
            <View style={styles.tableColNit}>
              <Text style={styles.tableCellNit}>NIT</Text>
            </View>
            <View style={styles.tableColSig}>
                <Text style={styles.tableCellSig}>Full Signature And Title</Text>
            </View>
            <View style={styles.tableColNit}>
              <Text style={styles.tableCellNit}>NIT</Text>
            </View>
            <View style={styles.tableColSig}>
                <Text style={styles.tableCellSig}>Full Signature And Title</Text>
            </View>
            <View style={styles.tableColNit}>
              <Text style={styles.tableCellNit}>NIT</Text>
            </View>
            <View style={styles.tableColSig}>
                <Text style={styles.tableCellSig}>Full Signature And Title</Text>
            </View>
          </View>
          {
    Mardata.map((items:any, index) => (
        <View key={index} style={styles.tableRow}>
        <View style={styles.tableColNit}>
          <Text style={styles.tableCellContentWhite}>NIT</Text>
        </View>
        <View style={styles.tableColSig}>
            <Text style={styles.tableCellContentWhite}>Signature </Text>
        </View>
        <View style={styles.tableColNit}>
          <Text style={styles.tableCellContentWhite}>NIT</Text>
        </View>
        <View style={styles.tableColSig}>
            <Text style={styles.tableCellContentWhite}>Signature</Text>
        </View>
        <View style={styles.tableColNit}>
          <Text style={styles.tableCellContentWhite}>NIT</Text>
        </View>
        <View style={styles.tableColSig}>
            <Text style={styles.tableCellContentWhite}>Signature</Text>
        </View>
        <View style={styles.tableColNit}>
          <Text style={styles.tableCellContentWhite}>NIT</Text>
        </View>
        <View style={styles.tableColSig}>
            <Text style={styles.tableCellContentWhite}>Signature</Text>
        </View>
        <View style={styles.tableColNit}>
          <Text style={styles.tableCellContentWhite}>NIT</Text>
        </View>
        <View style={styles.tableColSig}>
            <Text style={styles.tableCellContentWhite}>Signature</Text>
        </View>
        <View style={styles.tableColNit}>
          <Text style={styles.tableCellContentWhite}>NIT</Text>
        </View>
        <View style={styles.tableColSig}>
            <Text style={styles.tableCellContentWhite}>Signature</Text>
        </View>
      </View>))
      }
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contButton}>
          <Text style={styles.buttontitle}>Resident: HODAL BIZIMNGU</Text>
          <Text style={styles.buttontitle}>DOB: 4/22/1967</Text>
          <Text style={styles.buttontitle}>Diet: None</Text>
        </View>
        <View style={styles.contButton}>
          <Text style={styles.buttontitle}>MedRecNo:</Text>
          <Text style={styles.buttontitle}>Physician: Unknown</Text>
        </View>
        <View style={styles.contButton}>
          <Text style={styles.buttontitle}>Benchmark Valley Behavioral Home</Text>
          <Text style={styles.buttontitle}>Allergies: None</Text>
        </View>
        <View style={styles.contButton}>
          <Text style={styles.buttontitle}>Location: Benchmark Valley Behavioral Home Branham</Text>
          <Text style={styles.buttontitle}>Diagnosis: None</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contheader}>
          <Text style={styles.title}>Medication Notes</Text>
          <Text style={styles.title}>See PRN section for verifying</Text>
          <Text style={styles.title}>Signatures</Text>
        </View>
        <View style={styles.contheader}>
          <Text style={styles.title}>Instructions:</Text>
          <Text style={styles.title}>A</Text>
          <Text style={styles.title}>B</Text>
        </View>
        <View style={styles.contheader}>
          <Text style={styles.title}>.</Text>
          <Text style={styles.title}>SUGGEST REFUSED/WITHHELD MEDICATION</Text>
          <Text style={styles.title}>WHEN PRN MEDICATIONS ARE GIVEN, EXPLAIN</Text>
        </View>
        <View style={styles.contheader}>
          <Text style={styles.title}>SITE KEY:</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Date</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Time</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Init</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Drug-Strength-Dosage</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Site</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Ob</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Date</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Time</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Init</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Drug-Strength-Dosage</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Site</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCell}>Ob</Text>
            </View>
          </View>
          {
    Mardata.map((items:any, index) => (
        <View key={index} style={styles.tableRow}>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>12/2/2021</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>9:00</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>Init</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>Drug</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>Site</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>Ob</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>12/2/2021</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>9:00</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>Init</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>Drug</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>Site</Text>
            </View>
            <View style={styles.tableColB}>
              <Text style={styles.tableCellContentWhite}>Ob</Text>
            </View>
          </View>))
      }
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contButton}>
          <Text style={styles.buttontitle}>Resident: HODAL BIZIMNGU</Text>
          <Text style={styles.buttontitle}>DOB: 4/22/1967</Text>
          <Text style={styles.buttontitle}>Diet: None</Text>
        </View>
        <View style={styles.contButton}>
          <Text style={styles.buttontitle}>MedRecNo:</Text>
          <Text style={styles.buttontitle}>Physician: Unknown</Text>
        </View>
        <View style={styles.contButton}>
          <Text style={styles.buttontitle}>Benchmark Valley Behavioral Home</Text>
          <Text style={styles.buttontitle}>Allergies: None</Text>
        </View>
        <View style={styles.contButton}>
          <Text style={styles.buttontitle}>Location: Benchmark Valley Behavioral Home Branham</Text>
          <Text style={styles.buttontitle}>Diagnosis: None</Text>
        </View>
      </View>
    </Page>
  </Document>

  </>
  )
}
const MarComponent = () => {
  return (<>
       <PDFViewer width="100%" height="100%">
            <MarComponents/>
         </PDFViewer>

  </>
  )
}

export default MarComponent
