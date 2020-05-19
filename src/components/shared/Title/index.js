import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Title = ({ children }) => <Wrapper>{children}</Wrapper>;

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
