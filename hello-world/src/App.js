// import "./App.css";
// import ClickCounter from './components/ClickCounter';
// import ClickCounter2 from './components/ClickCounter2';
// import ContextComponentC from "./components/ContextComponentC";
// import { UserProvider } from "./components/UserContext";
// import HowerCounter2 from './components/HowerCounter2';
// import User from './components/User';
// import RenderCounter from './RenderCounter';
// import HowerCounter from './components/HowerCounter';
// import ErrorBoundary from './components/ErrorBoundary';
// import ErrorHero from './components/ErrorHero';
// import ForwardingRefParent from './components/ForwardingRefParent';
// import PortalDemo from './components/PortalDemo';
// import ParentRefClassComponent from './components/ParentRefClassComponent';
// import RefClassComponent from './components/RefClassComponent';
// import MemoParentComp from './components/MemoParentComp';
// import RefsDemo from './components/RefsDemo';
// import ParentComp from './components/ParentComp';
// import PureComp from './components/PureComp';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import Form from './components/Form';
// import LifeCycleA from './components/LifeCycleA';
// import NameList from './components/NameList';
// import NameList1 from './components/NameList1';
// import Stylesheets from './components/Stylesheets';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import Inline from './components/Inline';
// import'./components/appStyles.css';
// import styles from'./components/appStyles.module.css';
function App() {
  return (
    <div className="App">
      {/* ===================================================================================================================================================================== */}

      {/* note:--- UserProvider mein jo bhi value hoga wo ya default context jo bhi hoga wo jis component ko diya jaayega to wo us component ke andar jitne bhi component contained hoge sbke paas chhla jaayega (important)  */}
      {/* NOTE:--- for default value in the Context we donot use UserProvider component to the children component  */}
      {/* <UserProvider value="Sudeep">
      <ContextComponentC />
      </UserProvider> */}

      {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* <UserProvider value="Sudeep"> */}
        {/* <ContextComponentC /> */}
      {/* </UserProvider> */}
      {/* ==================================================================================================================================================================== */}

      {/* This is about render props  */}

      {/* note:--- render ke jagah hum pure function ko uthakr <Counter></Counter> ke beech mein rkh skte h aur corresponding component mein this.props ke jagah this.render krege to same kaam krega  */}
      {/* {/* <RenderCounter render={(count, incrementCount) => (<ClickCounter2 count={count} incrementCount={incrementCount} />)} /> */}
      {/* <RenderCounter render={(count, incrementCount) => (<HowerCounter2 count={count} incrementCount={incrementCount} />)} /> */}

      {/* <ClickCounter2/>
      <HowerCounter2/>   */}
      {/* <User render={(isLoggedIn)=>isLoggedIn?"Sudeep":"Guest"}/> */}

      {/* ====================================================================================== */}

      {/* Higher Order Component Logic  */}
      {/* <HowerCounter/>
      <ClickCounter name="Sudeep"/> */}

      {/* ====================================================================================== */}
      {/* <ErrorBoundary>
        <ErrorHero heroname="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <ErrorHero heroname="SuperMan" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <ErrorHero heroname="Joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo/> */}
      {/* <ForwardingRefParent/> */}
      {/* <ParentRefClassComponent/> */}
      {/* <RefClassComponent/> */}
      {/* <RefsDemo/> */}
      {/* <MemoParentComp/> */}
      {/* <ParentComp/> */}
      {/* <PureComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifeCycleA/> */}
      {/* <Form/> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheets primary={true}/> */}
      {/* <NameList1/> */}
      {/* <NameList/> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props of Bruce</p>
        </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Dianna" heroName="WonderWomen"/>
       <Welcome name="Bruce" heroName="Batman"/>
       <Welcome name="Clark" heroName="Superman"/>
       <Welcome name="Dianna" heroName="WonderWomen"/>
      <Hello/>  */}
    </div>
  );
}

export default App;

// ==============================================================================================================================
// note:------------ css style sheet is not locally scope it will be transfer to all the children component
// but css module stylesheet is only for the component in which it is imported means locally scope
