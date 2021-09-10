// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})
const MarComponents = () =>
<> <Document >
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.section}>
        <Text>Welink LLC</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>

  </>

const MarComponent = () => {
  return (<>
       <PDFViewer width="100%" height="100%">
            <MarComponents/>
         </PDFViewer>

  </>
  )
}

export default MarComponent
