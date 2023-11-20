/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Performer } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PerformerCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    djName: "",
    furName: "",
    performerDescribedGenres: [],
    discordId: "",
  };
  const [djName, setDjName] = React.useState(initialValues.djName);
  const [furName, setFurName] = React.useState(initialValues.furName);
  const [performerDescribedGenres, setPerformerDescribedGenres] =
    React.useState(initialValues.performerDescribedGenres);
  const [discordId, setDiscordId] = React.useState(initialValues.discordId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDjName(initialValues.djName);
    setFurName(initialValues.furName);
    setPerformerDescribedGenres(initialValues.performerDescribedGenres);
    setCurrentPerformerDescribedGenresValue("");
    setDiscordId(initialValues.discordId);
    setErrors({});
  };
  const [
    currentPerformerDescribedGenresValue,
    setCurrentPerformerDescribedGenresValue,
  ] = React.useState("");
  const performerDescribedGenresRef = React.createRef();
  const validations = {
    djName: [],
    furName: [],
    performerDescribedGenres: [],
    discordId: [],
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
          djName,
          furName,
          performerDescribedGenres,
          discordId,
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
          await DataStore.save(new Performer(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PerformerCreateForm")}
      {...rest}
    >
      <TextField
        label="Dj Name"
        isRequired={false}
        isReadOnly={false}
        value={djName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              djName: value,
              furName,
              performerDescribedGenres,
              discordId,
            };
            const result = onChange(modelFields);
            value = result?.djName ?? value;
          }
          if (errors.djName?.hasError) {
            runValidationTasks("djName", value);
          }
          setDjName(value);
        }}
        onBlur={() => runValidationTasks("djName", djName)}
        errorMessage={errors.djName?.errorMessage}
        hasError={errors.djName?.hasError}
        {...getOverrideProps(overrides, "djName")}
      ></TextField>
      <TextField
        label="Furry Name"
        descriptiveText="(If Different)"
        isRequired={false}
        isReadOnly={false}
        value={furName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              djName,
              furName: value,
              performerDescribedGenres,
              discordId,
            };
            const result = onChange(modelFields);
            value = result?.furName ?? value;
          }
          if (errors.furName?.hasError) {
            runValidationTasks("furName", value);
          }
          setFurName(value);
        }}
        onBlur={() => runValidationTasks("furName", furName)}
        errorMessage={errors.furName?.errorMessage}
        hasError={errors.furName?.hasError}
        {...getOverrideProps(overrides, "furName")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              djName,
              furName,
              performerDescribedGenres: values,
              discordId,
            };
            const result = onChange(modelFields);
            values = result?.performerDescribedGenres ?? values;
          }
          setPerformerDescribedGenres(values);
          setCurrentPerformerDescribedGenresValue("");
        }}
        currentFieldValue={currentPerformerDescribedGenresValue}
        label={"Genres"}
        items={performerDescribedGenres}
        hasError={errors?.performerDescribedGenres?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "performerDescribedGenres",
            currentPerformerDescribedGenresValue
          )
        }
        errorMessage={errors?.performerDescribedGenres?.errorMessage}
        setFieldValue={setCurrentPerformerDescribedGenresValue}
        inputFieldRef={performerDescribedGenresRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Genres"
          isRequired={false}
          isReadOnly={false}
          value={currentPerformerDescribedGenresValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.performerDescribedGenres?.hasError) {
              runValidationTasks("performerDescribedGenres", value);
            }
            setCurrentPerformerDescribedGenresValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "performerDescribedGenres",
              currentPerformerDescribedGenresValue
            )
          }
          errorMessage={errors.performerDescribedGenres?.errorMessage}
          hasError={errors.performerDescribedGenres?.hasError}
          ref={performerDescribedGenresRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "performerDescribedGenres")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Discord Name"
        isRequired={false}
        isReadOnly={false}
        value={discordId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              djName,
              furName,
              performerDescribedGenres,
              discordId: value,
            };
            const result = onChange(modelFields);
            value = result?.discordId ?? value;
          }
          if (errors.discordId?.hasError) {
            runValidationTasks("discordId", value);
          }
          setDiscordId(value);
        }}
        onBlur={() => runValidationTasks("discordId", discordId)}
        errorMessage={errors.discordId?.errorMessage}
        hasError={errors.discordId?.hasError}
        {...getOverrideProps(overrides, "discordId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
