export default theme => ({
  imagePreview: {
    width: 75,
    marginRight: theme.spacing.unit * 2,
  },
  filePreview: {
    fontFamily: 'system-ui,-apple-system,BLinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    display: 'flex',
    alignItems: 'center'
  },
  fileIcon: {
    width: 30,
    marginRight: theme.spacing.unit * 2,
  },
  fileIconSvg: {
    fill: 'currentColor',
  },
  fileName: {
    fontSize: 14,
    marginRight: 10,
    color: '#666',
  },
  fileSize: {
    fontSize: 14,
    color: '#999',
  },
  deleteButton: {

  }
})