/**
 * Type definitions for react-native-motion
 * Project: https://github.com/xotahal/react-native-motion
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 *
 */

import * as React from 'react';

declare namespace Motion {
  interface SharedElementRenderer extends React.PureComponent {}
  interface SharedElement extends React.PureComponent {
    id: string;
    startOnDestinationDidMount: boolean;
    startOnDestinationWillUnmount: boolean;
    sourceId: string;
  }
}

declare module 'react-native-motion' {
  export default Motion;
}
