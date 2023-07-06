import { Box, Divider, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import ButtonForm from "../../../../components/Buttons/ButtonFormik";
import FileUploader from "../../../../components/Inputs/FileUploader";
import SelectWrapper from "../../../../components/Inputs/SelectForm";
import Textfield from "../../../../components/Inputs/TextField";
import TextfieldIncrementable from "../../../../components/Inputs/TextFieldIncrementable";
import { templates } from "../../../../constants/templates";
import { Title } from "../../../../styles";
import { i18n } from "../../../../translations/i18n";
import { FORM_VALIDATION } from "./validation";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
import Loader from "../../../../components/Loader";
import { ROUTE_PATHS } from "../../../../constants/routes";
import { fetchBook } from "../../../../services/admin/adminServices";
import {
  addBook,
  editBook,
  updateProgress,
} from "../../../../slicer/books/books.actions";
import { disableLoading } from "../../../../slicer/general/general.actions";
import { State } from "../../../../slicer/types";
import { getObjectDifferences } from "../../../../utils/compareObjects";
import { mapInitialForm } from "../mapper";
import PreviewWrapper from "./PreviewWrapper";

interface Props {
  edit?: boolean;
}

const SubmitStory = ({ edit = false }: Props) => {
  const dispatch = useDispatch();
  const { id } = useParams<Record<string, string | undefined>>();
  const documentID = id || "";
  const [contentLoader, setContentLoader] = useState<boolean>(false);
  const [contentValue, setContentValue] = useState<any>(undefined);
  const [touchedContent, setTouchedContent] = useState<boolean>(false);
  const navigate = useNavigate();
  const [edited, setEdited] = useState<boolean>(false);
  const loading = useSelector<State, boolean>((state) => state.general.loading);
  const progress = useSelector<State, number>((state) => state.books.progress);

  const {
    isLoading: loadingBook,
    error: errorBook,
    data: bookData,
  } = useQuery<[string, string]>(["story", documentID], fetchBook, {
    enabled: edit && !!documentID,
  });

  const initialValues = useMemo(() => {
    if (edit && bookData) {
      return mapInitialForm(bookData);
    } else {
      return {
        name: "",
        location: "",
        locationEN: "",
        template: "0",
        resume: "",
        resumeEN: "",
        punchLines: "",
        punchLinesEN: "",
        ps: "",
        psEN: "",
        content: [],
      };
    }
  }, [edit, bookData]);

  const handleConvertStringIntoFile = async (
    images: string[],
    setLoader: (signal: boolean) => void,
    setValue: (value: any) => void
  ) => {
    setLoader(true);
    // Create a new DataTransfer object
    const dataTransfer = new DataTransfer();

    // Function to convert base64 string to a file
    const base64StringToFile = async (
      base64String: string,
      filename: string
    ): Promise<File> => {
      const response = await fetch(base64String);
      const data = await response.blob();
      return new File([data], filename, { type: "image/webp" });
    };

    // Iterate through the images array and add each file to the DataTransfer object
    for (let i = 0; i < images.length; i++) {
      const file = await base64StringToFile(images[i], `image${i}.webp`); // You can replace the filename with any naming scheme you prefer
      dataTransfer.items.add(file);
    }
    setValue(dataTransfer.files);
    setLoader(false);
  };

  useEffect(() => {
    if (!loading && edit && edited) navigate(ROUTE_PATHS.ADMIN);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (!loadingBook && edit) {
      if (initialValues.content.length > 0)
        handleConvertStringIntoFile(
          initialValues.content,
          setContentLoader,
          setContentValue
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingBook, initialValues.content]);

  useEffect(() => {
    dispatch(disableLoading());
    dispatch(updateProgress(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (values: any) => {
    console.log(values);
    if (edit) {
      if (!touchedContent && initialValues.name === values.name) {
        delete values.content;
      }

      const payload = {
        values: getObjectDifferences(initialValues, { ...values }),
        documentID: documentID,
        name: initialValues.name,
      };
      console.log(payload);
      dispatch(editBook(payload));
      setEdited(true);
    } else dispatch(addBook({ ...values }));
  };

  if (edit && loadingBook) {
    return (
      <Box
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader
          size={200}
          color="darkGrey"
          customMessage="fetching the story for edition"
        />
      </Box>
    );
  }

  return (
    <>
      <Title fontSize="16px">Gerir histórias - Adicionar histórias</Title>
      <Divider />

      <Formik
        initialValues={{ ...initialValues }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={FORM_VALIDATION}
      >
        <Form>
          {loading ? (
            <Box
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader
                size={200}
                color="darkGrey"
                customMessage="Your Data is being send"
                progress={progress}
              />
            </Box>
          ) : (
            <>
              <Box
                rowGap={2}
                display="flex"
                flexDirection="column"
                sx={{ mt: "20px" }}
              >
                <Grid container columnSpacing={2} rowSpacing={6}>
                  <Grid item xs={6}>
                    <Box style={{ width: "350px" }}>
                      <Textfield label="Name" name="name" />
                    </Box>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Box style={{ width: "350px" }}>
                      <Textfield label="Location" name="location" />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box style={{ width: "350px" }}>
                      <Textfield label="Location English" name="locationEN" />
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <Box>
                      <Textfield
                        label={i18n.t(
                          "modules.admin.manageBooks.submitBook.resume"
                        )}
                        name="resume"
                        multiline
                        rows={6}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Textfield
                        label={`${i18n.t(
                          "modules.admin.manageBooks.submitBook.resume"
                        )} EN`}
                        name="resumeEN"
                        multiline
                        rows={6}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Textfield
                        label={i18n.t(
                          "modules.admin.manageBooks.submitBook.ps"
                        )}
                        name="ps"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Textfield
                        label={`${i18n.t(
                          "modules.admin.manageBooks.submitBook.ps"
                        )} EN`}
                        name="psEN"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <TextfieldIncrementable
                        label={i18n.t(
                          "modules.admin.manageBooks.submitBook.punchLines"
                        )}
                        name="punchLines"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <TextfieldIncrementable
                        label={`${i18n.t(
                          "modules.admin.manageBooks.submitBook.punchLines"
                        )} EN`}
                        name="punchLinesEN"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <SelectWrapper
                      name="template"
                      options={templates}
                      label={i18n.t(
                        "modules.admin.manageBooks.submitBook.template"
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FileUploader
                      touched={setTouchedContent}
                      loading={contentLoader}
                      value={contentValue}
                      name="content"
                      multiple
                      fieldTitle="Images para submeter"
                      acceptType="image/webp"
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box
                display="flex"
                justifyContent="start"
                sx={{ mt: "60px", mb: "60px" }}
                columnGap={2}
              >
                <PreviewWrapper />
                <ButtonForm label="Submeter" disabled={loading} />
              </Box>
            </>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default SubmitStory;
