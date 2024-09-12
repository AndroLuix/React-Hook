import First from '../../render/First';
import ShortRender from '../../render/ShortRender';
import ShowHide from '../../render/ShowHide';
import ControlledInputComponent from '../../Forms/ControlledInputComponent';
import UseRefExample from '../../Forms/UseRefExample';
import UserReducerComponents from '../../Reducer/UserReducerComponents';
import MainComponent from '../../PropDrilling/MainComponent';
import ContextSolution from '../../Context/ContextSolution';
import FetchComponents from '../../CostumHook/FetchComponents';
import PropComponents from '../../PropTypes/PropComponents';

const sections = [
    { cat:1,
      title: 'Sez. 1 - Conditional Rendering - Short Render - Hide or Show Component',
      sectionKey: 'sezione1',
      content: (
        <>
          <First />
          <ShortRender />
          <ShowHide />
        </>
      ),
    },
    {
      cat:2,
      title: 'Sez. 2 - Controlled Input Component',
      sectionKey: 'sezione2',
      content: <ControlledInputComponent />,
    },
    {
      cat:3,
      title: 'Sez. 3 - UseRef',
      sectionKey: 'sezione3',
      content: <UseRefExample />,
    },
    {
      cat:4,
      title: 'Sez. 4 - Modal',
      sectionKey: 'sezione4',
      content: <UserReducerComponents />,
    },
    {
      cat:5,
      title: 'Sez. 5 - List',
      sectionKey: 'sezione5',
      content: <MainComponent />,
    },
    {
      cat:6,
      title: 'Sez. 6 - List con UseContext',
      sectionKey: 'sezione6',
      content: <ContextSolution />,
    },
    {
      cat:7,
      title: 'Sez. 7 - Custom Hooks (fetch)',
      sectionKey: 'sezione7',
      content: <FetchComponents />,
    },
    {
      cat:8,
      title: 'Sez. 8 - Prop Types',
      sectionKey: 'sezione8',
      content: <PropComponents />,
    },
  ];

  export {sections}