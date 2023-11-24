import React, { useState } from 'react';
import { FAB, Portal, Provider as PaperProvider } from 'react-native-paper';


const Fabgroup = () => {
    const [state, setState] = useState()
  
    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;
  
    return (
      <PaperProvider>
        <Portal>
          <FAB.Group
            open={open}
            visible
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              // ... (other actions)
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              // Toggle the open state
              setState({ open: !open });
  
              // Add your custom logic here if needed
  
              // Note: Avoid adding logic that unmounts or hides the component here
            }}
          />
        </Portal>
      </PaperProvider>
    );
  };
  
  export default Fabgroup;
  
