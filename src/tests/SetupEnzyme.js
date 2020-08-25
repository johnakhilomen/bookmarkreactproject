import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

class SetupEnzyme {
 
    init = () => Enzyme.configure({adapter: new EnzymeAdapter()})

}
 
export default new SetupEnzyme();