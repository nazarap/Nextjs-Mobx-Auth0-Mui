import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export const UserBlock = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 150px;
  padding: 40px 20px;
  background-color: rgb(251, 252, 254);
  border-bottom-color: rgb(205, 215, 225);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(205, 215, 225);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(205, 215, 225);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(205, 215, 225);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px, rgba(21, 21, 21, 0.08) 0px 2px 8px -2px, rgba(21, 21, 21, 0.08) 0px 12px 16px -4px;
`

export const UserName = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`
