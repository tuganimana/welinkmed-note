// eslint-disable-next-line no-use-before-define
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel (props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps (index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}
export default function Addresident () {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
    <div className="px-2 py-2">
      <h5 className="font-semibold">Edit Resident Information</h5>
    </div>
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="bg-white text-xs text-black">
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Images" {...a11yProps(1)} />
          <Tab label="Medical Info" {...a11yProps(2)} />
          <Tab label="Insurance Info" {...a11yProps(2)} />
          <Tab label="Emergency Info" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="row">
          <div className="col-sm-6">
            <label>Firstname</label>
            <input type="text" name="" placeholder="type the firstname" className="form-control"/>
          </div>
          <div className="col-sm-6">
            <label>Lastname</label>
            <input type="text" name="" placeholder="type the lastname" className="form-control"/>
          </div>
          <div className="col-sm-6">
            <label>Resident State</label>
            <select className="form-control">
              <option>Select here</option>
              <option>Newyork</option>
              <option>Atlanta</option>
              <option>Maine</option>
              <option>Texas</option>
              <option>Georgia</option>
              <option>Mossachussets</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label> Religion</label>
            <input type="text" name="" placeholder="type the religion" className="form-control"/>
          </div>
          <div className="col-sm-6">
            <label>Maritial Status</label>
            <select className="form-control">
              <option>Select here</option>
              <option>Single</option>
              <option>Divorced</option>
              <option>None of above</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label>Date of Birth</label>
            <input type="date" name="" className="form-control"/>
          </div>
          <div className="col-sm-6">
            <label>Attending Physician</label>
            <select className="form-control">
              <option>Select here</option>
              <option>Karori</option>
              <option>Kewe</option>
              <option>None of above</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label>Added Date</label>
            <input type="date" className="form-control"/>
          </div>
          <div className="col-sm-6">
            <label>Additional Physician</label>
            <select className="form-control">
              <option>Select here</option>
              <option>Karori</option>
              <option>Kewe</option>
              <option>None of above</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label>Admitting Physician</label>
            <select className="form-control">
              <option>Select here</option>
              <option>Karori</option>
              <option>Kewe</option>
              <option>None of above</option>
            </select>
          </div>
          <div className="mb-4">
               <input type="submit" value="Add Resident" className="bg-red-400 cursor-pointer appearance-none  rounded-full w-full ml-32 mt-8 py-2 px-64 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
              <label className="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="row">
          <div className="col-sm-12">
            <label>Drugs & medication</label>
            <input type="text" placeholder="type the medication" className="form-control"/>
          </div>
          <div className="col-sm-12">
            <label>Medication Type</label>
            <input type="text" placeholder="type the medication" className="form-control"/>
          </div>
          <div className="col-sm-12">
            <label>Health A-Z</label>
            <input type="text" placeholder="type the medication" className="form-control"/>
          </div>
          <br></br>
          <div className="mb-4">
                     <input type="submit" value="Add" placeholder="Password" className="bg-red-400 cursor-pointer appearance-none  rounded-full w-full md:ml-32 md:mt-8 md:py-2 px-64 font-medium text-gray-600 leading-tight focus:outline-none hover:bg-green-400 focus:border-green-500" />
          </div>
        </div>
      </TabPanel>
    </div>
    </>
  )
}
