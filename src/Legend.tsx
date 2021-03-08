import { makeStyles, Theme } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'

const useStyles = makeStyles((theme: Theme) => ({
  legend: {
    fontSize: '0.85em',
    color: theme.palette.primary.main
  }
}))

interface LegendProps {
  title: string
}

const Legend = ({ title }: LegendProps) => {
  const classes = useStyles()
  return (
    <FormLabel component='legend' className={classes.legend}>
      {title}
    </FormLabel>
  )
}

export default Legend
