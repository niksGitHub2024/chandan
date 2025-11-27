// import './App.css';
// import '@mantine/core/styles.css';
// import { RangeSlider, Slider, Rating } from '@mantine/core';
// import { useState } from 'react';

// function App() {
//   const [value, setValue] = useState(50);
//   const [range, setRange] = useState([20, 80]);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',       // Center horizontally
//         justifyContent: 'center',   // Center vertically
//         minHeight: '100vh',         // Full height for centering
//         textAlign: 'center',
//         gap: '20px',                // Spacing between elements
//       }}
//     >
//       <Rating defaultValue={3} />

//       <h1>Slider</h1>

//       <Slider
//         color="blue"
//         value={value}
//         onChange={setValue}
//         defaultValue={50}
//         marks={[
//           { value: 10, label: '10%' },
//           { value: 20, label: '20%' },
//           { value: 50, label: '50%' },
//           { value: 80, label: '80%' },
//           { value: 100, label: '100%' },
//         ]}
//         style={{ width: '300px' }}
//       />

//       <h1>Slider Value: {value}</h1>
//       <button>Fix The Value</button>

//       <hr style={{ width: '300px' }} />

//       <RangeSlider
//         value={range}
//         onChange={setRange}
//         style={{ width: '300px' }}
//       />

//       <h2>{range[0]} - {range[1]}</h2>
//     </div>
//   );
// }

// export default App;
import './App.css';
import '@mantine/core/styles.css';
import { RangeSlider, Slider, Rating, Button } from '@mantine/core';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(50);
  const [range, setRange] = useState([20, 80]);

  const [showValues, setShowValues] = useState(false); // NEW STATE

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '20px',
        textAlign: 'center'
      }}
    >
      {/* <Rating defaultValue={3} /> */}

      <h1>Slider</h1>

      <Slider
        color="blue"
        value={value}
        onChange={setValue}
        marks={[
          { value: 10, label: '10%' },
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
          { value: 100, label: '100%' },
        ]}
        style={{ width: '300px' }}
      />

      <RangeSlider
        value={range}
        onChange={setRange}
        style={{ width: '300px' }}
      />

      {/* BUTTON TO SHOW VALUES */}
      <Button
        color="blue"
        onClick={() => setShowValues(true)}
      >
        
        Show Values
      </Button>
      <Rating defaultValue={3} />


      {/* SHOW VALUES ONLY AFTER CLICK */}
      {showValues && (
        <>
          <h2>Single Slider Value: {value}</h2>
          

          <h2>Range Values: {range[0]} - {range[1]}</h2>
        </>
      )}
    </div>
  );
}

export default App;
