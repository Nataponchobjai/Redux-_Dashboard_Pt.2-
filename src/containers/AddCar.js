import { connect } from "react-redux";
import AddCar from '../components/AddCar';
import {addCar} from '../redux/actions';

const mapDispathToProps = (dispatch) => {
    return {
        addCar: (newCar) => dispatch(addCar(newCar)),
    };
};

export default connect(null, mapDispathToProps)(AddCar);