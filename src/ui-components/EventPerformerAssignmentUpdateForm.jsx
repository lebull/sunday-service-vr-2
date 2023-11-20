/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { EventPerformerAssignment } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function EventPerformerAssignmentUpdateForm(props) {
  const {
    id: idProp,
    eventPerformerAssignment: eventPerformerAssignmentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    slot_index: "",
    slot_length: "",
  };
  const [slot_index, setSlot_index] = React.useState(initialValues.slot_index);
  const [slot_length, setSlot_length] = React.useState(
    initialValues.slot_length
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventPerformerAssignmentRecord
      ? { ...initialValues, ...eventPerformerAssignmentRecord }
      : initialValues;
    setSlot_index(cleanValues.slot_index);
    setSlot_length(cleanValues.slot_length);
    setErrors({});
  };
  const [eventPerformerAssignmentRecord, setEventPerformerAssignmentRecord] =
    React.useState(eventPerformerAssignmentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(EventPerformerAssignment, idProp)
        : eventPerformerAssignmentModelProp;
      setEventPerformerAssignmentRecord(record);
    };
    queryData();
  }, [idProp, eventPerformerAssignmentModelProp]);
  React.useEffect(resetStateValues, [eventPerformerAssignmentRecord]);
  const validations = {
    slot_index: [],
    slot_length: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          slot_index,
          slot_length,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            EventPerformerAssignment.copyOf(
              eventPerformerAssignmentRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EventPerformerAssignmentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Slot index"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={slot_index}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              slot_index: value,
              slot_length,
            };
            const result = onChange(modelFields);
            value = result?.slot_index ?? value;
          }
          if (errors.slot_index?.hasError) {
            runValidationTasks("slot_index", value);
          }
          setSlot_index(value);
        }}
        onBlur={() => runValidationTasks("slot_index", slot_index)}
        errorMessage={errors.slot_index?.errorMessage}
        hasError={errors.slot_index?.hasError}
        {...getOverrideProps(overrides, "slot_index")}
      ></TextField>
      <SelectField
        label="Slot length"
        placeholder="Please select an option"
        isDisabled={false}
        value={slot_length}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              slot_index,
              slot_length: value,
            };
            const result = onChange(modelFields);
            value = result?.slot_length ?? value;
          }
          if (errors.slot_length?.hasError) {
            runValidationTasks("slot_length", value);
          }
          setSlot_length(value);
        }}
        onBlur={() => runValidationTasks("slot_length", slot_length)}
        errorMessage={errors.slot_length?.errorMessage}
        hasError={errors.slot_length?.hasError}
        {...getOverrideProps(overrides, "slot_length")}
      >
        <option
          children="Thirty"
          value="THIRTY"
          {...getOverrideProps(overrides, "slot_lengthoption0")}
        ></option>
        <option
          children="Sixty"
          value="SIXTY"
          {...getOverrideProps(overrides, "slot_lengthoption1")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || eventPerformerAssignmentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || eventPerformerAssignmentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
