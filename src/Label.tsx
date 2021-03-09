import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { teamByConferenceSeed } from './Seeds'
import { Conferences, Seeds } from './bracketSlice'

const useStyles = makeStyles((theme: Theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'flex-start',
    alignItems: 'center',
    fontSize: '0.8em'
  },
  imgContainer: {
    width: '80px',
    // height: '20px',
    marginRight: theme.spacing(1)
  },
  img: {
    width: '80px',
    // height: '20px',
    objectFit: 'fill'
  }
}))

interface LabelProps {
  conference: Conferences
  seed: Seeds | null
}

const Label = ({ conference, seed }: LabelProps) => {
  const classes = useStyles()
  const team = (seed && teamByConferenceSeed(conference, seed)) || null

  return (
    <div className={classes.row}>
      {team ? (
        <div className={classes.imgContainer}>
          <img
            alt={team.name}
            src={`/wordmark/${team.logo}`}
            className={classes.img}
          />
        </div>
      ) : (
        <>
          <Typography variant='h6'>&hellip;</Typography>
        </>
      )}
    </div>
  )
}

export default Label
