import * as React from 'react';
import { render } from '@testing-library/react';
import { AppSampleName } from '../AppSampleName';

describe('<AppSampleName />', () => {
  it('should match snapshot', () => {
    const AppSampleName = render(<AppSampleName />);
    expect(AppSampleName.container.firstChild).toMatchSnapshot();
  });
});
