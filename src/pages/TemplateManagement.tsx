import SingleTemplate from "../components/SingleTemplate";
import PageLayout from "../layout/PageLayout";

const TemplateManagement = () => {
  return (
    <PageLayout title="Template Management">
      <div>Most Used Template</div>

      <div className="template-grid">
        <SingleTemplate />
        <SingleTemplate />
        <SingleTemplate />
        <SingleTemplate />
      </div>
    </PageLayout>
  );
};

export default TemplateManagement;
