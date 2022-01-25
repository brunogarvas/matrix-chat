import appConfig from '../config.json';
import { Box } from '@skynexui/components';

export default function Pagina404() {
  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(../images/the-matrix-system-failure.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
      </Box>

    </>)
}