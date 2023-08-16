import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  CardMedia,
  Paper
} from '@mui/material';
import jobInfo from './job-info.json';
import RoomIcon from '@mui/icons-material/Room';
import './home.css'

function Home() {
  const [selectedJob, setSelectedJob] = useState(jobInfo[0]);
  const [sortBy, setSortBy] = useState('Relevance');

  return (
    <Container>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} mt={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={3}>
            <Typography variant="h6">{jobInfo.length} jobs</Typography>
            <Box display="flex" alignItems="center">
              <InputLabel htmlFor="sort-by-label">SORT BY</InputLabel>
              <FormControl variant="outlined" size="small" style={{ marginLeft: 10 }}>
                <Select
                  labelId="sort-by-label"
                  id="sort-by-dropdown"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  <MenuItem value={'Relevance'}>Relevance</MenuItem>
                  <MenuItem value={'Most Recent'}>Most Recent</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>

        {/* Job listings column */}
        <Grid item md={5} xs={12}>
          {jobInfo.map((job, index) => (
            <Card
              key={index}
              onClick={() => setSelectedJob(job)}
              sx={{
                marginBottom: 2,
                display: 'flex',
                flexDirection: 'column',
                border: (job === selectedJob) ? '3px solid #1fc76a' : 'none',
                borderRadius: '8px'
              }}>
          <CardActionArea className="card">
            <Grid container p={1}>
              <Grid item xs={2}>
                <CardMedia
                  component="img"
                  image="/images/nodeflair.png"
                  alt="Live from space album cover"
                />
              </Grid>
              <Grid item xs={7}>
                <CardContent style={{ paddingBottom: '0' }}>
                  <span>{job.company}</span>
                  <Box component="span" ml={1}>
                    <span>{job.rating}</span>
                  </Box>

                  <div className="job-position">
                    {job.position}
                  </div>

                  <Grid container alignItems="center">
                    <Box mr={1}>
                      <span className="posted">
                        {job.posted}
                      </span>
                    </Box>
                    <RoomIcon />
                    <span>{job.location}</span>
                  </Grid>

                  {job.salary && job.salary_currency && (
                    <Grid container pt={1}>
                      <Box mr={1}>
                        <span>
                          <b>{job.salary}</b>
                        </span>
                      </Box>
                      <span className='estimate'>{job.salary_currency}</span>
                    </Grid>
                  )}
                </CardContent>
              </Grid>

              <Grid item xs={3} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', padding: 2, textAlign: 'center' }}>
                <span className="category">{job.category}</span>
              </Grid>
            </Grid>
            <Box mx={2}>
              <hr />
            </Box>
            <div className="card-actions">
              <div className="skill-container">
                {job.skills && job.skills.map((skill, idx) => (
                  <span key={idx} className="skill-span">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardActionArea>
        </Card>
          ))}
      </Grid>

      {/* Job description tab */}
      <Grid item md={7} xs={0}>
        {selectedJob && (
          <Paper elevation={3} className="paper">
            <Typography variant="h4">{selectedJob.company}</Typography>
            <Typography variant="subtitle1">{selectedJob.position}</Typography>
          </Paper>
        )}
      </Grid>
      <Grid item xl={3} xs={0}></Grid>
    </Grid>
    </Container >
  );
}

export default Home;