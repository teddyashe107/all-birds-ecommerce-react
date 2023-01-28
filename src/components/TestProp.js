import PropTypes from 'prop-types'


const TestProp = ({data}) => {
    return (
      <h1 className="text-4xl">{data}</h1>
    )
}

TestProp.propTypes = {
    data: PropTypes.string.isRequired
}






export default TestProp;