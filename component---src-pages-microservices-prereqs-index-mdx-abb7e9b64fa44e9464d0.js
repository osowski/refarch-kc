(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{jrxd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l,c={},s=(l="InlineNotification",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),i={_frontmatter:c},p=r.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,o({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{kind:"warning",mdxType:"InlineNotification"},"UNDER CONSTRUCTION"),Object(n.b)("h2",null,"Prereqs"),Object(n.b)(s,{kind:"warning",mdxType:"InlineNotification"},"Update for APPSODY"),Object(n.b)("p",null,"To be able to build and execute the solution, you need to do the following tasks:"),Object(n.b)("h3",null,"Get a Git client"),Object(n.b)("p",null,"If not already done, get a git client. See the following ",Object(n.b)("a",o({parentName:"p"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"installation instructions"),"."),Object(n.b)("p",null,"On a Centos box we did:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"yum install git\n")),Object(n.b)("h3",null,"Clone all the repositories"),Object(n.b)("p",null,"Start by cloning the root repository using the command:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"git clone https://github.com/ibm-cloud-architecture/refarch-kc/\n")),Object(n.b)("p",null,"Then go to the ",Object(n.b)("inlineCode",{parentName:"p"},"refarch-kc")," folder and use the command:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"./script/clone.sh\n")),Object(n.b)("p",null,"to get all the solution repositories. You should have at least the following repositories:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"refarch-kc-container-ms\nrefarch-kc-order-ms\nrefarch-kc-ui\nrefarch-kc\nrefarch-kc-ms\nrefarch-kc-streams\n")),Object(n.b)("h3",null,"Get docker"),Object(n.b)("p",null,"Get ",Object(n.b)("a",o({parentName:"p"},{href:"https://docs.docker.com/install/"}),"docker engine and install")," it (if not yet done). To verify docker runs fine use the command ",Object(n.b)("inlineCode",{parentName:"p"},"docker version"),". We run on v19.03 community edition."),Object(n.b)("p",null,"or use one of the packaged solution like on Centos:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"yum install docker\n")),Object(n.b)("h3",null,"Verifying current environment"),Object(n.b)("p",null,"To assess the tools installed on your computer, run the following command under the ",Object(n.b)("inlineCode",{parentName:"p"},"refarch-kc")," project:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"./scripts/prepareEnv\n")),Object(n.b)("p",null,"The script will create the docker images for maven, nodejs, and python if those tools are not found on your computer. The images are built from our docker files you can find under the ",Object(n.b)("inlineCode",{parentName:"p"},"refarch-kc/dockers")," folder."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"docker images\n")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nibmcase/python      latest              8d38aefd0346        2 minutes ago       1.14 GB\nibmcase/nodetools   latest              7a736a07ba09        2 minutes ago       959 MB\nibmcase/javatools   latest              bdf79f64d721        23 minutes ago      715 MB\n\n")),Object(n.b)("p",null,"You to have two choices to build the solution:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"installing node, python and maven on your computer"),Object(n.b)("li",{parentName:"ol"},"use our own docker images for running those tools")),Object(n.b)("p",null,"You can mix the two. If, for example, you already developed with Nodejs or Java you may want to leverage your own configurations. If you do not want to impact your python environment, you can user our docker images."),Object(n.b)("p",null,"To be able to build without our docker images do the following:"),Object(n.b)("h3",null,"Get Java"),Object(n.b)("p",null,"Do something like this:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"yum install java-1.8.0-openjdk-devel\n")),Object(n.b)("h3",null,"Get Maven"),Object(n.b)("p",null,"get ",Object(n.b)("a",o({parentName:"p"},{href:"https://maven.apache.org/install.html"}),"maven")," and add it to your PATH."),Object(n.b)("p",null,"or for a Centos linux:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"yum install maven\n")),Object(n.b)("h3",null,"Get nodejs"),Object(n.b)("p",null,"Get ",Object(n.b)("a",o({parentName:"p"},{href:"https://nodejs.org/en/"}),"node and npm")),Object(n.b)("p",null,"or for a Centos linux:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"yum install node\n")),Object(n.b)("h3",null,"Get Python 3.7"),Object(n.b)("p",null,"Our integration tests are done in python. To avoid impacting your own python environment, we defined a docker file to build an image with the necessary python library. The image may have been already built with the ",Object(n.b)("inlineCode",{parentName:"p"},"preparenv")," script run in previous step."),Object(n.b)("p",null,"If you want to rebuild it, go to the ",Object(n.b)("inlineCode",{parentName:"p"},"docker")," folder and run the following command:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"docker build -f docker-python-tools -t ibmcase/python .\n")),Object(n.b)("h3",null,"Global environment settings"),Object(n.b)("p",null,"In the ",Object(n.b)("inlineCode",{parentName:"p"},"refarch-kc")," rename ",Object(n.b)("inlineCode",{parentName:"p"},"./script/setenv.sh.tmpl")," to ",Object(n.b)("inlineCode",{parentName:"p"},"./script/setenv.sh"),":"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"mv setenv.sh.tmpl setenv.sh\n")),Object(n.b)("p",null,"Then modify the environment variables according to your environment you are using. This file is used by a lot of scripts in the solution to set the target deployment environment: LOCAL, IBMCLOUD, ICP, MINIKUBE."),Object(n.b)("h2",null,"Kafka & Event Streams"),Object(n.b)("h3",null,"Using IBM Event Streams, hosted on IBM Cloud"),Object(n.b)("h4",null,"Services Deployment"),Object(n.b)("p",null,"We recommend to follow ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/technology/event-streams/es-cloud/"}),"our most recent lab")," on how to provision an Event Streams intance on cloud."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the ",Object(n.b)("em",{parentName:"p"},"Manage")," panel add the topics needed for the solution. We need at least the following:"),Object(n.b)("img",o({parentName:"li"},{src:"images/IES-IC-topics.png",alt:null}))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Service Credentials tab, create new credentials to get the Kafka broker list, the admim URL and the api_key needed to authenticate the consumers or producers."),Object(n.b)("img",o({parentName:"li"},{src:"images/IES-IC-credentials.png",alt:null})))),Object(n.b)("h4",null,"Event Streams Kafka Brokers"),Object(n.b)("p",null,"Regardless of specific deployment targets (OCP, IKS, k8s), the following prerequisite Kubernetes ConfigMap needs to be created to support the deployments of the application’s microservices.  These artifacts need to be created once per unique deployment of the entire application and can be shared between application components in the same overall application deployment.  These values can be acquired from the ",Object(n.b)("inlineCode",{parentName:"p"},"kafka_brokers_sasl")," section of the service instance’s Service Credentials."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create configmap kafka-brokers --from-literal=brokers='<replace with comma-separated list of brokers>' -n <target k8s namespace / ocp project>\nkubectl describe configmap kafka-brokers -n <target k8s namespace / ocp project>\n")),Object(n.b)("h4",null,"Event Streams API Key"),Object(n.b)("p",null,"The Event Streams Broker API Key is needed to connect any deployed consumers or producers to the service in IBM Cloud. To avoid sharing security keys, create a Kubernetes Secret in the target cluster you will deploy the application microservices to.  This is available from the Service Credentials information you just created above."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic eventstreams-apikey --from-literal=binding='<replace with api key>' -n <target k8s namespace / ocp project>\nkubectl describe secret eventstreams-apikey -n <target k8s namespace / ocp project>\n")),Object(n.b)("hr",null),Object(n.b)("h3",null,"Using IBM Event Streams, deployed on RedHat OpenShift Container Platform"),Object(n.b)("h4",null,"Service Deployment"),Object(n.b)("p",null,"The installation is documented in the ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm.github.io/event-streams/installing/installing-openshift/"}),"product documentation")," and in our ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/deployments/eventstreams/"}),"own note here.")),Object(n.b)("h4",null,"Event Streams Kafka Brokers"),Object(n.b)("p",null,"Regardless of specific deployment targets (OCP, IKS, k8s), the following prerequisite Kubernetes ConfigMap needs to be created to support the deployments of the application’s microservices.  These artifacts need to be created once per unique deployment of the entire application and can be shared between application components in the same overall application deployment."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create configmap kafka-brokers --from-literal=brokers='<replace with comma-separated list of brokers>' -n <target k8s namespace / ocp project>\nkubectl describe configmap kafka-brokers -n <target k8s namespace / ocp project>\n")),Object(n.b)("h4",null,"Event Streams API Key"),Object(n.b)("p",null,"The Event Streams Broker API Key is needed to connect any deployed consumers or producers to the service running in your cluster. To avoid sharing security keys, create a Kubernetes Secret in the target cluster you will deploy the application microservices to.  You can specify keys at the topic and consumer group levels or use a unique key for all topics and all consumer groups."),Object(n.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"IMPORTANT: The API Key must be created using the CLI")," as it needs to grant certain transactional IDs for the Order Command component’s producers to be able to transactionally produce messages to the topics it needs to.")),Object(n.b)("p",null,"In order to create the API Key through the CLI, you must install the Command Line Interface (CLI) explained in the IBM Event Streams post-installation instructions ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm.github.io/event-streams/installing/post-installation/"}),"here"),". Once you have the ",Object(n.b)("strong",{parentName:"p"},"cloudctl")," CLI and the Event Streams plugin for it, you can create the API key as follows:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),'cloudctl es iam-service-id-create <NAME> --role administrator --all-topics --all-groups --all-schemas --txnid "order-1,error-1" --description "<DESCRIPTION>"\n')),Object(n.b)("p",null,"where you can tweak the role, topics, groups, etc to be more restrictive but the ",Object(n.b)("strong",{parentName:"p"},"txnid")," must be as described."),Object(n.b)("p",null,"Once you run the command above and the service credentials are created and the API key generated, provide the API key in the secret below:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic eventstreams-apikey --from-literal=binding='<replace with api key>' -n <target k8s namespace / ocp project>\nkubectl describe secrets -n <target k8s namespace / ocp project>\n")),Object(n.b)("h4",null,"Event Streams Certificates"),Object(n.b)("p",null,"If you are using Event Streams as your Kafka broker provider and it is deployed via the IBM Cloud Pak for Integration (ICP4I), you will need to create an additional Secret to store the generated Certificates & Truststores to connect securely between your application components and the Kafka brokers.  These artifacts need to be created once per unique deployment of the entire application and can be shared between application components in the same overall application deployment."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"From the ",Object(n.b)("strong",{parentName:"li"},"Connect to this cluster")," tab on the landing page of your Event Streams installation, download both the ",Object(n.b)("strong",{parentName:"li"},"Java truststore")," and the ",Object(n.b)("strong",{parentName:"li"},"PEM certificate"),"."),Object(n.b)("li",{parentName:"ul"},"Create the Java truststore Secret:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Command: ",Object(n.b)("inlineCode",{parentName:"li"},"oc create secret generic <secret-name> --from-file=/path/to/downloaded/file.jks")),Object(n.b)("li",{parentName:"ul"},"Example: ",Object(n.b)("inlineCode",{parentName:"li"},"oc create secret generic es-truststore-jks --from-file=/Users/osowski/Downloads/es-cert.jks")))),Object(n.b)("li",{parentName:"ul"},"Create the PEM certificate Secret:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Command: ",Object(n.b)("inlineCode",{parentName:"li"},"oc create secret generic <secret-name> --from-file=/path/to/downloaded/file.pem")),Object(n.b)("li",{parentName:"ul"},"Example: ",Object(n.b)("inlineCode",{parentName:"li"},"oc create secret generic es-ca-pemfile --from-file=/Users/osowski/Downloads/es-cert.pem"))))),Object(n.b)("hr",null),Object(n.b)("h3",null,"Using community-based Kafka Helm charts, deployed locally in-cluster"),Object(n.b)("p",null,"If you simply want to deploy Kafka using the open source, community-supported Helm Charts, you can do so with the following commands."),Object(n.b)("h4",null,"Environment Considerations"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"TODO")," Needs update to account for ServiceAccount integration after ",Object(n.b)("inlineCode",{parentName:"p"},"helm template")," generation"),Object(n.b)("h4",null,"Service Deployment"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Add Bitnami Helm Repository:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"helm repo add bitnami https://charts.bitnami.com/bitnami\n")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Update the Helm repository:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"helm repo update\n")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Create a Kubernetes Namespace or OpenShift Project.")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create namespace <target namespace>\n")),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Deploy Kafka and Zookeeper using the ",Object(n.b)("inlineCode",{parentName:"li"},"bitnami/kafka")," Helm Chart:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"mkdir bitnami\nmkdir templates\nhelm fetch --untar --untardir bitnami 'bitnami/kafka'\nhelm template --name kafka --set persistence.enabled=false --set securityContext.enabled=false \\\n  bitnami/kafka --namespace <target namespace> --output-dir templates\n(kubectl/oc) apply -f templates/kafka/charts/zookeeper/templates/\n(kubectl/oc) apply -f templates/kafka/templates\n")),Object(n.b)("p",null,"It will take a few minutes to get the pods ready."),Object(n.b)("h3",null,"Kafka Brokers"),Object(n.b)("p",null,"Regardless of specific deployment targets (OCP, IKS, k8s), the following prerequisite Kubernetes ConfigMap needs to be created to support the deployments of the application’s microservices.  These artifacts need to be created once per unique deployment of the entire application and can be shared between application components in the same overall application deployment."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create configmap kafka-brokers --from-literal=brokers='<replace with comma-separated list of brokers>' -n <target k8s namespace / ocp project>\nkubectl describe configmap kafka-brokers -n <target k8s namespace / ocp project>\n")),Object(n.b)("hr",null),Object(n.b)("h2",null,"Postgresql"),Object(n.b)("p",null,"The ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-container-ms/"}),"Container Manager microservice")," persists the Reefer Container inventory in a Postgresql database.  The deployment of Postgresql is only necessary to support the deployment of the Container Manager microservice.  If you are not deploying the Container Manager microservice, you do not need to deploy and configure a Postgresql service and database."),Object(n.b)("h3",null,"Using Postgresql, hosted on IBM Cloud"),Object(n.b)("h4",null,"Service Deployment"),Object(n.b)("p",null," To install the service, follow the ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/catalog/services/databases-for-postgresql"}),"product documentation here"),"."),Object(n.b)("p",null," Once the service is deployed, you need to create some service credentials and retreive the following values for the different configurations:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"postgres.username"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"postgres.password"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"postgres.composed"),", which will need to be mapped to a JDBC URL in the format of ",Object(n.b)("inlineCode",{parentName:"p"},"jdbc:postgresql://<hostname>:<port>/<database-name>?sslmode=verify-full&sslfactory=org.postgresql.ssl.NonValidatingFactory")," ",Object(n.b)("em",{parentName:"p"},"(this will remove the ",Object(n.b)("inlineCode",{parentName:"em"},"username")," and ",Object(n.b)("inlineCode",{parentName:"em"},"password")," values from the default ",Object(n.b)("inlineCode",{parentName:"em"},"composed")," string)")),Object(n.b)("img",o({parentName:"li"},{src:"images/postgres-credentials.png",alt:null})))),Object(n.b)("h4",null,"Creating Postgresql credentials as Kubernetes Secrets"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Applying the same approach as above, copy the Postgresql URL as defined in the Postegresql service credential and execute the following command:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic postgresql-url --from-literal=binding='<replace with postgresql-url>' -n <target k8s namespace / ocp project>\n")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"For the user:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic postgresql-user --from-literal=binding='ibm_cloud_c...' -n <target k8s namespace / ocp project>\n")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"For the user password:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic postgresql-pwd --from-literal=binding='<password from the service credential>.' -n <target k8s namespace / ocp project>\n")),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"When running Postgresql through the IBM Cloud service, additional SSL certificates are required to communicate securely:",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Install the IBM Cloud Database CLI Plugin:",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"ibmcloud plugin install cloud-databases\n"))),Object(n.b)("li",{parentName:"ol"},"Get the certificate using the name of the postgresql service:")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"ibmcloud cdb deployment-cacert $IC_POSTGRES_SERV > postgresql.crt\n")),Object(n.b)("ol",o({parentName:"li"},{start:3}),Object(n.b)("li",{parentName:"ol"},"Then add it into an environment variable")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),'export POSTGRESQL_CA_PEM="$(cat ./postgresql.crt)"\n')),Object(n.b)("ol",o({parentName:"li"},{start:4}),Object(n.b)("li",{parentName:"ol"},"Then define a secret:")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),'kubectl create secret generic postgresql-ca-pem --from-literal=binding="$POSTGRESQL_CA_PEM" -n browncompute\n')))),Object(n.b)("hr",null),Object(n.b)("h3",null,"Using community-based Postgresql Helm charts, deployed locally in-cluster"),Object(n.b)("p",null,"If you simply want to deploy Postgresql using the open source, community-supported Helm Charts, you can do so with the following commands."),Object(n.b)("h4",null,"Environment Considerations"),Object(n.b)("p",null,"Reference ",Object(n.b)("a",o({parentName:"p"},{href:"application-components.md#openshift-container-platform-3-11"}),"Application Components Pre-reqs")," for details on creating the necessary ServiceAccount with required permissions, prior to deployment."),Object(n.b)("h4",null,"Service Deployment"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Add Bitnami Helm Repository:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"helm repo add bitnami https://charts.bitnami.com/bitnami\n")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Update the Helm repository:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"helm repo update\n")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Create a Kubernetes Namespace or OpenShift Project (if not already created).")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create namespace <target namespace>\n")),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Deploy Postgresql using the ",Object(n.b)("inlineCode",{parentName:"li"},"bitnami/postgresql")," Helm Chart:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"mkdir bitnami\nmkdir templates\nhelm fetch --untar --untardir bitnami bitnami/postgresql\nhelm template --name postgre-db --set postgresqlPassword=supersecret \\\n  --set persistence.enabled=false --set serviceAccount.enabled=true \\\n  --set serviceAccount.name=<existing service account> bitnami/postgresql \\\n  --namespace <target namespace> --output-dir templates\n(kubectl/oc) apply -f templates/postgresql/templates\n")),Object(n.b)("p",null,"  It will take a few minutes to get the pods ready."),Object(n.b)("h4",null,"Creating Postgresql credentials as Kubernetes Secrets"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("inlineCode",{parentName:"p"},"postgresql-url")," needs to point to the in-cluster (non-headless) Kubernetes Service created as part of the deployment and should take the form of the deployment name with the suffix of ",Object(n.b)("inlineCode",{parentName:"p"},"-postgresql"),":"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl get services | grep postgresql | grep -v headless\nkubectl create secret generic postgresql-url --from-literal=binding='jdbc:postgresql://<helm-release-name>-postgresql' -n <target k8s namespace / ocp project>\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"For the user:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic postgresql-user --from-literal=binding='postgres' -n <target k8s namespace / ocp project>\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"For the user password:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic postgresql-pwd --from-literal=binding='<password used in the helm template command>.' -n <target k8s namespace / ocp project>\n")))),Object(n.b)("h4",null,"Service Debugging & Troubleshooting"),Object(n.b)("p",null,"Access to the in-container password can be made using the following command.  This should be the same value you passed in when you deployed the service."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),'export POSTGRES_PASSWORD=$(kubectl get secret --namespace  <target namespace> postgre-db-postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode)\n')),Object(n.b)("p",null,"And then use the ",Object(n.b)("inlineCode",{parentName:"p"},"psql")," command line interface to interact with postgresql. For that, we use a Docker image as a client to the Postgresql server:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"kubectl run postgre-db-postgresql-client --rm --tty -i --restart='Never' --namespace <target namespace> --image bitnami/postgresql:11.3.0-debian-9-r38 --env=\"PGPASSWORD=$POSTGRES_PASSWORD\" --command -- psql --host postgre-db-postgresql -U postgres -p 5432\n")),Object(n.b)("p",null,"To connect to your database from outside the cluster execute the following commands:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),'    kubectl port-forward --namespace <target namespace> svc/postgre-db-postgresql 5432:5432 &&\\\n    PGPASSWORD="$POSTGRES_PASSWORD" psql --host 127.0.0.1 -U postgres -p 5432\n')),Object(n.b)("h2",null,"BPM"),Object(n.b)("p",null,"The containers microservice component of this Reefer Container EDA reference application can be integrated with a BPM process for the the maintenance of the containers. This BPM process will dispatch a field engineer so that the engineer can go to the reefer container to fix it. The process of scheduling an engineer and then completing the work can best be facilitated through a process based, structured workflow. We will be using IBM BPM on Cloud or Cloud Pak for Automation to best demonstrate the workflow. This workflow can be explored in detail ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml/tree/master/docs/bpm"}),"here"),"."),Object(n.b)("p",null,"In order for the containers microservice to fire the BPM workflow, we need to provide the following information through Kubernetes configMaps and secrets:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Provide in a configMap:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"the ",Object(n.b)("strong",{parentName:"li"},"BPM authentication login endpoint")),Object(n.b)("li",{parentName:"ul"},"the ",Object(n.b)("strong",{parentName:"li"},"BPM workflow endpoint")),Object(n.b)("li",{parentName:"ul"},"the ",Object(n.b)("strong",{parentName:"li"},"BPM anomaly event threshold")),Object(n.b)("li",{parentName:"ul"},"the ",Object(n.b)("strong",{parentName:"li"},"BPM authentication token time expiration"))),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: bpm-anomaly\ndata:\n  url: <replace with your BPM workflow endpoint>\n  login: <replace with your BPM authentication endpoint>\n  expiration: <replace with the number of second for the auth token to expire after>\n  anomalyThreshold: <replace with the number of anomaly events to receive before calling BPM>\nEOF\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Provide your BPM instance’s ",Object(n.b)("strong",{parentName:"p"},"credentials")," in a secret:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic bpm-anomaly --from-literal=user='<replace with your BPM user>' --from-literal=password='<replace with your BPM password>' -n <target k8s namespace / ocp project>\nkubectl describe secrets -n <target k8s namespace / ocp project>\n")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"IMPORTANT:")," The names for both the secret and configMap (",Object(n.b)("inlineCode",{parentName:"p"},"bpm-anomaly"),") is the default the container microservice uses in its ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-container-ms/tree/master/SpringContainerMS/chart/springcontainerms"}),"helm chart"),". Make sure the name for the configMap and secret you create ",Object(n.b)("strong",{parentName:"p"},"match")," the names you used in the containers microservice’s helm chart."),Object(n.b)("p",null,"If you do not have access to any BPM instance with this field engineer dispatching workflow, you can bypass the call to BPM by disabling such call in the container microservice component. For doing so, you can use the following container microservice’s API endpoints:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Enable BPM: ",Object(n.b)("a",o({parentName:"li"},{href:"#bpm"}),Object(n.b)("inlineCode",{parentName:"a"},"http://<container_microservice_endpoint>/bpm/enable"))),Object(n.b)("li",{parentName:"ol"},"Disable BPM: ",Object(n.b)("a",o({parentName:"li"},{href:"#bpm"}),Object(n.b)("inlineCode",{parentName:"a"},"http://<container_microservice_endpoint>/bpm/disable"))),Object(n.b)("li",{parentName:"ol"},"BPM status: ",Object(n.b)("a",o({parentName:"li"},{href:"#bpm"}),Object(n.b)("inlineCode",{parentName:"a"},"http://<container_microservice_endpoint>/bpm/status")))),Object(n.b)("p",null,"where ",Object(n.b)("inlineCode",{parentName:"p"},"<container_microservice_endpoint>")," is the route, ingress or nodeport service you associated to your container microservice component at deployment time."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-microservices-prereqs-index-mdx-abb7e9b64fa44e9464d0.js.map