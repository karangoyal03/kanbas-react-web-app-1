import React from 'react';
import VariablesAndConstants from './VariablesAndConstants';
import VariableTypes from './VariableTypes';
import BooleanVariables from './BooleanVariables';
import IfElse from './IfElse';
import TernaryOperator from './TernaryOperator';
import ConditionalOutputIfElse from './ConditionalOutputIfElse';
import ConditionalOutputInline from './ConditionalOutputInline';
import LegacyFunctions from './LegacyFunctions';
import ArrowFunctions from './ArrowFunctions';
import ImpliedReturn from './ImpliedReturn';
import TemplateLiterals from './TemplateLiterals';
import SimpleArrays from './SimpleArrays';
import ArrayIndexAndLength from './ArrayIndexAndLength';
import AddingAndRemovingToFromArrays from './AddingAndRemovingToFromArrays';
import ForLoops from './ForLoops';
import MapFunction from './MapFunction';
import FindFunction from './FindFunction';
import FindIndex from './FindIndex';
import FilterFunction from './FilterFunction';
import JsonStringify from './JsonStringify';
import House from './House';
import TodoList from './Todos/TodoList';
import Spreading from './Spreading';
import Destructing from './Destructing';
import FunctionDestructing from './FunctionDestructing';
import DestructingImports from './DestructingImports';
import Classes from './Classes';
import Styles from './Styles';
import Add from './Add';
import Square from './Square';
import Highlight from './Highlight';
import PathParameters from './PathParameters';

export default function Lab3() {
  return (
    <div id="wd-lab3" className="container-fluid">
      <h3>Lab 3</h3>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <JsonStringify />
      <House />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports /> 
      <Classes />
      <Styles /> 
      <div id="wd-lab3" className="container">
      <h3>Lab 3</h3>
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        ratione eaque illo minus cum, saepe totam vel nihil repellat nemo
        explicabo excepturi consectetur. Modi omnis minus sequi maiores,
        provident voluptates.
      </Highlight>
      <hr />
      <hr />
      <h2>Path Parameters</h2>
      <PathParameters />
      <hr />
      <h4>Add Component</h4>
      <Add a={3} b={4} />
    </div>
    </div>
  );
}
