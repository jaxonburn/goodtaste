import React from 'react';
import {
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from '../components/base/fieldset';
import { Input } from '../components/base/input';

function Authenticate() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="overflow-hidden rounded-lg bg-gray-800 shadow w-1/4 h-1/2 min-w-[300px] min-h-[600px]">
        <div className="px-4 py-5 sm:p-6">
          <form>
            <Fieldset>
              <Legend>Login</Legend>
              <FieldGroup>
                <Field>
                  <Label>Email</Label>
                  <Input name="email" />
                </Field>
                <Field>
                  <Label>Password</Label>
                  <Input name="password" />
                </Field>
              </FieldGroup>
            </Fieldset>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Authenticate;
