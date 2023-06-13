export const navBarContainerStyles = {
  position: 'sticky',
  top: '87px',
  pt: 3.5,
  pb: 16,
  px: 9.25,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // height: 'calc(100vh - 87px)',
  width: '388px',
  boxShadow: '0px 8px 24px rgba(80, 99, 108, 0.08)',
  zIndex: 2,
  ['@media(max-width: 1440px)']: {
    px: 6
  },
  ['@media(max-width: 1250px)']: {
    px: 4
  }
};

export const navBarStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 0.8
};

export const navBarItemStyles = {
  gap: 2,
  py: 1.5,
  px: 3.25,
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  color: 'primary.darkGrey',
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'primary.lightGrey'
  },
  '&.active': {
    backgroundColor: 'primary.lightGrey',
    '& p': {
      fontWeight: 500
    }
  }
};

