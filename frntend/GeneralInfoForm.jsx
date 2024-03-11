import React from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const GeneralInfoForm=()=> {
    return (
        <div style={{ marginLeft: '5%', marginRight: '5%'}}>
            <Card border="light" className="bg-white shadow-sm mb-4" style={{padding: '2%'}}>
            <h1>General Info</h1>
            <form>
            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>First Name</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="Tanvanth"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Last Name</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="AVS"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Birthday</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="02/07/2003"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Gender</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="Male"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Email</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="tanvanthsenthil@gmail.com"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Phone no</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="8438063783"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <h1>Address</h1>

            <Grid container spacing={2} direction="row">
                <Grid item xs={10} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Address</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="15, ASD Puram, Pollachi"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2} style={{minWidth: '400px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Resident Type</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="Permanent"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={2} direction="row">
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Email</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="727721eucs164@skcet.ac.in"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Phone no</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="8438063783"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4} style={{minWidth: '200px'}}>
                    <div className="form-group ml-3 mr-1" style={{marginBottom: '3%'}}>
                        <div>
                            <label>Phone no</label>
                        </div>
                        <div>
                            <TextField
                                id="outlined-required"
                                type="email"
                                value="9443363783"
                                style={{width: '100%'}}
                                disabled
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div>
            <   Button variant="contained" type="submit">Edit</Button>
            </div>
        </form>
            </Card>
        </div>
    )
}

export default GeneralInfoForm
