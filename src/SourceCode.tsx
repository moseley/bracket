import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { SiGithub } from 'react-icons/si'

const SourceCode = () => {
  return (
    <Box textAlign='center'>
      <Button
        href='https://github.com/moseley/bracket'
        variant='contained'
        color='secondary'
        startIcon={<SiGithub color='black' />}>
        View Source Code
      </Button>
    </Box>
  )
}

export default SourceCode
